import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./index.css"
import { Button, Input, Table, Modal, Space, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
const { Column, ColumnGroup } = Table;
// let showDeleteConfirm = (uid) => {
//   console.log('uid :>> ', uid);
//   confirm({
//     title: '确定删除吗?',
//     icon: <ExclamationCircleOutlined />,
//     content: '',
//     okText: 'Yes',
//     okType: 'danger',
//     cancelText: 'No',
//     onOk() {
//       console.log('OK');
//       console.log('this :>> ', this);
//     },
//     onCancel() {
//       console.log('Cancel');
//     },
//   });
// }
// const userColumns = [
//   {
//     title: 'id',
//     dataIndex: 'uid',
//     key: 'uid',
//   },
//   {
//     title: '用户名',
//     dataIndex: 'username',
//     key: 'username',
//   },
//   {
//     title: '密码',
//     dataIndex: 'passwd',
//     key: 'passwd',
//   },
//   {
//     title: '创建时间',
//     key: 'ctime',
//     dataIndex: 'ctime',
//   },
//   {
//     title: 'role',
//     key: 'role',
//     dataIndex: 'role',
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (text, record) => {
//       return <Button danger onClick={() => showDeleteConfirm(record.uid)}>删除</Button>
//     }
//   },
// ];


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
    width: 250,
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
    width: 500,
  },
  {
    title: '创建时间',
    key: 'createtime',
    dataIndex: 'createtime',
    width: 180,
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
    id: "001",
    username: "xx作者",
    title: "xxx",
    type: "xxx",
    text: "asdasfasfsfasfasxxxxxxxxxxxxxx方法沙发沙发沙发沙发萨法沙发沙发沙发嘻嘻嘻嘻嘻啊书法大赛发顺丰",
    createtime: "2020-12-08 00:00:00",
  },
  {
    id: "002",
    username: "xx作者",
    title: "xxx",
    type: "xxx",
    text: "asdasfasfsfasfasxxxxxxxxxxxxxx方法沙发沙发沙发沙发萨法沙发沙发沙发嘻嘻嘻嘻嘻啊书法大赛发顺丰",
    createtime: "2020-12-08 00:00:00",
  },
  {
    id: "003",
    username: "xx作者",
    title: "xxx",
    type: "xxx",
    text: "asdasfasdasdasdasdxxxx方法沙发沙发沙发沙发萨法沙发沙发沙发嘻嘻嘻嘻嘻啊书法大赛发顺丰",
    createtime: "2020-12-08 00:00:00",
  },
];

const fetchUser = function (query) {
  return new Promise((resolve, reject) => {
    axios(`http://localhost:8888/api/user?name=${query}`).then(result => {
      resolve(result.data)
    })
  })
}
const delUser = function (id) {
  console.log('id :>> ', id);
  return new Promise((resolve, reject) => {
    axios.post(`http://localhost:8888/api/user/del`, { id }).then(result => {
      console.log('result :>> ', result);
      resolve(result.data)
    })
  })
}

const Index = () => {
  let [urlIdx, setUrlIdx] = useState("user")
  let [date, setDate] = useState(new Date().toLocaleString())
  let [data, setData] = useState([])
  let [query, setQuery] = useState('')
  let [search, setSearch] = useState('')
  let time = null;
  useEffect(() => {
    fetchUser(query).then(res => setData(res))
    // setData(wzData)
    // setColumns(wzColumns)
  }, [search])
  useEffect(() => {
    if (window.location.pathname.includes("user")) {
      setUrlIdx("user")
    } else if (window.location.pathname.includes("wz")) {
      setUrlIdx("wz")
    }
  }, [window.location.pathname])

  let showDeleteConfirm = (uid) => {
    console.log('uid :>> ', uid);
    confirm({
      title: '确定删除吗?',
      icon: <ExclamationCircleOutlined />,
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        delUser(uid).then(_ => {
          message.success('删除成功！');
          fetchUser(query).then(res => setData(res))
        })
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  // useEffect(() => {
  //   clearInterval(time)
  //   let date;
  //   date = new Date().toLocaleString();
  //   setDate(date)
  //   time = setInterval(() => {
  //     date = new Date().toLocaleString();
  //     setDate(date)
  //   }, 1000);
  //   return () => {
  //     clearInterval(time)
  //     time = null;
  //     console.log("卸载")
  //   }
  // }, [])


  let setUrl = (url) => {
    if (url == urlIdx) {
      return
    }
    window.location = `/${url}`
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
          <Button type="primary" onClick={() => alert("sure")}>退出</Button>
        </div>
      </div>
      <div className="index_left">
        <div className={`index_left_title ${urlIdx == "user" ? "active" : ""}`} onClick={() => setUrl("user")}>
          用户信息管理
                </div>
        <div className={`index_left_title ${urlIdx == "wz" ? "active" : ""}`} onClick={() => setUrl("wz")}>
          文章管理
                </div>
      </div>
      <div className="index_right">
        <div className="index_right_head">
          搜索  <Input value={query} placeholder="请输入用户名" onChange={e => setQuery(e.target.value)} /> <Button type="primary" onClick={() => setSearch(query)}>确定</Button>
        </div>
        <div className="index_right_content">
          {/* <Table columns={columns} dataSource={data} rowKey="uid" /> */}
          <Table dataSource={data}>
            <Column title="id" dataIndex="uid" key="uid" />
            <Column title="用户名" dataIndex="username" key="username" />
            <Column title="密码" dataIndex="passwd" key="passwd" />
            <Column title="创建时间" dataIndex="ctime" key="ctime" />
            <Column title="role" dataIndex="role" key="role" />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle">
                  <Button danger onClick={() => showDeleteConfirm(record.uid)}>删除</Button>
                </Space>
              )}
            />
          </Table>
        </div>

      </div>
    </div>
  )
}

export default Index