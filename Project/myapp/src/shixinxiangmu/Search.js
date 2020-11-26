import React from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './search.css'


const Search=(props)=>{
  
  
  
  return (
  <div>
    <SearchBar
      
      placeholder="最佳热帖"
      onSubmit={value => console.log(value, 'onSubmit')}
      onClear={value => console.log(value, 'onClear')}
      onFocus={() => console.log('onFocus')}
      onBlur={() => console.log('onBlur')}
      onCancel={() =>props.history.goBack()}
      showCancelButton
      
      // onChange={this.onChange}
      // onCancel={()=>}
    />
    <div class="bangdan">
      <p>热搜榜单</p>
    </div>
    <div class='list'>
      <ol>
        <li><a>阿里云新品发布会</a></li>
        <span><img src='./xiaohuomiao.png'/></span>
      </ol>
    </div>
  </div>);

}


export default Search;