var arr1=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
arr1.sort();
var max=1;
var c=1;
var ans=arr1[0];
var i;
for (i=0;i<arr1.length;i++)
{
  if(arr1[i]==arr1[i-1])
  c++;
  else
    {
      if(c>max)
      {
        max=c;
        ans=arr1[i-1];
      }
      c=1;
    }
}
if(c>max){
  max=c;
  ans=arr1[arr1.length-1];
}
console.log(ans + " " + "(" + (max) + " times"+")");
