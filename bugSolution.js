function foo(a, b) {
  a = a === undefined ? 0 : a;
  b = b === undefined ? 0 : b;
  return a + b; 
}

console.log(foo(undefined, 5)); // 5
console.log(foo(null, 5)); // 5

//Alternative using optional chaining
function foo2(a,b){
    return (a ?? 0) + (b ?? 0);
}
console.log(foo2(undefined,5)); //5
console.log(foo2(null,5)); //5