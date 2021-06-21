const obj1 = {
  serverName:"Devesnest",
}
const obj2 = {
  serverName:"Discord",
}
function myFunction(a,b){
  console.log(this);
  console.log(a+b);
}
myFunction.call(obj1 , 5 , 3)
myFunction.apply(obj2 , [5 , 3])
const bd=myFunction.bind(obj1 , 5 , 3)
bd()
