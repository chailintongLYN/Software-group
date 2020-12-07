const shoucangreducer=(state={shoucang:[]},action)=>{
    console.log(action.type);
        switch(action.type){
            case'SHOUCANG':
            console.log(action.shoucang);
            return {shoucang:action.shoucang};
        default:
            return state;
        }
    }

export default shoucangreducer