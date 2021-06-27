const data=[{
  question: "What type of lion never roars? ",
  a: "A dandelion",
  b: "A captured lion",
  c: "A lion cub",
  d :"A mountain lion",
  ans:"ans1",
},{
  question: "If eleven plus two equals one then what is nine plus five?",
  a: "Seven",
  b: "Three",
  c: "Two",
  d: "Fourteen",
  ans:"ans3",
},{
  question: "What is always coming but never arrives?",
  a: "Tomorrow ",
  b: "A train ",
  c: "Your paycheck",
  d: "The mail ",
  ans:"ans1",
},{
  question: "What has 13 hearts, but no other organ?",
  a: "A soccer team",
  b: "A deck of cards",
  c: "A science lab",
  d: "An operating theatre ",
  ans:"ans2",
},
{
  question: "What has 42 eyes and 12 faces? ",
  a: "An alien",
  b: "A hockey team",
  c: "A pencil",
  d :"A pair of dice",
   ans:"ans4",
}]
const playAgain = document.querySelector(".play-again-btn");
const question = document.querySelector(".question");
const option1= document.querySelector("#option1");
const option2= document.querySelector("#option2");
const option3= document.querySelector("#option3");
const option4= document.querySelector("#option4");
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showScore");
const start=document.querySelector(".start-btn");
var count=0;
var score=0;
const question_load = ()=> {
  question.innerHTML = data[count].question;
    option1.innerHTML = data[count].a;
    option2.innerHTML = data[count].b;
    option3.innerHTML = data[count].c;
    option4.innerHTML = data[count].d;
}
start.addEventListener('click',function() {
  start.style.display = "none";
  game.style.display= "flex";
  question_load();
});
const getCheckAnswer =()=>{
  let answer;
  answers.forEach(item =>{
      if(item.checked){
        answer = item.id;
      }});
      return answer;
    }
const deselectAll =()=>{
  answers.forEach(item =>{
    item.checked = false;
  })}
  submit.addEventListener('click' , ()=>{
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer === data[count].ans){
      score++;
    }
    count++;
    deselectAll();
    if(count === 4)
    {
      document.getElementById("submit").innerHTML="Finish";
    }
    if(count < data.length){
      question_load();
    }else{
      AddStats();
      displayCong();
    }})
    function AddStats() {
      const stats = document.querySelector(".cong-content");
      for (let i = 1; i <= 1; i++) {
        const statsElement = document.createElement("p");
        statsElement.classList.add("stats");
        stats.appendChild(statsElement);
      }
      let p = stats.querySelectorAll("p.stats");
        p[0].innerHTML = "You got " + score + " correct answers out of 5 ";
    }
function displayCong() {
  cong.style.display= "block";
}
playAgain.addEventListener('click',function() {
  cong.style.display = "none";
  count=0;
  score=0;
  question_load();
});
