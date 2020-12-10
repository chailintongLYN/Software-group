const fansreducer=(state={fans:[]},action)=>{
    console.log(action.type);
    switch(action.type){
        case'FANS':
        console.log(action.fans);
        return{fans:action.fans};
        default:
            return state
    }
}
export default fansreducer