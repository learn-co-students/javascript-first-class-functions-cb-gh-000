function receivesAFunction(callback) {
  callback()
}


function returnsANamedFunction() {
  return receivesAFunction
}

function returnsAnAnonymousFunction() {
  return function() {
    
  }
}
