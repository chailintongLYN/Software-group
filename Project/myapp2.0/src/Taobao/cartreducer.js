import { scryRenderedComponentsWithType } from "react-dom/test-utils";


let srr=new Object();
let shoucang=[];
function cartreducer(state=shoucang,action){
    if(action.type=='ADD_TODO'){
        let i=0;
        srr.id=action.id;
        srr.title=action.title;
        shoucang[i]=srr;
        return {...state,shoucang:action.shoucang}
    }
    if(action.type=='DEL_TODO'){
        // action.index
        let arr = [...state];
        arr.splice(action.id,1);
        return arr;
    }
    return state;
}
export default cartreducer
