import React from 'react';
import { Button, TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class Mytab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }
    render() {
        const { pathname } = this.props.location;
        console.log(pathname.split('/'));
        return (
            <div style={ {
                position: 'fixed',
                width: '100%',
                height:60,
                bottom: 0
            } }>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="red"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={
                            <i className='iconfont icon-home'></i>                           
                        }
                        selectedIcon={
                            <i className='iconfont icon-home'></i>                           
                        }
                        selected={ pathname === '/' }
                        onPress={ () => {
                            this.props.history.push('/');
                        } }
                        data-seed="logId"
                        style={{
                            position:'absolute',
                            left:0,
                            width:30
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-shoucang2'></i>                           
                        }
                        selectedIcon={
                            <i className='iconfont icon-shoucang2'></i>                           
                        }
                        title="收藏"
                        key="cart"
                        selected={ pathname === '/cart' }
                        onPress={ () => {
                            this.props.history.push('/cart')
                        } }
                        data-seed="logId1"
                    ></TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-order'></i>
                        }
                        selectedIcon={
                            
                            <i className="iconfont icon-order"/>
                         }
                        title="订单列表"
                        key="list"
                        selected={ pathname==="/list" }
                        onPress={ () => {
                            this.props.history.push('/list')
                        } }
                        data-seed="logId2"
                    ></TabBar.Item>
                    <TabBar.Item
                        icon={<i className='iconfont icon-user'></i> }
                        selectedIcon={ 
                            <i className="iconfont icon-user"></i>
                         }
                        title="我的淘宝"
                        key="my"
                        selected={ this.state.selectedTab === 'yellowTab' }
                        onPress={ () => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        } }
                        data-seed="logId3"
                    >                   
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default withRouter(Mytab);