showtask();
let item = document.getElementById("item");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function(){
    itemval = item.value;
    if(itemval.trim()!=0){
        let webtask = localStorage.getItem("localtask");
        if(webtask == null){
            taskObj = [];
        }
        else{
            taskObj = JSON.parse(webtask);
        }
        taskObj.push({'task_name':itemval, 'completeStatus':false});

        localStorage.setItem("localtask", JSON.stringify(taskObj));
        item.value = '';
    }
    showtask();
})
function showtask(){
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<td>${item.task_name}</td>`;
        }else{
            taskCompleteValue = `<td id="text">${item.task_name}</td>`;
        }
        html += `<tr>
                    <th scope="row" id="size">${index+1}</th>
                     ${taskCompleteValue}

                    <td><button type="button" id="btn3" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i></button></td>
                </tr>`;
    });
    addedtasklist.innerHTML = html;
}
function deleteitem(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}
let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function(){
    let addtaskbtn = document.getElementById("addtaskbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
        taskObj = [];
    }
    addtaskbtn.style.display="inline-block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();

})
