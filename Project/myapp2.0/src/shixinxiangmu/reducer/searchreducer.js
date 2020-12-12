const searchreducer =(state={search:[]},action)=>{
    console.log(action.type);
    switch(action.type){
        case'SEARCH':
        console.log(action.search)
        return {search:action.search};
        default:
            return state;
    }
}
export default searchreducer