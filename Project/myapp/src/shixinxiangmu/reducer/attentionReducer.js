const guanzhureducer=(state={content:[]},action)=>{
    console.log(action.type);
    switch(action.type){
        case'GUANZHU':
        console.log(action.content);
        // var newstate=state;
        // newstate.content = action.content;
            return {content:action.content};
        default:
            return state;
    }
}
export default guanzhureducer