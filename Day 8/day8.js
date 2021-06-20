
document.write("<table>");
for(i=0 ;i<8 ;i++){
    fun();
}
function fun(){
 var row ="<tr>";
 var col = "<td>";
for(i=0 ;i<8 ;i++){
  document.write(row);
  console.log(row);
  for(j=0 ;j<17;j++){
    document.write(col);
    console.log(col);
  }
}
}
document.write("</table>");
var s = document.querySelectorAll('td');
s.forEach(item=>{
  item.addEventListener("click",function(){
    if(item.classList.contains("color"))
    {

      item.classList.remove("color")
    }
    else{

      item.classList.add("color")
    }
  })
})
