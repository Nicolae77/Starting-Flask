const quizData = [
    {
        question:
            "Which statement describes the benefit of making your applications redundant across Azure regional pairs?",
        a: "Regional pairs are inthe same geographical area, so they share the same power infrastructure.",
        b: "In the event of a multi-regional outage, Microsoft will prioritize the recovery of one region in each pair.",
        c: "Regional pairs allow planned Azure system updates to be rolled out to paired regional at the same time.",
        d: "Utilizing regional pairs ensures that the recovery of one regional pairs is prioritized over every other pair.",
        correct: "b",
        id: 0,
    },
    {
        question:
            "How can you use testing to predict outcomes in your cloud environment??",
        a: "By identifying the source of errors that are reported by users.",
        b: "By performing different functionality tests in pre-production and production environment.",
        c: "By excluding infrastructure deployment models from test plans.",
        d: "By performing scheduled security tests on application code in development and production environment.",
        correct: "d",
    },
    {
        question:
            "______ allow you to define a repeatable set of governance tools and standard Azure resources that your organization requires.",
        a: "Azure Blueprints",
        b: "Azure Policy",
        c: "Azure DevOps",
        d: "Azure Resource Manager (ARM) templates",
        correct: "a",
    },
    {
        question:
            "Which Azure service allows you to estimate the cost of resources you plan to deploy in the future.",
        a: "Azure Advisor",
        b: "Pricing Calculator",
        c: "Azure Cost Management",
        d: "The premier tier support plan",
        correct: "b",
    },
    {
        question: "Session timeout properties in Azure Virtual Desktop _____",
        a: "allow you to configure the ability to end sessions when time limits are reached",
        b: "allow you to log suspicious user activity",
        c: "are configured via the global group policy on a group of session hosts.",
        d: "should be configured after golden image creation",
        correct: "a",
    },
    {
        question:
            "Azure ____ is a tool specifically designed to upload files to Azure blob or file storage that allows you to restart a file transfer from the stopped position.",
        a: "AzCopy",
        b: "Databricks",
        c: "Data Lake",
        d: "Service Fabric",
        correct: "a",
    },
    {
        question:
            "Your company has two data centers and is thinking about migrating some of its servers to Azure virtual machines to reduce capital expences. Which calculator would you use to estimate the cost savings of moving these resources to Azure?",
        a: "TCO calculator",
        b: "Pricing calculator",
        c: "Cloud economics",
        d: "Azure Hybrid Benefit",
        correct: "a",
    },
    {
        question:
            "What is the primary benefit that cloud elasticity will provide?",
        a: "Faster disaster recovery time.",
        b: "Ability to deploy data to regional datacenters around the globe.",
        c: "Saving in backup costs",
        d: "Saving in infrastructure costs",
        correct: "d",
    },
    {
        question:
            "In which cloud model Microsoft Azure manages all aspects of the application environment, such as virtual machines, networking resources, data storage and applications?",
        a: "Software-as-a-Service (SaaS)",
        b: "Infrastructure-as-as-Service (IaaS)",
        c: "Platform-as-a-service (PaaS)",
        d: "Functions-as-a-Service (FaaS)",
        correct: "a",
    },
    {
        question:
            "Which service provide notifications about Azure service and tools you are currently using, and provide updates about planned maintenance, service deprication, and when you approach a service's resource limits?",
        a: "Azure Status",
        b: "Azure Service Health",
        c: "Azure Resource Health",
        d: "Azure Policy",
        correct: "b",
    },
    {
        question:
            "When using a public cloud provider, what type of security is always completely managed by the Cloud Service Provider (CSP)?",
        a: "Physical security",
        b: "Network control",
        c: "User accounts",
        d: "Data classification and accountability",
        correct: "a",
    },
    {
        question:
            "Which of the following cost-saving options is available to Enterprise customers only?",
        a: "Reserved VM instances",
        b: "Azure Hybrid Benefit",
        c: "Dev/Test Pricing",
        d: "15% Discount on Public Prices",
        correct: "d",
    },
    {
        question:
            "What method offers the highest level of availability in the Azure cloud?",
        a: "Distributing your virtual machines in different update domains and fault domains",
        b: "Distributing you application layer in different availability sets",
        c: "Distributing replicas of your virtual machines in different availability zones",
        d: "Deploying copies of your entire application into different regions",
        correct: "d",
    },
    {
        question:
            "Azure Advisor provides recommendations on all of the following areas except which one?",
        a: "Reliability",
        b: "Cost",
        c: "Performance",
        d: "Monitoring",
        correct: "d",
    },
    {
        question:
            "Your company needs to connect its on-premises data center to Azure. They require a dedicated connection but also a failover connection. The failover connection can have lower network performance than the primary connection. The company has about 500 employees who will need to use this connection. Which connection types would you recommend?",
        a: "Site-to-Site for the main and failover connection",
        b: "Site-to-Site for the main and Point-to-Site for the failover connection",
        c: "ExpressRoute for the main connection and Site-to-Site for the failover connection",
        d: "Site-to-Site for the main and ExpressRoute for failover connection",
        correct: "c",
    },
    {
        question:
            "Which Azure resource provides useful links to assist organizations going through these compliance audits based on standards like FedRAMP or ISO27001?",
        a: "Trust Center",
        b: "Service Trust Portal",
        c: "GDPR",
        d: "Azure Government",
        correct: "b",
    },
    {
        question:
            "Which Azure storage type offers virtual machines the ability to share the same files with both read and write access, known as cloud-based Server Message Block (SMB) protocol?",
        a: "Blob storage",
        b: "Queue storage",
        c: "File storage",
        d: "Table storage",
        correct: "c",
    },
    {
        question:
            "Which Azure Big Data solution is a limitless analytics service that brings together enterprise data warehousing and Big Data analytics?",
        a: "Azure Analysis Service",
        b: "Azure Synapse Analytics",
        c: "Azure Data Lake Analytics",
        d: "Azure Databricks",
        correct: "b",
    },
    {
        question:
            "Which of the following statements about resource locks in Microsoft Azure is true?",
        a: "If two different administrators add locks to the same resource, then the most restrictive lock is applied",
        b: "A delete lock is more restrictive than a read-only lock",
        c: "A locked resource can only be deleted by an administrator",
        d: "If you want to apply a lock to all of the resources in a resource group, you have to apply the lock to each resource individually",
        correct: "a",
    },
    {
        question:
            "Which Azure solution allows users to extend on-premises network into the Azure cloud using a dedicated private connection that does not go over the public Internet?",
        a: "ExpressRoute",
        b: "Route-based VPN gateway",
        c: "VNet-to-VNet peering",
        d: "Azure Load Balancer",
        correct: "a",
    },
    {
        question:
            "What is the advantage of rolling out planned Azure system updates sequentially in paired regions",
        a: "It minimizes logical failures in the rare event of a bad update",
        b: "It allows manual replication to a paired region",
        c: "It allows logical datacenters in a region to operate concurrently",
        d: "It allows regional pairs to provide logical isolation",
        correct: "a",
    },
    {
        question:
            "Which statement describe a key financial difference between running applications with on-premises servers and migrating to the Azure cloud?",
        a: "In the Azure cloud, application resource costs are classified as Capital Expenditures (CapEx) instead of Operating Expenditures (OpEx)",
        b: "In the Azure cloud, application resource costs are classified as Operating Expenditures(OpEx) instead of Capital Expenditures(CapEx)",
        c: "In the Azure cloud, capital expenditures will become more flexible",
        d: "A firm can eliminate operating expenditures by using the Azure cloud",
        correct: "b",
    },
    {
        question:
            "Which Azure management service can provide the status of specific instances, as well as a log of recent platform events?",
        a: "Azure Status",
        b: "Azure backup",
        c: "Azure Resource Health",
        d: "Microsoft Defender for Cloud",
        correct: "c",
    },
    {
        question:
            "What should you do to bring Azure Storage into your virtual network with a dedicated IP address?",
        a: "Peer your Azure Virtual Network (VNet) with an Azure Storage VNet.",
        b: "Create a site-to-site VPN with Azure VPN Gateway",
        c: "Create a private connection with Azure ExpressRoute",
        d: "Create a private endpoint",
        correct: "d",
    },
    {
        question:
            "Which of the following use cases would be the best fit for a solution that uses Azure Point-to-Site(P2S) connections?",
        a: "A company that need to simultaneously connect 500 client machines on their corporate network to an Azure virtual network.",
        b: "An administrator that needs to connect 2 Azure VNets in the same region without using a VPN device",
        c: "A company that needs to provide 50 remote users with laptops running Windows operating 10 system access to an Azure VNet",
        d: "A company that needs to provide 15 remote users with laptops running Mac OS access to a private corporate network",
        correct: "c",
    },
    {
        question: "Which of the following is a feature of Azure Cloud Shell?",
        a: "Cloud Shell is active indefinitely",
        b: "Azure Power Shell running with Cloud Shell supports both Linux-specific and Windows-specific functionality",
        c: "Cloud Shell allows to access the Azure Portal",
        d: "Cloud Shell allows you to run Azure Command-Line Interface and Azure Power Shell on iOS and Android mobile devices",
        correct: "d",
    },
    {
        question:
            "Complete the following statement: Authorization determines ______",
        a: "what you can do",
        b: "who you are",
        c: "why you need access",
        d: "the number of type resources you create.",
        correct: "a",
    },
    {
        question: "Which Azure blob type is the best for logging operations?",
        a: "Page",
        b: "Block",
        c: "Append",
        d: "General",
        correct: "c",
    },
    {
        question:
            "______ is an Azure service that helps to enforce organizational standards and assess compliance at scale.",
        a: "Microsoft Compliance Manager",
        b: "Microsoft Defender for Cloud",
        c: "Azure Policy",
        d: "Azure Blueprints",
        correct: "c",
    },
    {
        question:
            "Which Azure service can identify all global service issues, whether or not they are in use within your account?",
        a: "Azure Infrastructure Monitor",
        b: "Azure Service Health",
        c: "Azure Resource Health",
        d: "Azure Monitor",
        correct: "b",
    },
    {
        question:
            "Which Azure storage supports managing asynchronous tasks and building process workflows?",
        a: "Blob storage",
        b: "Queue storage",
        c: "File starage",
        d: "Table storage",
        correct: "b",
    },
    {
        question:
            "_____ prevent resources from being accidentally deleted or changed.",
        a: "Azure Blueprints",
        b: "Azure Policy",
        c: "Resource Locks",
        d: "Microsoft Service Trust Portal",
        correct: "c",
    },
    {
        question:
            "Which of the following is an example of a way in which Azure Advisor can help manage cost?",
        a: "You can use Azure Advisor to identify underutilized machines so you can resize them.",
        b: "You can use Azure Advisor to identify your subscriptions by name, location and value.",
        c: "You can use Azure Advisor to find less expensive third-party solutions that run on Azure.",
        d: "You can use Azure Advisor to compare your current data center costs to running the same workloads on Azure.",
        correct: "a",
    },
    {
        question:
            "Which Azure storage type offers a simplified alternative to using a nono-relational database?",
        a: "Blob storage",
        b: "Queue storage",
        c: "File storage",
        d: "Table storage",
        correct: "d",
    },
    {
        question:
            "Regarding Microsoft Azure's shared responsability model, which statement regarding the management of an IaaS solutions' virtual network controls is correct?",
        a: "Microsoft Azure maintains the majority of responsability for network controls.",
        b: "The customer maintains sole responsability for network controls.",
        c: "The customer shares responsability with Microsoft Azure for Network controls.",
        d: "It is the hardware vendor, not Microsoft or the customer, that maintains sole responsability.",
        correct: "b",
    },
    {
        question:
            "Your organization wants to design its applications hosted on Azure Virtual Machines to maintain service in the event of a complete data center failure. Which of the following design steps will help the organization achieve the objective?",
        a: "Deploy the application's VMs within multiple Fault Domains.",
        b: "Deploy the application's VMs within multiple Virtual Machine Scale Sets",
        c: "Deploy the application's VMs within multiple Availability Zones",
        d: "Deploy the application's VMs within multiple Resource Groups",
        correct: "c",
    },
    {
        question:
            "Which Azure domain service is based in Azure rather than on-premise, and is designed to help migrate on-premise applications which need Active Directory Domain Service authentication to the cloud?",
        a: "Do-it-Yourself Active Directory Domain Service.",
        b: "Azure AD Standalone",
        c: "Azure Active Directory Hybrid ID Solution",
        d: "Azure Active Directory Domain Service Solution",
        correct: "d",
    },
    {
        question:
            "A company wants to ensure its resources hosted in the Azure cloud can be deployed and configured quickly as application requirements change. As the company outlines the design plan for the application, which of the following features of cloud computing would address this requirement?",
        a: "scalability",
        b: "elasticity",
        c: "high availability",
        d: "agility",
        correct: "d",
    },
    {
        question:
            "What is a Microsoft recommendation when creating a resource group?",
        a: "All rhe resource in a group should share the same lifecycle",
        b: "A resource can exist in multiple resource groups at the same time.",
        c: "A resource group can only contain resources that reside inthe same region",
        d: "Once a resouce is added to a resource group, it cannot be moved from it to another group.",
        correct: "a",
    },
    {
        question:
            "_____ is an application that is utilized by your end users to connect into your Azure Virtual Desktop environment.",
        a: "Remote Desktop Protocol",
        b: "The Remote Desktop client",
        c: "Azure AD",
        d: "Universa Connection Manager",
        correct: "b",
    },
    {
        question:
            "The Azure Cost Management Tool can help you answer which question?",
        a: "How much would I save by migrating to the cloud?",
        b: "What will my Azure resource cost once I deploy it?",
        c: "Which deployed Azure resources are underutilized?",
        d: "How have other developers addressed the deployment issues I have encountered?",
        correct: "c",
    },
    {
        question:
            "Each resource group has an assigned location. What is stored in an Azure resource group's assigned location?",
        a: "Azure-managed virtual resources(instances, netwotk, database)",
        b: "Azure-managed physical hardware(servers, cooling and network devices)",
        c: "Azure resource metada",
        d: "Azure account metadata",
        correct: "c",
    },
    {
        question:
            "Your organization's expenses have increased as operatiuons have expanded. You need to identify expenses for Azure resources used by the IT and Development departments of your organization. Which Azure service or tool should you use to better understand your organization's resource expenses by department?",
        a: "Azure Advisor",
        b: "Azure Budget",
        c: "Azure Pricing Calculator",
        d: "Azure Resource Tags",
        correct: "d",
    },
    {
        question:
            "Under Microsoft Azure's Shared Responsability Model, who manages virtual network security for Software-as-a-Service(SaaS) solution in Azure cloud?",
        a: "The Azure customer",
        b: "Both Microsoft Azure and the Azure customer",
        c: "The tird-party hardware manufacturer",
        d: "Microsoft Azure",
        correct: "d",
    },
    {
        question:
            "Azure_____ is a software solution that can connect on-premises servers running on other cloud providers to Azure Resource Manager.",
        a: "Stack",
        b: "Arc",
        c: "Outposts",
        d: "Tanzu",
        correct: "b",
    },
    {
        question:
            "What is the main advantage of using Azure Container Instances rather than standard container?",
        a: "Improved Security",
        b: "Improved Performance",
        c: "Improved resilience",
        d: "Improved scalability",
        correct: "a",
    },
    {
        question:
            "Your organization needs to develop a storage tier policy for data that is considered to be short-term backup and disaster recovery data. Which storage tier would you assign to this data?",
        a: "hot",
        b: "cool",
        c: "warm",
        d: "archive",
        correct: "b",
    },
    {
        question:
            "Which Azure service is an example of the Platform-as-a-Service(PaaS) model?",
        a: "Azure App Service",
        b: "Azure Virtual Networks",
        c: "Azure Virtual Machines",
        d: "Azure Data Box",
        correct: "a",
    },
    {
        question:
            "Integrating Azure PaaS services with Microsoft Defender for Cloud apps Allows you to also identify anomalies in Azure ____ logs.",
        a: "portal",
        b: "threat",
        c: "security",
        d: "activity",
        correct: "d",
    },
    {
        question:
            "Which of the following tools or services is an authorization system that is built on an Azure Resource Manager and that provides fine-grained access management for Azure resources?",
        a: "ARM template",
        b: "Azure AD",
        c: "Azure RBAC",
        d: "Microsoft Defender for Cloud",
        correct: "c",
    },
    {
        question:
            "The cost of an Azure virtual network gateway is based on which of the following?",
        a: "Hourly compute costs and egress data transfer",
        b: "Hourly compute costs and inbound Inter-Vnet data transfer",
        c: "Hourly compute costs only",
        d: "Inbound Inter-VNet data transfer",
        correct: "a",
    },
    {
        question: "Which statement is true when it comes to Cloud expenditure?",
        a: "Cloud computing offers a reduction in your capex spend",
        b: "Cloud computing offers a reduction in your opex spend",
        c: "Cloud computing offers a reduction in both your capex and opex spend",
        d: "Cloud computing offers a comparable spend between your existing on-premise environment.",
        correct: "a",
    },
    {
        question:
            "In federated identity management, _____ is one point of entry that combines access to multiple resources behind it.",
        a: "single registration",
        b: "single sign-on",
        c: "flow Control",
        d: "proxy sign-on",
        correct: "b",
    },
    {
        question:
            "In Azure, if you delete a virtual machine, what happens to its data disks?",
        a: "The data disk are not deleted",
        b: "The data disks are only deleted if you selected that configuration option for the VM.",
        c: "The data disks are deleted",
        d: "The data disks are deleted but their data may be recoverable.",
        correct: "b",
    },
    {
        question: "What is the goal of high availability and fault tolerance?",
        a: "to keep your system up and running should something fail within your architecture",
        b: "to prevent hardware from failling",
        c: "to keep the integrity of data intact in the event of a system failure",
        d: "to keep the privacy of data intact in the event of a security breach",
        correct: "a",
    },
    {
        question:
            "Which statement regarding Root Management Groups within Azure Management Groups is correct?",
        a: "Everyone is given default access to the root management group",
        b: "Azure subscriptions and management group can be connected to more than one root management group",
        c: "Policy assignments on the root management group apply to all related directory resources.",
        d: "The root management group can be moved and deleted",
        correct: "c",
    },
    {
        question:
            "In an Azure Virtual Network, what term describes the feature used to host the DNS records for a particular Domain?",
        a: "DNS Zone",
        b: "DNS Bucket",
        c: "DNS VNet",
        d: "DNS Squatting",
        correct: "a",
    },
    {
        question:
            "How does Azure Resource Manager enable control over access to specific actions to resources?",
        a: "Resource Manager uses encryption to secure resources",
        b: "Resource Manager uses exported key private and public key pairs for each action request",
        c: "Resource Manager natively integrates and applies role-based access (RBAC) into the management platform and services",
        d: "Resource Manager uses an API user ID and password pair to secure the entire infrastructure",
        correct: "c",
    },
    {
        question:
            "You are the administrator and need to assign a role to a new employee. The employee is responsable for managing the configurations of all virtual machines. To which role should you assign them?",
        a: "Virtual Machine Contributor",
        b: "Virtual Machine User",
        c: "Virtual Machine Administrator",
        d: "Classic Virtual Machine Contributor",
        correct: "a",
    },
    {
        question:
            "You can connect Azure VNets located in two different regions by using _____.",
        a: "virtual secure connections",
        b: "management group regional peering",
        c: "global virtual network peering",
        d: "resource group links",
        correct: "c",
    },
    {
        question:
            "Under which circumstance should you configure your Blob storage account as a hot storage tier?",
        a: "Your older media content that, while not accessed frequently, is expected to be available when needed.",
        b: "You want to migrate towards lower storage costs",
        c: "You have data in this account that is in active use",
        d: "You store your backup, archival, and disaster recovery datasets with this account",
        correct: "c",
    },
    {
        question:
            "Acording to Microsoft Azure's shared responsibility model, which Azure cloud service model places the most responsibility regarding security and operations on Microsoft Azure rather than the customer?",
        a: "PaaS",
        b: "SaaS",
        c: "IaaS",
        d: "FaaS",
        correct: "b",
    },
    {
        question: "What benefit does agility provide in the Azure cloud?",
        a: "To ensure your cloud-based applications can provide a continuous user experience with no apparent downtime even when things go wrong",
        b: "To ensure applications are deployed knowing that your data is safe in the event that disaster should occur",
        c: "To ensure cloud-based resources can be deployed and configured quickly as your application requirements change",
        d: "To ensure cloud-based applications can be configured to always have the resources they need",
        correct: "c",
    },
    {
        question:
            "Which of the following blob types is not provided by Azure Blob Storage?",
        a: "Block blobs",
        b: "Simple blobs",
        c: "Append blobs",
        d: "Page blobs",
        correct: "b",
    },
    {
        question:
            "Microsoft Azure combines which of the following components within an availability set to manage planned and unplanned outages?",
        a: "Recommended regions and alternate regions",
        b: "Update domains and faultdomains",
        c: "Foundational services and specialized services",
        d: "Virtual Machines Scaling and specialized services",
        correct: "b",
    },
    {
        question:
            "You are an IT administrator for a small organization with an Azure account. You need 500 TB of on-premises data. The organization's bandwidth is 1 Gbps. Which storage transfer service should you use?",
        a: "Network transfer",
        b: "Data Box Disk",
        c: "Data Box",
        d: "Data Box Heavy",
        correct: "d",
    },
    {
        question:
            "The _____authentication method in Azure removes the password and replace it with something you have, plus something you are or something you have.",
        a: "multi-factor(MFA)",
        b: "passwordless",
        c: "security question",
        d: "encrypted",
        correct: "b",
    },
    {
        question:
            "_____ provides centralized security management for users' devices with Azure Directory(Azure AD)",
        a: "Virtual Machines",
        b: "Virtual Desktop",
        c: "Containers",
        d: "Azure Functions",
        correct: "b",
    },
    {
        question:
            "Why does Microsoft recommend a minimum 300 miles distance between datacenters in an Azure regional pair?",
        a: "The distance is required to successfully implement geo-redundant storage",
        b: "The distance provides optimal separation for planned updates to be simultaneously applied to both regions",
        c: "The distance reduces the likelihood of power or network outages affecting both regions at once",
        d: "The distance minimizes the latency of requests between resources in paired regions.",
        correct: "c",
    },
    {
        question: "What is scalability of Azure service?",
        a: "Pay only for the resources you use",
        b: "Rapidly increase or decrease the number of Azure resources based on demand.",
        c: "Inexpensively deploy compute, storage, and network resources without capital investment",
        d: "Is a service that requires hardware.",
        correct: "b",
    },
    {
        question:
            "Which of the following is not a characteristic of the public cloud?",
        a: "Scalability",
        b: "Shared Infrastructure",
        c: "One-time costs for virtual resources",
        d: "Utility-based metering",
        correct: "c",
    },
    {
        question:
            "Your company has recently increased its security posture and needs to protect application passwords. Which Azure service should you use?",
        a: "Azure Application Gateway",
        b: "Azure Key Vault",
        c: "Azure Information Protection",
        d: "Azure DDoS Protection",
        correct: "b",
    },
    {
        question:
            "When you transfer data from an Azure resource, it's known as _____ trafic.",
        a: "external",
        b: "internal",
        c: "ingress",
        d: "egress",
        correct: "d",
    },
    {
        question:
            "Which statement correctly describes how Azure regions provide additional resilience with Availability Zones?",
        a: "Each regions that supports availability zones includes a minimum of three separate availability zones",
        b: "Each regions that supports availability zones includes a maximum of three separate availability zones",
        c: "Every region in the Microsoft Azure cloud includes a minimum of three availability zones",
        d: "Every region in the Microsoft Azure cloud includes a minimum of two availability zones",
        correct: "a",
    },
    {
        question:
            "Which Azure product is a general-purpose tool for figuring out how much any given Azure service will cost?",
        a: "Advisor",
        b: "Total Cost of Ownership Calculator",
        c: "Pricing Calculator",
        d: "Cost Management",
        correct: "c",
    },
    {
        question:
            "Which of the following should you enable to link a service that's powered by Azure Private Link?",
        a: "public endpoin",
        b: "private endpoint",
        c: "A virtual private network (VPN)",
        d: "A public network",
        correct: "b",
    },
    {
        question:
            "A company needs to rapidly deploy compute resources with customized operating systrems and built-in software that installs automatically upon start up. Which cloud deployment model should this company use?",
        a: "IaaS",
        b: "PaaS",
        c: "SaaS",
        d: "FaaS",
        correct: "a",
    },
    {
        question:
            "Your organization uses Azure as its cloud provider. The organization has deployed a virtual machine and installed a SQL database on it. Who is responsible for the data that gets ingested into the database?",
        a: "The cloud provider",
        b: "The organization using Azure",
        c: "Both the cloud service provider and the organization",
        d: "Athird party data management company",
        correct: "b",
    },
    {
        question:
            "Considering Azure's Shared Responsibility Model, what are Azure customer's security responsibility in a PaaS service?",
        a: "In a PaaS solution, Microsoft Azure is completely responsible for security",
        b: "In a PaaS solution,Azure customers is completely responsible for security",
        c: "In PaaS solution, Azure customers are partially responsible for securing their applications",
        d: "In PaaS solution, Azure customers are completely responsible for securing their applications",
        correct: "c",
    },
    {
        question:
            "A company needs to increase an application's computing capacity by adding RAM and/or CPUs to an existing Azure virtual machine instance that has been deployed in the Azure cloud. Completing this task is an example of _____ .",
        a: "elasticity",
        b: "agility",
        c: "vertical scaling",
        d: "horizontal scaling",
        correct: "c",
    },
    {
        question:
            "Azure Policy focuses on enforcing organizational standards on Azure _____ .",
        a: "resources",
        b: "users",
        c: "groups",
        d: "costs",
        correct: "a",
    },
    {
        question:
            "If organization wants to store data that only a specific virtual machine needs to access, which storage service should they use?",
        a: "Azure File Storage",
        b: "Azure Blob Storage",
        c: "Azure Disk Storage",
        d: "Azure Queue Storage",
        correct: "c",
    },
    {
        question:
            "Which of the following statements about Azure cost and VM management is true?",
        a: "Resources themselves do not cost anything. The resource groups containing them incur charges.",
        b: "When a VM is stopped, it will not incur any charges",
        c: "If you need to move a VM reservation to another region, you have to make a new reservation and exchange the old one for the new one.",
        d: "Deleting a VM automatically deletes all its data disks and public IP addresses as well",
        correct: "c",
    },
    {
        question:
            "Which of the following actions are possible when using Azure Storage Explorer?",
        a: "Edit, download, copy and delete on any Azure storage account",
        b: "Copy and edit on Blob storage",
        c: "Delete and copy on Azure Data Lake storage",
        d: "Read, copy and download on Azure Disk storage",
        correct: "a",
    },
    {
        question:
            "Using automation to produce consistent and repeatable results is an example of _____ .",
        a: "reliability",
        b: "security",
        c: "predictability",
        d: "performance efficiency",
        correct: "c",
    },
    {
        question:
            "In Azure ExpressRoute, if you want to connect multiple sites to the same virtual network, you can set up a VPN device at each location and connect them all to the same VPN gateway. This is known as a _____ .",
        a: "policy-based route",
        b: "multi-site configutation",
        c: "point-to-site connection",
        d: "site-to-site connection",
        correct: "b",
    },
    {
        question: "Why would an organization use Azure Resource Manager?",
        a: "To create, update, and delete resources in their Azure account",
        b: "To discover, assess, and migrate workloads to the cloud",
        c: "To notify you about Azure service incidents and planned maintenance",
        d: "To maximize the performance and availability of their applications",
        correct: "a",
    },
    {
        question:
            "The Platform-as-a-Service(PaaS) model is ideal for which use case?",
        a: "Developers who want to focus solely on application design",
        b: "Business that need to control all aspects of the service above the hardware",
        c: "Developers whose application require specific customizations to the virtual host operating system",
        d: "The general public who want access to a highly-available, easy-to-use service",
        correct: "a",
    },
    {
        question:
            "How is traffic routed between virtual machines in peered virtual network?",
        a: "Traffic is routed through Microsoft's public network only",
        b: "Traffic is routed through Microsoft's private network only",
        c: "Traffic is routed through the Internet only",
        d: "Traffic is routed through both Microsoft's private network and the Internet",
        correct: "b",
    },
    {
        question:
            "An organization is planning to move to the cloud and is concerned about the security of its data. According to the shared responsibility model, how are security obligations assigned?",
        a: "By a service level agreement",
        b: "By regional data processing center location",
        c: "By workload type(SaaS vs. IaaS for example)",
        d: "By the length of subscription(1-year vs. 3-years)",
        correct: "c",
    },
    {
        question:
            "You need to send secure emails and documents outside of your company. Which Azure service should you use?",
        a: "Azure DDoS Protection",
        b: "Azure Key Vault",
        c: "Azure Information Protection",
        d: "Azure Application Gateway",
        correct: "c",
    },
    {
        question:
            "What benefit is provided by deploying an application's Azure-hosted resource into multiple Azure availability zones?",
        a: "Increase security",
        b: "Simplified administration",
        c: "Increase resilience",
        d: "Reduced latency",
        correct: "c",
    },
    {
        question: "An Azure ExpressRoute location is known as an _____ .",
        a: "exchange provider facility",
        b: "virtual desktop",
        c: "virtual desktop environment",
        d: "network security group facility",
        correct: "a",
    },
    {
        question:
            "Azure Virtual Desktop non-persistent environment using ephemeral disk are ideal for ____ applications, which are tolerant of individual virtual machine failure.",
        a: "stateless",
        b: "data-centric",
        c: "distributed",
        d: "user-centric",
        correct: "a",
    },
    {
        question:
            "You could structure Azure your subscription by _____ in order to limit one team to lower-cost resources while allowing the IT department a full range.",
        a: "environment",
        b: "billing",
        c: "organizational structure",
        d: "access control boundary",
        correct: "c",
    },
    {
        question:
            "Which choice is an example of resizing an Azure virtual machine?",
        a: "Scaling additional copies of the same virtual machine into an availability zone",
        b: "Changing a small general-purpose VM into a storage-optimized VM",
        c: "Changing the operating system for VM from Linux To Windows",
        d: "Changing the virtual machine's size from medium to large",
        correct: "d",
    },
    {
        question:
            "You need to view and update the Microsoft Defender for Cloud permissions. To which role you be assigned?",
        a: "Security Reader",
        b: "Security Assessment Contributor",
        c: "Security Admin",
        d: "Security Operator",
        correct: "c",
    },
    {
        question:
            "Which Azure product helps you compare how much your current workloads cost in your on-premises environment with how much they would cost in Azure?",
        a: "Advisor",
        b: "TCO(Total Cost of Ownership) Calculator",
        c: "Pricing Calculator",
        d: "Cost Management",
        correct: "b",
    },
    {
        question:
            "Your manager has approached you with a request to reduce Azure storage cost in your department, and asks you if changing storage tiers from hot to cool would help. What key consideration should you inform him about when performing this change?",
        a: "Hot storage is more expensive than cool storage and will increase costs",
        b: "Azure has an archival tier and moving to this tier should result in even greater cost savings",
        c: "Cool storage has a lower storage cost, but higher access costs: we should ensure the data is not frequently accessed",
        d: "Storage tiering is complicated: we should move back to storage accounts or page blob storage and see if this helps",
        correct: "c",
    },
    {
        question:
            "What Azure feature replicates resources across regions that are at least 300 miles away from each other?",
        a: "Region pairs",
        b: "Availability Zones",
        c: "Single Regions",
        d: "Sovereign Regions",
        correct: "a",
    },
    {
        question:
            "When considering the availability options for Azure Virtual Machine, what is the difference between an update domain and a fault domain?",
        a: "Update domain provide availability during planned host hardware maintenance, and fault domains provide availability during host hardware failures",
        b: "Update domains provide availability during an update of the virtual machine's operating system, and fault domains provide availability during virtual machine's operating system failure",
        c: "Update domains provide availability during an update of an application hosted on a virtual machine, and fault domains provide availability when an application fails",
        d: "Update domains provide availability during when a virtual macines is resized, and fault domains provides availability when a virtual machines is redeployed",
        correct: "a",
    },
    {
        question:
            "You can use _____ in Azure to provide a scalable way to run applications on a set of virtual machines(VMs)",
        a: "virtual machines scale sets",
        b: "availability zones",
        c: "availability sets",
        d: "desktop virtualization",
        correct: "a",
    },
    {
        question:
            "Regarding Azure Storage, which one of the following options for replicating the data in your storage account offers replicated data three times within a single region, and data is also replicated asynchronously to a second region hundreds of miles away from the primary region?",
        a: "Locally Redundant Storage(LRS)",
        b: "Geo-Redundant Storage (GRS)",
        c: "Read-Access Geo-Gedundant Storage(RA-GRS)",
        d: "Zone Redundant Storage(ZRS)",
        correct: "b",
    },
    {
        question: "Which phrase describes an Azure resource?",
        a: "an entity managed by Azure",
        b: "a level of scope above subscriptions",
        c: "recource matadata",
        d: "logical containers used to provision resources",
        correct: "a",
    },
    {
        question:
            "A company is reviewing its solution design for applications it plans to deploy in the Azure cloud. The company wants to ensure its cloud computing capacity can be increased by adding more virtual machines to its configuration during peak processing times. Which cloud computing benefit should you request?",
        a: "scalability",
        b: "elasticity",
        c: "high availability",
        d: "agility",
        correct: "a",
    },
    {
        question:
            "Your organization has moved its operations to Azure cloud and wants to ensure that it enforces Zero Trust security principles. Which of the following is an example of how the organization can enforce the Zero Trust principle?",
        a: "Apply sensitivity labels to all documents",
        b: "Encrypts files in transit and at rest",
        c: "Create a policy that states that all confidential items can not be viewed or modified",
        d: "Use labels to verify user access to emails",
        correct: "b",
    },
    {
        question:
            "Which Azure App Service pricing tier allows you to run your apps in a private, dedicated environment in an Azure datacenter?",
        a: "Basic and Standard",
        b: "Premium Only",
        c: "Standard Only",
        d: "Isolated only",
        correct: "d",
    },
    {
        question:
            "_____ refers to ability of your application to meet the commitments you make to your customers",
        a: "Security",
        b: "Reliability",
        c: "Operational excellence",
        d: "Performance efficiency",
        correct: "b",
    },
    {
        question:
            "Many cloud services are _____ because they allow you to increase or decrease the number of resources with minimum friction.",
        a: "elastic",
        b: "fault-tolerant",
        c: "high available",
        d: "shared tenancy",
        correct: "a",
    },
    {
        question:
            "An organization plans to migrate its existing on-premises web servers to Azure cloud. They want to control and access web server, operating systems and install proprietary development tools, database management systems, business analytics software on these servers. Which cloud deployment model should they implement?",
        a: "Serverless",
        b: "IaaS",
        c: "PaaS",
        d: "SaaS",
        correct: "b",
    },
    {
        question:
            "Your organization wants to store data for its on-premise applications on Azure. They want to accomplish this with minimal cost in IT resource and administration. What action should your business take to best meet their needs?",
        a: "Establish a hybrid cloud environment with Azure",
        b: "Establish a private cloud environment with Azure",
        c: "Migrate all on-premise resource to the Azure public cloud",
        d: "Establish a community cloud environment with Azure",
        correct: "a",
    },
    {
        question: "_____ is Microsoft's domain controller as a service",
        a: "Active Directory Domain Service",
        b: "Azure Active Directory Domain Service",
        c: "Azure Active Directory",
        d: "Identity and Active Management",
        correct: "b",
    },
    {
        question:
            "Which service simplifies the process of configuring deploying and managing a simple containerized application on the Azure cloud?",
        a: "Azure Container Instances",
        b: "Azure Functions",
        c: "Azure App Service",
        d: "Azure Pipelines",
        correct: "a",
    },
    {
        question:
            "Multiple requirements must be met to correctly resize an Azure Virtual Machine, and potential issues may occur due to resizing the instance. Which of the following is not a requirement and/or would not occur?",
        a: "You will lose your dynamic public IP address if you deallocate your instance",
        b: "If your existing instance has premium storage, the resize instance must support it as well",
        c: "Resizing an instance in a availability set may require deallocating resizing all instances in the availability set",
        d: "Resizing an instance means all data stored on your OS and data disk will be lost",
        correct: "d",
    },
    {
        question:
            "Which Azure Storage replication option provides maximum durability within a single region?",
        a: "Geo-Redundant Storage(GRS)",
        b: "Locally Redundant Storage(LRS)",
        c: "Read-Access Ge0-Redundant Storage(RA-GRS)",
        d: "Zone-Redundant Storage(ZRS)",
        correct: "d",
    },
    {
        question:
            "Which Azure Blob Storage tier should be reserved for data that needs to be kept but, when needed, isn't need immediately",
        a: "Premium",
        b: "Archive",
        c: "Cool",
        d: "Hot",
        correct: "b",
    },
    {
        question:
            "Complete the following statement: Authentication determines _____ .",
        a: "what you can do",
        b: "who you are",
        c: "where you are",
        d: "the number and type of resurces you create, update, or delete",
        correct: "b",
    },
    {
        question:
            "You are an Azure administrator for an organization. You want to find out whether is a problem with one of the virtual machines(VMs) in your environment. Which monitoring feature should you use?",
        a: "Email Alerts",
        b: "Metrics",
        c: "Application Insights",
        d: "Resource Health",
        correct: "d",
    },
    {
        question:
            "Which of the following is not available for virtual machines in all Azure Regions?",
        a: "availability zones",
        b: "availability sets",
        c: "update domains",
        d: "fault domains",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector(".question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 1;
let score = 1;
let wrong_answers = [];
let correct_answers = [];

const DEFAUT_QUESTIONS_NO = null;
const QUESTIONS_NO = DEFAUT_QUESTIONS_NO || quizData.length - 1;

loadQuiz();

function loadQuiz() {
	deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", (ev) => {
	ev.preventDefault();
    const answer = getSelected();
    const score = correct_answers.length;


    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            correct_answers.push({
                questionId: currentQuiz,
                answerId: answer,
            });
        } else {
            wrong_answers.push({
                questionId: currentQuiz,
                answerId: answer,
            });
        }

        if (currentQuiz < QUESTIONS_NO) {
			currentQuiz++;
			loadQuiz();
        } else {
            let wrongQuestionsText = [];
            let wrongAnswersText = [];
            wrong_answers.forEach((answer) => {
                wrongQuestionsText.push(`<li class="wrongAnswerItem">
                <p class="wrongQuestion">${
                    quizData[answer.questionId].question
                }</p>
                <p class="wrongAnswer">selected wrong: ${
                    quizData[answer.questionId][answer.answerId]
                }</p>
				<p class="correctAnswer">correct: ${
                    quizData[answer.questionId]
                }</p>
                </li>`);
            });
            quiz.innerHTML = `
            <div id="myDIV">
            <div id="content">
            <h2> You answer ${score}/${QUESTIONS_NO} question correctly</h2>
            
           <h3 class="correct_answers"> Wrong answers:${wrong_answers.length}</h3>
            <ul class="wrongAnswerList">
                ${wrongQuestionsText.join("<br>")}
            </ul>
            </div>
            </div>
			<button onclick="location.reload()">Reload</button>`;
            
		}
		
    }
});

