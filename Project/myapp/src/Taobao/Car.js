import { Carousel, WingBlank } from 'antd-mobile';
import React from 'react';

class Car extends React.Component {
  state = {
    data: ['1', '2', '3','4','5','6','7','8'],
    imgHeight: 120,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          'https://gw.alicdn.com/imgextra/i1/67/O1CN0130AF9b1CMjAU53KkO_!!67-0-lubanu.jpg', 
          'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg', 
          'https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg',
          'https://gw.alicdn.com/imgextra/i2/40/O1CN01n8uy6A1CAMTNz6YIO_!!40-0-lubanu.jpg',
          'https://gw.alicdn.com/imgextra/i3/191/O1CN01VWfpT01DHWHQurTZ7_!!191-0-lubanu.jpg',
          'https://gw.alicdn.com/imgextra/i3/124/O1CN01DWedGM1Cmpk9TGU8s_!!124-0-lubanu.jpg',
          'https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i1/6000000003782/O1CN01eDY6uw1doCYA4lx14_!!6000000003782-0-octopus.jpg',
          'https://gw.alicdn.com/imgextra/i2/19/O1CN01FYURlX1C0k9mP4lrc_!!19-0-lubanu.jpg'
        ],
      });
    }, 100);
  }
  render() {
    return (
      
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={1}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val}
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: 120,
                width:375,
                margin:0
               
              }}
            >
              <img
                src={`${val}`}
                alt=""
                style={{ 
                  height: 120,
                  width:375,
                  margin:0, 
                  verticalAlign: 'top' ,
                  padding:0
                }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      
    );
  }
}

export default Car;