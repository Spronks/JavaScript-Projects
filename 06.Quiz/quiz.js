const quizData = [

    {
        question: "Which framework/library is related to JS?",
        a:'.NET',
        b:'Flask',
        c:'React',
        d:'Django',
        correct: 'c'
    },
    {
        question: "Which is not a programming language?",
        a:'Html',
        b:'Javascript',
        c:'Python',
        d:'Java',
        correct: 'a'
    },
    {
        question: "CSS stands for?",
        a:'Cascading Style Sheets',
        b:'Corresponding Simplification Stylesheet',
        c:'Creating Style Sheets',
        d:'Cascading Style State',
        correct: 'a'
    },
    {
        question: "Which is a Javascript framework?",
        a:'Angular',
        b:'Vue',
        c:'Ember',
        d:'all of the above',
        correct: 'd'
    }   
]

let answer = document.querySelectorAll('.answer')
let question = document.getElementById('question')
let option_a = document.getElementById('a_value')
let option_b = document.getElementById('b_value')
let option_c = document.getElementById('c_value')
let option_d = document.getElementById('d_value')

const submitBtn = document.getElementById('submit')

let currentQuestion = 0;
let score = 0;

loadQuiz()

function loadQuiz() {

    deselect()
      
    question.innerHTML = quizData[currentQuestion].question
    option_a.innerText = quizData[currentQuestion].a
    option_b.innerText = quizData[currentQuestion].b
    option_c.innerText = quizData[currentQuestion].c
    option_d.innerText = quizData[currentQuestion].d
}

function deselect() {
    answer.forEach(answer => answer.checked = false)
}

submitBtn.addEventListener('click', ()=>{

    let selectedOption;
    answer.forEach(answer=>{
        if(answer.checked) {
            selectedOption=answer.id
        }
    })

    if(selectedOption==quizData[currentQuestion].correct){
        score++
    }

    currentQuestion++
    if (currentQuestion==quizData.length){
        document.getElementById('quizDiv').innerHTML = `<h1>You have answered correctly ${score} out of ${quizData.length} questions!</h1>`
    } else {
        loadQuiz()
    }
    
})