const quizDB= [{
    q: "What is capital of India?",
    a:  "Gandhinagar", 
    b: "Surat", 
    c: "Delhi", 
    d: "Mumbai",
    ans:"ans3"
    },
{
    q: "What is the capital of Thailand?",

    a:  "Lampang", 
    b: "Phuket", 
    c: "Ayutthaya", 
    d: "Bangkok",
    ans:"ans4"
 
},
{
    q: "What is the capital of Gujarat",
    
    a: "Surat", 
    b: "Vadodara", 
    c: "Gandhinagar", 
    d: "Rajkot",
    ans:"ans3"
 
}
 
]

const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showScore")

let questionCount=0;
let score=0;
const loadQuestion =()=>{
    const questionList=quizDB[questionCount];
question.innerText= questionList.q;
option1.innerText=questionList.a;
option2.innerText=questionList.b;
option3.innerText=questionList.c;
option4.innerText=questionList.d;


}
loadQuestion();
const getAnswer =()=>{
    let answer;
    answers.forEach((curAnsEle)=>{
if(curAnsEle.checked){
    answer=curAnsEle.id;
}
}

);
return answer;
};

submit.addEventListener('click',()=>{
    const checkAnswer=getAnswer();
    if(checkAnswer===quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3>You Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onClick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove("scoreArea")
    }
})