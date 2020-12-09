import {useState,useEffect} from 'react';
import "./index.css"
import { Button,Input,Table, Modal, Space  } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
let showDeleteConfirm=()=>{
    confirm({
      title: '确定删除吗?',
      icon: <ExclamationCircleOutlined />,
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

const userColumns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '密码',
      dataIndex: 'pwd',
      key: 'pwd',
    },
    {
      title: '创建时间',
      key: 'createtime',
      dataIndex: 'createtime',
    },
    {
        title: 'role',
        key: 'role',
        dataIndex: 'role',
      },
    {
      title: 'Action',
      key: 'action',
      render:()=>{
          return <Button danger onClick={()=>showDeleteConfirm()}>删除</Button>
      }
    },
  ];


const userData = [
    {
        id:"001",
        username:"xxxx",
        pwd:"123123",
        createtime:"2020-12-08 00:00:00",
        role:"xxxxxxx"
    },
    {
        id:"002",
        username:"asdasd",
        pwd:"1asdasd",
        createtime:"2020-12-08 00:00:00",
        role:"asdasxx"
    },
    {
        id:"003",
        username:"fqwfq",
        pwd:"123123",
        createtime:"2020-12-08 00:00:00",
        role:"qwfqw"
    },
  ];

const wzColumns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '用户名(编写人)',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '文章标题',
      key: 'title',
      dataIndex: 'title',
        width:250,
    },
    {
        title: "类型",
        key: 'type',
        dataIndex: 'type',
    },
    {
    title: "文章内容",
    key: 'text',
    dataIndex: 'text',
    width:500,
    },
    {
    title: '创建时间',
    key: 'createtime',
    dataIndex: 'createtime',
    width:180,
    },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render:()=>{
    //       return <Button danger>删除</Button>
    //   }
    // },
  ];
const wzData = [
    {
        id:"001",
        username:"xx作者",
        title:"xxx",
        type:"xxx",
        text:"asdasfasfsfasfasxxxxxxxxxxxxxx方法沙发沙发沙发沙发萨法沙发沙发沙发嘻嘻嘻嘻嘻啊书法大赛发顺丰",
        createtime:"2020-12-08 00:00:00",
    },
    {
        id:"002",
        username:"xx作者",
        title:"xxx",
        type:"xxx",
        text:"asdasfasfsfasfasxxxxxxxxxxxxxx方法沙发沙发沙发沙发萨法沙发沙发沙发嘻嘻嘻嘻嘻啊书法大赛发顺丰",
        createtime:"2020-12-08 00:00:00",
    },
    {
        id:"003",
        username:"xx作者",
        title:"xxx",
        type:"xxx",
        text:"asdasfasdasdasdasdxxxx方法沙发沙发沙发沙发萨法沙发沙发沙发嘻嘻嘻嘻嘻啊书法大赛发顺丰",
        createtime:"2020-12-08 00:00:00",
    },
  ];


const Index = ()=>{
let [urlIdx,setUrlIdx] = useState("user")
let [date,setDate] = useState(new Date().toLocaleString())
let [data,setData] = useState(userData)
let [columns,setColumns] = useState(userColumns)
let time = null;

useEffect(()=>{
    if(window.location.pathname.includes("user")){
        setUrlIdx("user")
        setData(userData)
        setColumns(userColumns)
    }else if(window.location.pathname.includes("wz")){
        setUrlIdx("wz")
        setData(wzData)
        setColumns(wzColumns)
    }
},[window.location.pathname])

useEffect(()=>{
    clearInterval(time)
    let date;
    date =new Date().toLocaleString(); 
    setDate(date)
    time = setInterval(() => {
        date =new Date().toLocaleString(); 
        setDate(date)
    }, 1000);
    return ()=>{
        clearInterval(time)
        time=null;
        console.log("卸载")
    }
},[])


let setUrl = (url)=>{
    if(url == urlIdx){
        return
    }
    window.location=`/${url}`
}




    return (
        <div className="index">
            <div className="index_head">
                <div className="index_head_title">
                    后台管理系统
                </div>
                <div className="index_head_time">
                    {date}
                </div>
                <div className="index_head_btn">
                    <Button  type="primary" onClick={()=>alert("sure")}>退出</Button>
                </div>
            </div>
            <div  className="index_left">
                <div  className={`index_left_title ${urlIdx=="user"?"active":""}`} onClick={()=>setUrl("user")}>
                    用户信息管理
                </div>
                <div   className={`index_left_title ${urlIdx=="wz"?"active":""}`} onClick={()=>setUrl("wz")}>
                    文章管理
                </div>
            </div>
            <div  className="index_right">
                <div  className="index_right_head">
                    搜索  <Input placeholder="请输入" /> <Button type="primary" onClick={()=>alert("sure")}>确定</Button>
                </div>
                <div  className="index_right_content">
                <Table columns={columns} dataSource={data} rowKey="id"/>
                </div>

            </div>
        </div>
    )
}   

export default Index