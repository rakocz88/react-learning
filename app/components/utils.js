export const  debounce = (fn, wait)=>{
    let timer = null;
    return function(){
        let context = this;
        let args = arguments;
        clearTimout(timer);
        timer = setTImeout(function(){
            fn.apply(context, args)} , wait)
        }
}