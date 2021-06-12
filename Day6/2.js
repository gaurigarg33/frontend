var array_clone=function(arr)
{
  return arr.slice(0);
};
console.log(array_clone([1,2,4,0]));
console.log(array_clone([1,2,[4,0]]));
