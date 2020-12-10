const followersreducer=(state={follow:[]},action)=>{
    console.log(action.type);
    switch(action.type){
        case"FOLLOW":
        console.log(action.follow)
        return {follow:action.follow};
        default:
            return state;
    }
}
export default followersreducer