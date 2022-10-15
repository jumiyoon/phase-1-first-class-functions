function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    function hey() {return "hey"};
    return hey;
}

function returnsAnAnonymousFunction(){
    return function() {return "hello"};
}