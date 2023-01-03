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
         correct: "c",
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
         correct: "a",
     },
     {
        question: "What is the advantage of rolling out planned Azure system updates sequentially in paired regions",
         a: "It minimizes logical failures in the rare event of a bad update",
         b: "It allows manual replication to a paired region",
         C: "It allows logical datacenters in a region to operate concurrently",
         d: "It allows regional pairs to provide logical isolation",
         correct: "a",
     },
     {
        question: "Which statement describe a key financial difference between running applications with on-premises servers and migrating to the Azure cloud?",
         a: "In the Azure cloud, application resource costs are classified as Capital Expenditures (CapEx) instead of Operating Expenditures (OpEx)",
         b: "In the Azure cloud, application resource costs are classified as Operating Expenditures(OpEx) instead Capital Expenditures(CapEx) instead of capital Expenditures(CapEx)",
         C: "In the Azure cloud, capital expenditures will become more flexible",
         d: "A firm can eliminate operating expenditures by using the Azure cloud",
         correct: "b",
     },
     {
        question: "Which Azure management service can provide the status of specific instances, as well as a log of recent platform events?",
         a: "Azure Status",
         b: "Azure backup",
         C: "Azure Resource Health",
         d: "Microsoft Defender for Cloud",
         correct: "c",
     },
     {
        question: "What should you do to bring Azure Storage into your virtual network with a dedicated IP address?",
         a: "Peer your Azure Virtual Network (VNet) with an Azure Storage VNet.",
         b: "Create a site-to-site VPN with Azure VPN Gateway",
         C: "Create a private connection with Azure ExpressRoute",
         d: "Create a private endpoint",
         correct: "d",
     },
     {
        question: "Which of the following use cases would be the best fit for a solution that uses Azure Point-to-Site(P2S) connections?",
         a: "A company that need to simultaneously connect 500 client machines on their corporate network to an Azure virtual network.",
         b: "An administrator that needs to connect 2 Azure VNets in the same region without using a VPN device",
         C: "A company that needs to provide 50 remote users with laptops running Windows operating 10 system access to an Azure VNet",
         d: "A company that needs to provide 15 remote users with laptops running Mac OS access to a private corporate network",
         correct: "c",
     },
     {
        question: "Which of the following is a feature of Azure Cloud Shell?",
         a: "Cloud Shell is active indefinitely",
         b: "Azure Power Shell running with Cloud Shell supports both Linux-specific and Windows-specific functionality",
         C: "Cloud Shell allows to access the Azure Portal",
         d: "Cloud Shell allows you to run Azure Command-Line Interface and Azure Power Shell on iOS and Android mobile devices",
         correct: "d",
     },
     {
        question: "Complete the following statement: Authorization determines ______",
         a: "what you can do",
         b: "who you are",
         C: "why you need access",
         d: "the number of type resources you create.",
         correct: "a",
     },
     {
        question: "Which Azure blob type is the best for logging operations?",
         a: "Page",
         b: "Block",
         C: "Append",
         d: "General",
         correct: "c",
     },
     {
        question: "______ is an Azure service that helps to enforce organizational standards and assess compliance at scale.",
         a: "Microsoft Compliance Manager",
         b: "Microsoft Defender for Cloud",
         C: "Azure Policy",
         d: "Azure Blueprints",
         correct: "c",
     },
     {
        question: "Which Azure service can identify all global service issues, whether or not they are in use within your account?",
         a: "Azure Infrastructure Monitor",
         b: "Azure Service Health",
         C: "Azure Resource Health",
         d: "Azure Monitor",
         correct: "b",
     },
     {
        question: "Which Azure storage supports managing asynchronous tasks and building process workflows?",
         a: "Blob storage",
         b: "Queue storage",
         C: "File starage",
         d: "Table storage",
         correct: "b",
     },
     {
        question: "_____ prevent resources from being accidentally deleted or changed.",
         a: "Azure Blueprints",
         b: "Azure Policy",
         C: "Resource Locks",
         d: "Microsoft Service Trust Portal",
         correct: "c",
     },
     {
        question: "Which of the following is an example of a way in which Azure Advisor can help manage cost?",
         a: "You can use Azure Advisor to identify underutilized machines so you can resize them.",
         b: "You can use Azure Advisor to identify your subscriptions by name, location and value.",
         C: "You can use Azure Advisor to find less expensive third-party solutions that run on Azure.",
         d: "You can use Azure Advisor to compare your current data center costs to running the same workloads on Azure.",
         correct: "a",
     },
     {
        question: "Which Azure storage type offers a simplified alternative to using a nono-relational database?",
         a: "Blob storage",
         b: "Queue storage",
         C: "File storage",
         d: "Table storage",
         correct: "d",
     },
     {
        question: "Regarding Microsoft Azure's shared responsability model, which statement regarding the management of an IaaS solutions' virtual network controls is correct?",
         a: "Microsoft Azure maintains the majority of responsability for network controls.",
         b: "The customer maintains sole responsability for network controls.",
         C: "The customer shares responsability with Microsoft Azure for Network controls.",
         d: "It is the hardware vendor, not Microsoft or the customer, that maintains sole responsability.",
         correct: "b",
     },
     {
        question: "Your organization wants to design its applications hosted on Azure Virtual Machines to maintain service in the event of a complete data center failure. Which of the following design steps will help the organization achieve the objective?",
         a: "Deploy the application's VMs within multiple Fault Domains.",
         b: "Deploy the application's VMs within multiple Virtual Machine Scale Sets",
         C: "Deploy the application's VMs within multiple Availability Zones",
         d: "Deploy the application's VMs within multiple Resource Groups",
         correct: "c",
     },
     {
        question: "Which Azure domain service is based in Azure rather than on-premise, and is designed to help migrate on-premise applications which need Active Directory Domain Service authentication to the cloud?",
         a: "Do-it-Yourself Active Directory Domain Service.",
         b: "Azure AD Standalone",
         C: "Azure Active Directory Hybrid ID Solution",
         d: "Azure Active Directory Domain Service Solution",
         correct: "d",
     },
     {
        question: "A company wants to ensure its resources hosted in the Azure cloud can be deployed and configured quickly as application requirements change. As the company outlines the design plan for the application, which of the following features of cloud computing would address this requirement?",
         a: "scalability",
         b: "elasticity",
         C: "high availability",
         d: "agility",
         correct: "d",
     },
     {
        question: "What is a Microsoft recommendation when creating a resource group?",
         a: "All rhe resource in a group should share the same lifecycle",
         b: "A resource can exist in multiple resource groups at the same time.",
         C: "A resource group can only contain resources that reside inthe same region",
         d: "Once a resouce is added to a resource group, it cannot be moved from it to another group.",
         correct: "a",
     },
     {
        question: "_____ is an application that is utilized by your end users to connect into your Azure Virtual Desktop environment.",
         a: "Remote Desktop Protocol",
         b: "The Remote Desktop client",
         C: "Azure AD",
         d: "Universa Connection Manager",
         correct: "b",
     },
     {
        question: "The Azure Cost Management Tool can help you answer which question?",
         a: "How much would I save by migrating to the cloud?",
         b: "What will my Azure resource cost once I deploy it?",
         C: "Which deployed Azure resources are underutilized?",
         d: "How have other developers addressed the deployment issues I have encountered?",
         correct: "c",
     },
     {
        question: "Each resource group has an assigned location. What is stored in an Azure resource group's assigned location?",
         a: "Azure-managed virtual resources(instances, netwotk, database)",
         b: "Azure-managed physical hardware(servers, cooling and network devices)",
         C: "Azure resource metada",
         d: "Azure account metadata",
         correct: "c",
     },
     {
        question: "Your organization's expenses have increased as operatiuons have expanded. You need to identify expenses for Azure resources used by the IT and Development departments of your organization. Which Azure service or tool should you use to better understand your organization's resource expenses by department?",
         a: "Azure Advisor",
         b: "Azure Budget",
         C: "Azure Pricing Calculator",
         d: "Azure Resource Tags",
         correct: "d",
     },
     {
        question: "Under Microsoft Azure's Shared Responsability Model, who manages virtual network security for Software-as-a-Service solution in Azure cloud?",
         a: "The Azure customer",
         b: "Both Microsoft Azure and the Azure customer",
         C: "The tird-party hardware manufacturer",
         d: "Microsoft Azure",
         correct: "d",
     },
     {
        question: "Azure_____ is a software solution that can connect on-premises servers running on other cloud providers to Azure Resource Manager.",
         a: "Stack",
         b: "Arc",
         C: "Outposts",
         d: "Tanzu",
         correct: "b",
     },
     {
        question: "What is the main advantage of using Azure Container Instances rather than standard container?",
         a: "Improved Security",
         b: "Improved Performance",
         C: "Improved resilience",
         d: "Improved scalability",
         correct: "a",
     },
     {
        question: "Your organization needs to develop a storage tier policy for data that is considered to be short-term backup and disaster recovery data. Which storage tier would you assign to this data?",
         a: "hot",
         b: "cool",
         C: "warm",
         d: "archive",
         correct: "b",
     },
     {
        question: "Which Azure service is an example of the Platform-as-a-Service(PaaS) model?",
         a: "Azure App Service",
         b: "Azure Virtual Networks",
         C: "Azure Virtual Machines",
         d: "Azure Data Box",
         correct: "a",
     },
     {
        question: "Integrating Azure PaaS services with Microsoft Defender for Cloud apps Allows you to also identify anomalies in Azure ____ logs.",
         a: "portal",
         b: "threat",
         C: "security",
         d: "activity",
         correct: "d",
     },
     {
        question: "Which of the following tools or services is an authorization system that is built on an Azure Resource Manager and that provides fine-grained access management for Azure resources?",
         a: "ARM template",
         b: "Azure AD",
         C: "Azure RBAC",
         d: "Microsoft Defender for Cloud",
         correct: "c",
     },
     {
        question: "The cost of an Azure virtual network gateway is based on which of the following?",
         a: "Hourly compute costs and egress data transfer",
         b: "Hourly compute costs and inbound Inter-Vnet data transfer",
         C: "Hourly compute costs only",
         d: "Inbound Inter-VNet data transfer",
         correct: "a",
     },
     {
        question: "Which statement is true when it comes to Cloud expenditure?",
         a: "Cloud computing offers a reduction in your capex spend",
         b: "Cloud computing offers a reduction in your opex spend",
         C: "Cloud computing offers a reduction in both your capex and opex spend",
         d: "Cloud computing offers a comparable spend between your existing on-premise environment.",
         correct: "a",
     },
     {
        question: "In federated identity management, _____ is one point of entry that combines access to multiple resources behind it.",
         a: "single registration",
         b: "single sign-on",
         C: "flow Control",
         d: "proxy sign-on",
         correct: "b",
     },
     {
        question: "In Azure, if you delete a virtual machine, what happens to its data disks?",
         a: "The data disk are not deleted",
         b: "The data disks are only deleted if you selected that configuration option for the VM.",
         C: "The data disks are deleted",
         d: "The data disks are deleted but their data may be recoverable.",
         correct: "b",
     },
     {
        question: "What is the goal of high availability and fault tolerance?",
         a: "to keep your system up and running should something fail within your architecture",
         b: "to prevent hardware from failling",
         C: "to keep the integrity of data intact in the event of a system failure",
         d: "to keep the privacy of data intact in the event of a security breach",
         correct: "a",
     },
     {
        question: "Which statement regarding Root Management Groups within Azure Management Groups is correct?",
         a: "Everyone is given default access to the root management group",
         b: "Azure subscriptions and management group can be connected to more than one root management group",
         C: "Policy assignments on the root management group apply to all related directory resources.",
         d: "The root management group can be moved and deleted",
         correct: "c",
     },
     {
        question: "In an Azure Virtual Network, what term describes the feature used to host the DNS records for a particular Domain?",
         a: "DNS Zone",
         b: "DNS Bucket",
         C: "DNS VNet",
         d: "DNS Squatting",
         correct: "a",
     },
     {
        question: "How does Azure Resource Manager enable control over access to specific actions to resources?",
         a: "Resource Manager uses encryption to secure resources",
         b: "Resource Manager uses exported key private and public key pairs for each action request",
         C: "Resource Manager natively integrates and applies role-based access (RBAC) into the management platform and services",
         d: "Resource Manager uses an API user ID and password pair to secure the entire infrastructure",
         correct: "c",
     },
     {
        question: "You are the administrator and need to assign a role to a new employee. The employee is responsable for managing the configurations of all virtual machines. To which role should you assign them?",
         a: "Virtual Machine Contributor",
         b: "Virtual Machine User",
         C: "Virtual Machine Administrator",
         d: "Classic Virtual Machine Contributor",
         correct: "a",
     },
     {
        question: "You can connect Azure VNets located in two different regions by using _____.",
         a: "virtual secure connections",
         b: "management group regional peering",
         C: "global virtual network peering",
         d: "resource group links",
         correct: "c",
     },
     {
        question: "Under which circumstance should you configure your Blob storage account as a hot storage tier?",
         a: "Your older media content that, while not accessed frequently, is expected to be available when needed.",
         b: "You want to migrate towards lower storage costs",
         C: "You have data in this account that is in active use",
         d: "You store your backup, archival, and disaster recovery datasets with this account",
         correct: "c",
     },
     {
        question: "Acording to Microsoft Azure's shared responsibility model, which Azure cloud service model places the most responsibility regarding security and operations on Microsoft Azure rather than the customer?",
         a: "PaaS",
         b: "SaaS",
         C: "IaaS",
         d: "FaaS",
         correct: "b",
     },
     {
        question: "What benefit does agility provide in the Azure cloud?",
         a: "To ensure your cloud-based applications can provide a continuous user experience with no apparent downtime even when things go wrong",
         b: "To ensure applications are deployed knowing that your data is safe in the event that disaster should occur",
         C: "To ensure cloud-based resources can be deployed and configured quickly as your application requirements change",
         d: "To ensure cloud-based applications can be configured to always have the resources they need",
         correct: "c",
     },
     {
        question: "Which of the following blob types is not provided by Azure Blob Storage?",
         a: "Block blobs",
         b: "Simple blobs",
         C: "Append blobs",
         d: "Page blobs",
         correct: "b",
     },
     {
        question: "",
         a: "",
         b: "",
         C: "",
         d: "",
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
let wrong_answer = 0
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

        if(answer !== quizData[currentQuiz].correct){
            wrong_answer++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2> You answer ${score}/${quizData.length} question correctly</h2>
            <h2> You did not answered ${wrong_answer}</h2>
            <button onclick="location.reload()">Reload</button>

            `
        }
    }

})