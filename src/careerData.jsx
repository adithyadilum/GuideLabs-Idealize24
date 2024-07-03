const careerData = [
    {
        title: "Artificial Intelligence and Machine Learning",
        description: "Develop systems and algorithms that enable computers to learn and make decisions.",
        keySkills: ["Python", "TensorFlow", "Data Analysis", "Machine Learning Algorithms"],
        salaryRange: "$100,000 - $150,000",
        jobOutlook: "High demand with significant growth expected in the coming years.",
        learnMoreLink: "https://example.com/ai-ml",
        saveForLater: false
    },
    {
        title: "DevOps",
        description: "Bridge the gap between software development and IT operations by automating processes.",
        keySkills: ["CI/CD", "Docker", "Kubernetes", "Scripting Languages"],
        salaryRange: "$90,000 - $130,000",
        jobOutlook: "High demand as companies continue to adopt DevOps practices.",
        learnMoreLink: "https://example.com/devops",
        saveForLater: false
    },
    {
        title: "Blockchain Technology",
        description: "Work with blockchain protocols and develop decentralized applications.",
        keySkills: ["Solidity", "Ethereum", "Cryptography", "Smart Contracts"],
        salaryRange: "$95,000 - $140,000",
        jobOutlook: "Growing interest and investment in blockchain technology.",
        learnMoreLink: "https://example.com/blockchain",
        saveForLater: false
    },
    {
        title: "Internet of Things (IoT)",
        description: "Create interconnected devices that collect and exchange data.",
        keySkills: ["Embedded Systems", "Networking", "Data Analysis", "IoT Platforms"],
        salaryRange: "$85,000 - $120,000",
        jobOutlook: "Expanding rapidly with increasing adoption in various industries.",
        learnMoreLink: "https://example.com/iot",
        saveForLater: false
    },
    {
        title: "Augmented Reality (AR) and Virtual Reality (VR)",
        description: "Develop immersive experiences using AR and VR technologies.",
        keySkills: ["Unity", "Unreal Engine", "3D Modeling", "C#"],
        salaryRange: "$80,000 - $110,000",
        jobOutlook: "Steady growth with new applications in gaming, education, and training.",
        learnMoreLink: "https://example.com/ar-vr",
        saveForLater: false
    },
    {
        title: "IT Project Management",
        description: "Oversee IT projects from conception to completion, ensuring they meet requirements and deadlines.",
        keySkills: ["Project Planning", "Agile Methodologies", "Budget Management", "Risk Management"],
        salaryRange: "$75,000 - $110,000",
        jobOutlook: "Consistent demand as businesses require effective IT project execution.",
        learnMoreLink: "https://example.com/it-project-management",
        saveForLater: false
    },
    {
        title: "IT Governance and Compliance",
        description: "Ensure that IT systems comply with regulations and policies.",
        keySkills: ["IT Audit", "Risk Management", "Regulatory Knowledge", "Compliance Monitoring"],
        salaryRange: "$70,000 - $100,000",
        jobOutlook: "Increasing importance with stricter regulatory environments.",
        learnMoreLink: "https://example.com/it-governance",
        saveForLater: false
    },
    {
        title: "IT Service Management (ITSM)",
        description: "Implement and manage quality IT services to meet the needs of the business.",
        keySkills: ["ITIL", "Service Delivery", "Incident Management", "Problem Solving"],
        salaryRange: "$65,000 - $90,000",
        jobOutlook: "Stable demand as organizations strive for efficient IT service delivery.",
        learnMoreLink: "https://example.com/itsm",
        saveForLater: false
    },
    {
        title: "Health Informatics",
        description: "Use IT to manage and analyze healthcare data for better decision-making.",
        keySkills: ["Data Analysis", "Healthcare Systems", "Electronic Health Records", "Health IT Standards"],
        salaryRange: "$80,000 - $120,000",
        jobOutlook: "Strong demand due to the growing emphasis on data-driven healthcare.",
        learnMoreLink: "https://example.com/health-informatics",
        saveForLater: false
    },
    {
        title: "Business Intelligence (BI)",
        description: "Analyze data to help organizations make informed business decisions.",
        keySkills: ["Data Visualization", "SQL", "BI Tools", "Data Warehousing"],
        salaryRange: "$75,000 - $110,000",
        jobOutlook: "High demand as businesses increasingly rely on data insights.",
        learnMoreLink: "https://example.com/bi",
        saveForLater: false
    },
    {
        title: "IT Architecture",
        description: "Design and oversee the implementation of IT infrastructure and systems.",
        keySkills: ["System Design", "Networking", "Cloud Computing", "Enterprise Architecture"],
        salaryRange: "$100,000 - $140,000",
        jobOutlook: "Strong demand as organizations need robust and scalable IT solutions.",
        learnMoreLink: "https://example.com/it-architecture",
        saveForLater: false
    },
    {
        title: "Mobile Computing",
        description: "Develop applications and solutions for mobile devices.",
        keySkills: ["iOS/Android Development", "Mobile UI/UX", "APIs", "Cross-Platform Development"],
        salaryRange: "$80,000 - $120,000",
        jobOutlook: "Consistent growth with the proliferation of mobile devices.",
        learnMoreLink: "https://example.com/mobile-computing",
        saveForLater: false
    },
    {
        title: "Robotics and Automation",
        description: "Design, build, and program robots and automated systems.",
        keySkills: ["Robotics Engineering", "PLC Programming", "Machine Learning", "Mechanical Design"],
        salaryRange: "$85,000 - $130,000",
        jobOutlook: "Growing demand in manufacturing, healthcare, and other industries.",
        learnMoreLink: "https://example.com/robotics-automation",
        saveForLater: false
    },
    {
        title: "IT Sales and Marketing",
        description: "Promote and sell IT products and services to customers.",
        keySkills: ["Sales Strategy", "Customer Relationship Management", "Digital Marketing", "Product Knowledge"],
        salaryRange: "$60,000 - $90,000",
        jobOutlook: "Steady demand as IT companies need effective sales and marketing teams.",
        learnMoreLink: "https://example.com/it-sales-marketing",
        saveForLater: false
    },
    {
        title: "Digital Transformation",
        description: "Lead organizations in adopting digital technologies to improve processes and outcomes.",
        keySkills: ["Change Management", "Digital Strategy", "Technology Implementation", "Leadership"],
        salaryRange: "$90,000 - $130,000",
        jobOutlook: "High demand as businesses seek to stay competitive in a digital world.",
        learnMoreLink: "https://example.com/digital-transformation",
        saveForLater: false
    },
    {
        title: "Computer Science",
        description: "Study and develop the theory, design, and application of computer systems.",
        keySkills: ["Programming", "Algorithms", "Data Structures", "Software Development"],
        salaryRange: "$70,000 - $110,000",
        jobOutlook: "Stable demand with opportunities across various industries.",
        learnMoreLink: "https://example.com/computer-science",
        saveForLater: false
    },
    {
        title: "Information Systems",
        description: "Manage and support the information technology systems within an organization.",
        keySkills: ["Database Management", "Network Administration", "System Analysis", "IT Support"],
        salaryRange: "$65,000 - $100,000",
        jobOutlook: "Consistent demand as businesses rely on effective IT systems.",
        learnMoreLink: "https://example.com/information-systems",
        saveForLater: false
    },
    {
        title: "Software Engineering",
        description: "Design, develop, and maintain software applications.",
        keySkills: ["Programming", "Software Development Life Cycle", "Testing", "Version Control"],
        salaryRange: "$80,000 - $120,000",
        jobOutlook: "High demand with strong growth prospects in various sectors.",
        learnMoreLink: "https://example.com/software-engineering",
        saveForLater: false
    },
    {
        title: "Network Engineering",
        description: "Design and manage the computer networks that support an organization’s operations.",
        keySkills: ["Network Design", "Routing and Switching", "Security", "Wireless Networks"],
        salaryRange: "$75,000 - $110,000",
        jobOutlook: "Stable demand with increasing importance of secure and reliable networks.",
        learnMoreLink: "https://example.com/network-engineering",
        saveForLater: false
    },
    {
        title: "Cybersecurity",
        description: "Protect computer systems and networks from cyber threats.",
        keySkills: ["Security Analysis", "Penetration Testing", "Incident Response", "Cryptography"],
        salaryRange: "$90,000 - $130,000",
        jobOutlook: "Very high demand with growing threats and regulatory requirements.",
        learnMoreLink: "https://example.com/cybersecurity",
        saveForLater: false
    }
];
