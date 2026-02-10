const question_area = document.querySelector('.question_area');
const answers = document.querySelectorAll('.answers button');
const verdict = document.querySelector('#verdict');
const nextBtn= document.querySelector('#nextBtn');
const backBtn = document.querySelector('#backBtn');
const body = document.querySelector('#body');
let index = 0;



const questions = [
    {
        text:'What is 1 + 1 =', options: ['1' , '2' , '3'] , correct: '2'
    },

    {
        text:'Guess my name?' , options:['Julius', 'Kamau' , 'Iphone'] , correct:'Julius'
    },

    {
        text:'Guess my phone?' , options:['Samsung' , 'Huawei' , 'Iphone'], correct: 'Iphone'
    }
];
question_area.textContent = questions[index].text;
answers.forEach((answer, i)=>{
    answer.textContent = questions[index].options[i];
    answer.addEventListener('click', ()=>{
        if(answer.textContent == questions[index].correct){
            verdict.textContent = '✅Correct'
            body.style.background = "yellow";
            nextquestion();
        }
        else{
            verdict.textContent = "❌Wrong";
            body.style.background = 'red';
        }
    })
});

nextBtn.addEventListener('click' , ()=>{
    nextButton();
})
backBtn.addEventListener('click' , ()=>{
    backButton();
})



function nextquestion (){
    index++;
    if(index >= questions.length){
        question_area.textContent = '';
        answers.forEach((btn)=>{btn.style.display = 'none';});
        backBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        verdict.style.fontSize = '2rem';
        verdict.textContent = 'COMPLETED 🎊'
        body.style.background = 'blue';
    }
    question_area.textContent = questions[index].text;
    answers.forEach((answer, i)=>{
    answer.textContent = questions[index].options[i];
});
}

function nextButton(){
    index++;
    if(index >= questions.length){
        index = 0;
    }
    question_area.textContent = questions[index].text;
    answers.forEach((answer, i)=>{
    answer.textContent = questions[index].options[i];
});    
    

}

function backButton(){
    index--;
    if(index < 0){
        index = 0;
    }
    question_area.textContent = questions[index].text;
    answers.forEach((answer, i)=>{
    answer.textContent = questions[index].options[i];
});    

}