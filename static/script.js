const quizData =[
    {
        question: "Which statement describes the benefit of making your applications redundant across Azure regional pairs?",
        a: "Regional pairs are inthe same geographical area, so they share the same power infrastructure.",
        b: "In the event of a multi-regional outage, Microsoft will prioritize the recovery of one region in each pair.",
        C: "Regional pairs allow planned Azure system updates to be rolled out to paired regional at the same time.",
        d: "Utilizing regional pairs ensures that the recovery of one regional pairs is prioritized over every other pair.",
        correct: "b",
    },
    {
       question: "How can you use testing to predict outcomes in your cloud environment??",
        a: "By identifying the source of errors that are reported by users.",
        b: "By performing different functionality tests in pre-production and production environment.",
        C: "By excluding infrastructure deployment models from test plans.",
        d: "By performing scheduled security tests on application code in development and production environment.",
        correct: "d",
    },
    {
        question: "______ allow you to define a repeatable set of governance tools and standard Azure resources that your organization requires.",
         a: "Azure Blueprints",
         b: "Azure Policy",
         C: "Azure DevOps",
         d: "Azure Resource Manager (ARM) templates",
         correct: "a",
     },
     {
        question: "Which Azure service allows you to estimate the cost of resources you plan to deploy in the future.",
         a: "Azure Advisor",
         b: "Pricing Calculator",
         C: "Azure Cost Management",
         d: "The premier tier support plan",
         correct: "b",
     },
     {
        question: "Session timeout properties in Azure Virtual Desktop _____",
         a: "allow you to configure the ability to end sessions when time limits are reached",
         b: "allow you to log suspicious user activity",
         C: "are configured via the global group policy on a group of session hosts.",
         d: "should be configured after golden image creation",
         correct: "a",
     },
     {
        question: "Azure ____ is a tool specifically designed to upload files to Azure blob or file storage that allows you to restart a file transfer from the stopped position.",
         a: "AzCopy",
         b: "Databricks",
         C: "Data Lake",
         d: "Service Fabric",
         correct: "a",
     },
     {
        question: "Your company has two data centers and is thinking about migrating some of its serversto Azure virtual machines to reduce capital expences. Which calculator would you use to estimate the cost savings of moving these resources to Azure?",
         a: "TCO calculator",
         b: "Pricing calculator",
         C: "Cloud economics",
         d: "Azure Hybrid Benefit",
         correct: "a",
     },
     {
        question: "Which statements represent key advantages of an operating expenditure model through cloud computing instead of on-premises environment?(Choose 3 answers)",
         a: "Operating expenditure items are utilized over the course of multiple years.",
         b: "Oprerating expenditure items are inherently flexible.",
         C: "The operating expenditure model offers companies significantly more flexibility and agility.",
         d: "Using the operating expenditure model, deployment and lead-time are relatively short.",
         correct: "",
     }
     
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.C
    d_text.innerText = currentQuizData.d
}

function deselectAnswer(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2> You answer ${score}/${quizData.length} question correctly</h2>

            <button onclick="location.reload()">Reload</button>

            `
        }
    }

})