
const homereducer = (state={username:'',data:[]},action)=>{
    switch(action.type){
        case 'LOGIN':
            Object.assign({},state,{username:'123'})
            return {username:action.username}
        default:
            return state;
        
    }
}

export default homereducer;