import React from 'react'
const Search=(props)=>{
  
  
  
    return (<div>
      <SearchBar
        value="宝贝"
        placeholder="Search"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() =>props.history.goBack()}
        showCancelButton
        // onChange={this.onChange}
        // onCancel={()=>}
      />
    </div>);
  
}


export default Search;