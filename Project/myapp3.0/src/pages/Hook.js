import React,{useState,useEffect,useContext} from 'react'
import Context from './Context'
let i = 0;
const Hook = () => {
    const context = useContext(Context)
    console.log(context)
    
    const [time,setTime] = useState(new Date().toLocaleString());
    // 第二个参数是空数组时相当于componentDidMount
    useEffect(()=>{
        console.log('effect');
        setInterval(()=>{
            i++
            setTime(new Date().toLocaleString())
        },1000)
        return ()=>{
            console.log('componentWillUnmount')
        }
    },[])
    // 第二个参数不加或者指定某个值时相当于componentDidUpdate
    useEffect(()=>{
        console.log(1)
    })
    return (
        <div>
            {time}
            <h1>{context}</h1>
        </div>
    )
}

export default Hook