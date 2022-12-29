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
        question: "Your company has two data centers and is thinking about migrating some of its servers to Azure virtual machines to reduce capital expences. Which calculator would you use to estimate the cost savings of moving these resources to Azure?",
         a: "TCO calculator",
         b: "Pricing calculator",
         C: "Cloud economics",
         d: "Azure Hybrid Benefit",
         correct: "a",
     },
     {
        question: "What is the primary benefit that cloud elasticity will provide?",
         a: "Faster disaster recovery time.",
         b: "Ability to deploy data to regional datacenters around the globe.",
         C: "Saving in backup costs",
         d: "Saving in infrastructure costs",
         correct: "d", 
     },
     {
        question: "In which cloud model Microsoft Azure manages all aspects of the application environment, such as virtual machines, networking resources, data storage and applications?",
         a: "Software-as-a-Service (SaaS)",
         b: "Infrastructure-as-as-Service (IaaS)",
         C: "Platform-as-a-service (PaaS)",
         d: "Functions-as-a-Service (FaaS)",
         correct: "a",
     },
     {
        question: "Which service provide notifications about Azure service and tools you are currently using, and provide updates about planned maintenance, service deprication, and when you approach a service's resource limits?",
         a: "Azure Status",
         b: "Azure Service Health",
         C: "Azure Resource Health",
         d: "Azure Policy",
         correct: "b",
     },
     {
        question: "When using a public cloud provider, what type of security is always completely managed by the Cloud Service Provider (CSP)?",
         a: "Physical security",
         b: "Network control",
         C: "User accounts",
         d: "Data classification and accountability",
         correct: "a",
     },
     {
        question: "Which of the following cost-saving options is available to Enterprise customers only?",
         a: "Reserved VM instances",
         b: "Azure Hybrid Benefit",
         C: "Dev/Test Pricing",
         d: "15% Discount on Public Prices",
         correct: "d",
     },
     {
        question: "What method offers the highest level of availability in the Azure cloud?",
         a: "Distributing your virtual machines in different update domains and fault domains",
         b: "Distributing you application layer in different availability sets",
         C: "Distributing replicas of your virtual machines in different availability zones",
         d: "Deploying copies of your entire application into different regions",
         correct: "d",
     },
     {
        question: "Azure Advisor provides recommendations on all of the following areas except which one?",
         a: "Reliability",
         b: "Cost",
         C: "Performance",
         d: "Monitoring",
         correct: "d",
     },
     {
        question: "Your company needs to connect its on-premises data center to Azure. They require a dedicated connection but also a failover connection. The failover connection can have lower network performance than the primary connection. The company has about 500 employees who will need to use this connection. Which connection types would you recommend?",
         a: "Site-to-Site for the main and failover connection",
         b: "Site-to-Site for the main and Point-to-Site for the failover connection",
         C: "ExpressRoute for the main connection and Site-to-Site for the failover connection",
         d: "Site-to-Site for the main and ExpressRoute for failover connection",
         correct: "c",
     },
     {
        question: "Which Azure resource provides useful links to assist organizations going through these compliance audits based on standards like FedRAMP or ISO27001?",
         a: "Trust Center",
         b: "Service Trust Portal",
         C: "GDPR",
         d: "Azure Government",
         correct: "b",
     },
     {
        question: "Which Azure storage type offers virtual machines the ability to share the same files with both read and write access, known as cloud-based Server Message Block (SMB) protocol?",
         a: "Blob storage",
         b: "Queue storage",
         C: "File storage",
         d: "Table storage",
         correct: "",
     },
     {
        question: "Which Azure Big Data solution is a limitless analytics service that brings together enterprise data warehousing and Big Data analytics?",
         a: "Azure Analysis Service",
         b: "Azure Synapse Analytics",
         C: "Azure Data Lake Analytics",
         d: "Azure Databricks",
         correct: "b",
     },
     {
        question: "Which of the following statements about resource locks in Microsoft Azure is true?",
         a: "If two different administrators add locks to the same resource, then the most restrictive lock is applied",
         b: "A delete lock is more restrictive than a read-only lock",
         C: "A locked resource can only be deleted by an administrator",
         d: "If you want to apply a lock to all of the resources in a resource group, you have to apply the lock to each resource individually",
         correct: "a",
     },
     {
        question: "Which Azure solution allows users to extend on-premises network into the Azure cloud using a dedicated private connection that does not go over the public Internet?",
         a: "ExpressRoute",
         b: "Route-based VPN gateway",
         C: "VNet-to-VNet peering",
         d: "Azure Load Balancer",
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