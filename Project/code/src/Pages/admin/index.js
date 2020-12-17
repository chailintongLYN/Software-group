import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./index.css"
import { Button, Input, Table, Modal, Space, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
const { Column } = Table;

// 用户查询接口
const fetchUser = function (query) {
  return new Promise((resolve, reject) => {
    axios(`http://localhost:8888/api/user?name=${query}`).then(result => {
      resolve(result.data)
    })
  })
}
// 用户删除接口
const delUser = function (id) {
  return new Promise((resolve, reject) => {
    axios.post(`http://localhost:8888/api/user/del`, { id }).then(result => {
      resolve(result.data)
    })
  })
}
// 文章查询接口
const fetchArticle = function (query) {
  return new Promise((resolve, reject) => {
    axios(`http://localhost:8888/api/article?title=${query}`).then(result => {
      resolve(result.data)
    })
  })
}
// 文章删除接口
const delArticle = function (id) {
  return new Promise((resolve, reject) => {
    axios.post(`http://localhost:8888/api/article/del`, { id }).then(result => {
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
  useEffect(() => {
    if (window.location.pathname.includes("user")) {
      fetchUser(query).then(res => setData(res))
    } else if (window.location.pathname.includes("wz")) {
      fetchArticle(query).then(res => setData(res))
    }
  }, [search])
  useEffect(() => {
    if (window.location.pathname.includes("user")) {
      setUrlIdx("user")
    } else if (window.location.pathname.includes("wz")) {
      setUrlIdx("wz")
    }
  }, [window.location.pathname])

  let showDeleteConfirm = (uid) => {
    confirm({
      title: '确定删除吗?',
      icon: <ExclamationCircleOutlined />,
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        if (window.location.pathname.includes("user")) {
          delUser(uid).then(_ => {
            message.success('删除成功！');
            fetchUser(query).then(res => setData(res))
          })
        } else if (window.location.pathname.includes("wz")) {
          delArticle(uid).then(_ => {
            message.success('删除成功！');
            fetchArticle(query).then(res => setData(res))
          })
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  let time = null;
  useEffect(() => {
    clearInterval(time)
    let date;
    date = new Date().toLocaleString();
    setDate(date)
    time = setInterval(() => {
      date = new Date().toLocaleString();
      setDate(date)
    }, 1000);
    return () => {
      clearInterval(time)
      time = null;
      console.log("卸载")
    }
  }, [])


  let setUrl = (url) => {
    if (url == urlIdx) {
      return
    }
    window.location = `/${url}`
  }


  var tableElement
  if (window.location.pathname.includes("user")) {
    tableElement = <Table dataSource={data}>
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
  } else if (window.location.pathname.includes("wz")) {
    tableElement = <Table dataSource={data}>
      <Column title="id" dataIndex="textid" key="textid" />
      <Column title="用户名(编写人)" dataIndex="username" key="username" />
      <Column width="250px" title="文章标题" dataIndex="title" key="title" />
      <Column title="类型" dataIndex="type" key="type" />
      <Column width="500px" title="文章内容" dataIndex="text" key="text" />
      <Column width="180px" title="创建时间" dataIndex="ctime" key="ctime" />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <Button danger onClick={() => showDeleteConfirm(record.textid)}>删除</Button>
          </Space>
        )}
      />
    </Table>
  }

  return (
    <div className="index">
      <div className="index_head">
        <div className="index_head_title">后台管理系统</div>
        <div className="index_head_time">{date}</div>
        <div className="index_head_btn">
          <Button type="primary" onClick={() => alert("sure")}>退出</Button>
        </div>
      </div>
      <div className="index_left">
        <div className={`index_left_title ${urlIdx == "user" ? "active" : ""}`} onClick={() => setUrl("user")}>用户信息管理</div>
        <div className={`index_left_title ${urlIdx == "wz" ? "active" : ""}`} onClick={() => setUrl("wz")}>文章管理</div>
      </div>
      <div className="index_right">
        <div className="index_right_head">
          搜索  <Input value={query} placeholder="请输入搜索内容" onChange={e => setQuery(e.target.value)} /> <Button type="primary" onClick={() => setSearch(query)}>确定</Button>
        </div>
        <div className="index_right_content">{tableElement}</div>
      </div>
    </div>
  )
}

export default Index