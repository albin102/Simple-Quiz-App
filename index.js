
const questions =[
    {
        question: "Which is the largest Animal in this world?",
        answers:[
            {text: 'shark', correct:false},
            {text: 'Blue whale', correct:true},
            {text: 'Elephant', correct:false},
            {text: 'Giraffe', correct:false}
        ]
    },

    {
        
        question: "Which is the Smallest country in this world?",
        answers:[
            {text: 'vatican city', correct:true},
            {text: 'Bhutan', correct:false},
            {text: 'Nepal', correct:false},
            {text: 'Shrilanka', correct:false}
        ]

    },
    {
        
        question: "Which is the largest desert in this world?",
        answers:[
            {text: 'kalahari', correct:false},
            {text: 'Gobi', correct:false},
            {text: 'sahara', correct:false},
            {text: 'Antartica', correct:true}
        ]
    },
    {
        
        question: "Which is the smallest continent  in the world?",
        answers:[
            {text: 'Asia', correct:false},
            {text: 'Australia', correct:true},
            {text: 'Arctic', correct:false},
            {text: 'Africa', correct:false}
        ]
    }
];

const Question = document.getElementById('question');
const Answer = document.getElementById('answer-buttons');
const NextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    NextButton.innerHTML = 'Next';
    showQuestion()
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex +1;
    Question.innerHTML = questionNumber + '.' + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        Answer.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', function(e){
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === 'true';
            if (isCorrect) {
                selectedBtn.classList.add('correct');
                score++;
                
            }else{
                selectedBtn.classList.add('incorrect')
            }

            Array.from(Answer.children).forEach(button=>{
                if(button.dataset.correct ==='true'){
                    button.classList.add('correct');
                }
                button.disabled = true;
            })
            NextButton.style.display = 'block';

        })
    });
}

function resetState(){
    NextButton.style.display = 'none';
    while (Answer.firstChild) {
        Answer.removeChild(Answer.firstChild)
    }

}

function showScore(){
    resetState();
    Question.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    NextButton.innerHTML =`Play Again`;
    NextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    }else{
        showScore()
    }
}

NextButton.addEventListener('click', ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz()


