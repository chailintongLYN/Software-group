// let datalist=[];
const homereducer=(state={datalist:[]},action)=>{
    switch(action.type){
        case 'Get':
            //return 
             return {datalist:action.datalist}
        default:
            return state;
    }
}
export default homereducer