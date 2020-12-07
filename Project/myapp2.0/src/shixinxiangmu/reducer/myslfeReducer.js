const myselfreducer=(state={fansandfllow:[],getmytext:[]},action)=>{
    console.log(action.type);
    switch(action.type){
        case'FANS&FLLOW':
            console.log(action.fansandfllow);
            return {...state,fansandfllow:action.fansandfllow};
        case'GETMYTEXTS':
            console.log(action.getmytext);
            return {...state,getmytext:action.getmytext}
        default:
            return state;
    }
}
export default myselfreducer