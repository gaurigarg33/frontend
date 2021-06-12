var first=function(arr,i)
{
  if(i==null)
  {
    return(arr[0]);
  }
  else if(i<0)
  {
    return([])
  }
  else{
    return(arr.slice(0,i))
  }
};
console.log(first([7,9,0,-2]));
console.log(first([],3));
console.log(first([7,9,0,-2],3));
console.log(first([7,9,0,-2],6));
console.log(first([7,9,0,-2],-3));
