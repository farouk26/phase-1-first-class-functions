function receivesAFunction(callback){
    return callback();
}
console.log(callback);
recievesAFunction(callback);
function returnsANamedFunction() {
    return function namedFunction() {
    }
}
function returnsAnAnonymousFunction() {
    return function(){
        return function name(){}
    }
}