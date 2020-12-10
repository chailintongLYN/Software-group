const homereducer=(state={newtext:[],js:[],react:[],nodejs:[],html:[],css:[]},action)=>{
    console.log(action.type);
    switch(action.type){
        case'HOME':
        console.log('newtext:',action.newtext);
        console.log('js:',action.js);
        console.log('react:',action.react)
        console.log("nodejs:",action.nodejs);
        console.log("html:",action.html);
        console.log("css:",action.css);
        return {
            newtext:action.newtext,
            js:action.js,
            react:action.react,
            nodejs:action.nodejs,
            nodejs:action.nodejs,
            html:action.html,
            css:action.css
        };
    default:
        return state;
    }
}
export default homereducer