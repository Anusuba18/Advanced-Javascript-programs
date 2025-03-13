function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    if(b===0)
        return "Cannot divide by 0";
    else
    return a/b;
}
export {add,subtract,mul,div};