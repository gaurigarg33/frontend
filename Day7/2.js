var student={
    name:"David Ray",
    sclass:"VI",
    rollno:12,
};
console.log("Object before deleting rollno property:",student);
document.write("Object before deleting rollno property:",student +"<br>");

delete student.rollno

console.log("Object after deleting the rollno property:",student);
document.write("Object after deleting the rollno property:",student +"<br>");

document.write( "<br>");
