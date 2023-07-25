function receivesAFunction(callback){
    return callback();
}
console.log(callback);
recievesAFunction(callback);
function returnsANamedFunction(name) {
    return function namedFunction() {
    }
}
function returnsAnAnonymousFunction(anon) {
    return function(){
        return function name(){}
    }
}