const goodthingsrecommendreducer=(state={goodthingsrecommend:[]},action)=>{
    console.log(action.type);
        switch(action.type){
            case'GOODTHINGSRECOMMEND':
            console.log(action.goodthingsrecommend);
            return {goodthingsrecommend:action.goodthingsrecommend};
        default:
            return state;
        }
    }

export default goodthingsrecommendreducer