function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return (function example() {
        console.log('Hey');
    });
}

function returnsAnAnonymousFunction() {
    return (function () {
        console.log('Hey');
    });
}
