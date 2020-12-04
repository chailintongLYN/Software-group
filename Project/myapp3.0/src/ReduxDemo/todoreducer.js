//reduxer是一个纯函数，没有副作用，有相同的输入一定会有相同的输出
//action是更新状态唯一的途径，就是一个普通的对象，包含一个type属性
//syore链接action和reducer



let todo = [1,2,3]

function todolist(state=todo,action){
    if(action.type=='ADD_TODO'){
        console.log('reducer',action);
        return [...state,action.value]
    }
    if(action.type=='DEL_TODO'){
        // action.index
        let arr = [...state];
        arr.splice(action.index,1);
        return arr;
    }
    return state;
}
export default todolist;