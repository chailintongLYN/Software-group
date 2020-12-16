const homereducer=(state={newtext:[],js:[],react:[],html:[],css:[],lunbotu:[]},action)=>{
    console.log(action.type);
    switch(action.type){
        case'HOME':
        console.log('newtext:',action.newtext);
        console.log('js:',action.js);
        console.log('react:',action.react)
        console.log("html:",action.html);
        console.log("css:",action.css);
        console.log('lunbotu',action.lunbotu)
        return {
            newtext:action.newtext,
            js:action.js,
            react:action.react,
            html:action.html,
            css:action.css,
            lunbotu:action.lunbotu
        };
    default:
        return state;
    }
}
export default homereducer