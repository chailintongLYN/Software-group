const commendreducer=(state={commend:[]},action)=>{
    console.log(action.type);
        switch(action.type){
            case'COMMEND':
            console.log(action.commend);
            return {commend:action.commend};
        default:
            return state;
        }
    }

export default commendreducer