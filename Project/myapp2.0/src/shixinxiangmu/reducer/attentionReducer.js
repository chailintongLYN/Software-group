const guanzhureducer=(state={list:[]},action)=>{
    switch(action.type){
        case'GUANZHU':
        state=action.content;
        return state;
        default:
            return state;
    }
}
export default guanzhureducer