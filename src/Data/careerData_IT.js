const careerFields = [
    {
        field: "Web Development",
        fieldId: 1,
        jobs: [
            {
                title: "Front-End Developer",
                description: "Front-End Developers are responsible for implementing visual and interactive elements that users engage with through their web browser. They use technologies like HTML, CSS, and JavaScript to build user interfaces, ensuring that the design is responsive and user-friendly. They often collaborate with designers and back-end developers to create a seamless user experience.",
                salaryRange: "70,000 - 150,000 LKR",
                btnID: "web-dev-btn1"
            },
            {
                title: "Back-End Developer",
                description: "Back-End Developers focus on server-side development, databases, and application logic. They are responsible for creating and maintaining the technology that powers the components which, together, enable the user-facing side of a website to exist. They typically work with languages such as Python, Ruby, Java, and databases like MySQL and MongoDB.",
                salaryRange: "80,000 - 160,000 LKR",
                btnID: "web-dev-btn2"
            },
            {
                title: "Web Designer",
                description: "Web Designers are tasked with creating the layout, color scheme, and overall design of a website. They ensure the site is visually appealing and easy to navigate. This role often requires skills in graphic design software such as Adobe Photoshop and Illustrator, and a good understanding of user experience (UX) principles.",
                salaryRange: "60,000 - 130,000 LKR",
                btnID: "web-dev-btn3"
            },
            {
                title: "Web Administrator",
                description: "Web Administrators maintain and update websites, ensuring they are running smoothly and efficiently. They handle tasks such as server management, website monitoring, and troubleshooting issues that arise. They also ensure the security of the website by implementing security measures and updates.",
                salaryRange: "55,000 - 120,000 LKR",
                btnID: "web-dev-btn4"
            },
            {
                title: "UX/UI Designer",
                description: "UX/UI Designers enhance user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction between the user and the product. They conduct user research, design user interfaces, and create wireframes and prototypes to test and iterate on design solutions.",
                salaryRange: "65,000 - 140,000 LKR",
                btnID: "web-dev-btn5"
            }
        ]
    },
    {
        field: "Software Development",
        fieldId: 2,
        jobs: [
            {
                title: "Software Engineer",
                description: "Software Engineers develop software solutions by studying user needs, systems flow, data usage, and work processes. They design, develop, test, and maintain software applications. This role often requires proficiency in multiple programming languages and a deep understanding of software development methodologies.",
                salaryRange: "75,000 - 160,000 LKR",
                btnID: "soft-dev-btn1"
            },
            {
                title: "Full Stack Developer",
                description: "Full Stack Developers work on both front-end and back-end development of applications. They are proficient in a wide range of technologies and capable of handling the entire development process from designing the user interface to managing the server and database. This role requires versatility and an in-depth understanding of how web applications operate.",
                salaryRange: "85,000 - 170,000 LKR",
                btnID: "soft-dev-btn2"
            },
            {
                title: "Mobile App Developer",
                description: "Mobile App Developers design and build applications for mobile devices. They are skilled in programming languages such as Swift, Kotlin, and Java, and have a good understanding of mobile UI/UX design principles. They work on creating apps that are responsive, user-friendly, and compatible with various mobile operating systems.",
                salaryRange: "70,000 - 150,000 LKR",
                btnID: "soft-dev-btn3"
            },
            {
                title: "Game Developer",
                description: "Game Developers create video games for various platforms, including consoles, PCs, and mobile devices. They work with game engines like Unity and Unreal Engine, and are skilled in programming, game design, and animation. They collaborate with designers, artists, and other developers to bring engaging and immersive game experiences to life.",
                salaryRange: "65,000 - 140,000 LKR",
                btnID: "soft-dev-btn4"
            },
            {
                title: "Quality Assurance Engineer",
                description: "Quality Assurance (QA) Engineers ensure that software meets quality standards through testing and debugging. They develop and execute test plans, identify defects, and work with developers to resolve issues. Their goal is to deliver a product that is reliable, functional, and user-friendly.",
                salaryRange: "60,000 - 130,000 LKR",
                btnID: "soft-dev-btn5"
            }
        ]
    },
    {
        field: "Data Science and Analytics",
        fieldId: 3,
        jobs: [
            {
                title: "Data Scientist",
                description: "Data Scientists analyze and interpret complex data to help companies make data-driven decisions. They use statistical methods, machine learning algorithms, and data visualization techniques to extract insights from large datasets. This role often requires strong analytical skills and proficiency in programming languages such as Python and R.",
                salaryRange: "90,000 - 200,000 LKR",
                btnID: "data-sci-btn1"
            },
            {
                title: "Data Analyst",
                description: "Data Analysts collect, process, and perform statistical analyses on large datasets. They help organizations understand data trends and patterns to make informed business decisions. This role requires proficiency in data manipulation tools such as SQL, Excel, and data visualization software like Tableau or Power BI.",
                salaryRange: "70,000 - 150,000 LKR",
                btnID: "data-sci-btn2"
            },
            {
                title: "Business Intelligence Analyst",
                description: "Business Intelligence (BI) Analysts use data analysis to inform business decisions. They create reports, dashboards, and visualizations to help stakeholders understand key metrics and trends. This role requires a strong understanding of business processes and the ability to translate data into actionable insights.",
                salaryRange: "80,000 - 160,000 LKR",
                btnID: "data-sci-btn3"
            },
            {
                title: "Machine Learning Engineer",
                description: "Machine Learning Engineers develop algorithms that allow computers to learn from and make decisions based on data. They work on projects involving predictive modeling, recommendation systems, and natural language processing. This role requires a strong foundation in machine learning, programming, and data science.",
                salaryRange: "95,000 - 210,000 LKR",
                btnID: "data-sci-btn4"
            }
        ]
    },
    {
        field: "Cybersecurity",
        fieldId: 4,
        jobs: [
            {
                title: "Cybersecurity Analyst",
                description: "Cybersecurity Analysts protect an organization's network and systems from cyber threats. They monitor networks for security breaches, investigate incidents, and implement security measures to prevent future attacks. This role requires a deep understanding of security protocols, threat analysis, and incident response.",
                salaryRange: "85,000 - 170,000 LKR",
                btnID: "cyber-sec-btn1"
            },
            {
                title: "Ethical Hacker/Penetration Tester",
                description: "Ethical Hackers, also known as Penetration Testers, identify and fix security vulnerabilities in systems. They simulate cyber-attacks to test the security of networks, applications, and systems. This role requires a strong understanding of hacking techniques and tools, as well as a commitment to ethical practices.",
                salaryRange: "95,000 - 190,000 LKR",
                btnID: "cyber-sec-btn2"
            },
            {
                title: "Security Consultant",
                description: "Security Consultants advise organizations on how to protect their data and systems. They assess security risks, develop security policies, and implement solutions to safeguard information. This role requires expertise in security best practices and the ability to communicate complex security concepts to non-technical stakeholders.",
                salaryRange: "100,000 - 200,000 LKR",
                btnID: "cyber-sec-btn3"
            },
            {
                title: "Network Security Engineer",
                description: "Network Security Engineers design and implement secure network solutions to protect against cyber threats. They configure firewalls, VPNs, and other security measures to ensure network integrity. This role requires a strong understanding of network architecture and security protocols.",
                salaryRange: "90,000 - 180,000 LKR",
                btnID: "cyber-sec-btn4"
            },
            {
                title: "Information Security Manager",
                description: "Information Security Managers oversee an organization's security measures. They develop security strategies, manage security teams, and ensure compliance with security policies and regulations. This role requires leadership skills and a comprehensive understanding of information security principles.",
                salaryRange: "110,000 - 220,000 LKR",
                btnID: "cyber-sec-btn5"
            }
        ]
    },
    {
        field: "Cloud Computing",
        fieldId: 5,
        jobs: [
            {
                title: "Cloud Solutions Architect",
                description: "Cloud Solutions Architects design and build cloud computing solutions for organizations. They work with cloud platforms such as AWS, Azure, and Google Cloud to create scalable and secure cloud infrastructures. This role requires expertise in cloud architecture and a strong understanding of business requirements.",
                salaryRange: "120,000 - 240,000 LKR",
                btnID: "cloud-comp-btn1"
            },
            {
                title: "Cloud Systems Engineer",
                description: "Cloud Systems Engineers manage and support cloud infrastructure. They ensure the availability, performance, and security of cloud resources. This role requires a deep understanding of cloud services, automation tools, and system administration.",
                salaryRange: "100,000 - 200,000 LKR",
                btnID: "cloud-comp-btn2"
            },
            {
                title: "DevOps Engineer",
                description: "DevOps Engineers combine software development and IT operations to improve efficiency and collaboration. They automate processes, manage infrastructure, and ensure continuous integration and delivery. This role requires a strong understanding of DevOps practices, scripting languages, and cloud platforms.",
                salaryRange: "110,000 - 220,000 LKR",
                btnID: "cloud-comp-btn3"
            },
            {
                title: "Cloud Administrator",
                description: "Cloud Administrators manage cloud resources and ensure they are running smoothly. They handle tasks such as provisioning, monitoring, and troubleshooting cloud environments. This role requires expertise in cloud management tools and a good understanding of cloud security practices.",
                salaryRange: "90,000 - 180,000 LKR",
                btnID: "cloud-comp-btn4"
            },
            {
                title: "Cloud Security Engineer",
                description: "Cloud Security Engineers protect cloud-based systems from cyber threats. They implement security measures, monitor for vulnerabilities, and respond to security incidents. This role requires a deep understanding of cloud security best practices and tools.",
                salaryRange: "110,000 - 220,000 LKR",
                btnID: "cloud-comp-btn5"
            }
        ]
    },
    {
        field: "IT Management",
        fieldId: 6,
        jobs: [
            {
                title: "IT Project Manager",
                description: "IT Project Managers lead IT projects from conception to completion. They define project scope, create project plans, allocate resources, and manage project teams to ensure timely and successful project delivery. This role requires strong leadership, communication, and organizational skills.",
                salaryRange: "130,000 - 260,000 LKR",
                btnID: "it-mgmt-btn1"
            },
            {
                title: "IT Consultant",
                description: "IT Consultants provide expert advice to organizations on IT strategies, technology solutions, and best practices. They assess business needs, recommend IT solutions, and assist in implementing these solutions. This role requires strong analytical skills and a deep understanding of various IT domains.",
                salaryRange: "140,000 - 280,000 LKR",
                btnID: "it-mgmt-btn2"
            },
            {
                title: "Chief Information Officer (CIO)",
                description: "Chief Information Officers (CIOs) oversee the IT strategy and implementation for an organization. They align IT initiatives with business goals, manage IT budgets, and lead IT teams. This role requires extensive experience in IT management and strategic planning.",
                salaryRange: "200,000 - 400,000 LKR",
                btnID: "it-mgmt-btn3"
            },
            {
                title: "IT Director",
                description: "IT Directors manage the IT department and ensure alignment with business goals. They oversee IT operations, develop IT policies, and lead IT projects. This role requires strong leadership skills and a comprehensive understanding of IT management.",
                salaryRange: "180,000 - 360,000 LKR",
                btnID: "it-mgmt-btn4"
            },
            {
                title: "Systems Analyst",
                description: "Systems Analysts analyze and design IT solutions to meet business needs. They work with stakeholders to understand requirements, create system specifications, and ensure the solutions are implemented effectively. This role requires strong analytical and problem-solving skills.",
                salaryRange: "100,000 - 200,000 LKR",
                btnID: "it-mgmt-btn5"
            },
            {
                title: "Software Engineer",
                description: "Software Engineers develop and maintain software applications. They work on various stages of the software development lifecycle, including design, coding, testing, and maintenance. This role requires proficiency in programming languages and software development methodologies.",
                salaryRange: "120,000 - 240,000 LKR",
                btnID: "it-mgmt-btn6"
            }
        ]
    },
    {
        field: "Network and Systems Administration",
        fieldId: 7,
        jobs: [
            {
                title: "Network Administrator",
                description: "Network Administrators maintain computer networks and ensure they run smoothly. They handle tasks such as configuring network hardware, monitoring network performance, and troubleshooting network issues. This role requires a strong understanding of network protocols and hardware.",
                salaryRange: "90,000 - 180,000 LKR",
                btnID: "net-sys-admin-btn1"
            },
            {
                title: "Systems Administrator",
                description: "Systems Administrators manage and maintain an organization's IT systems, including servers, storage, and applications. They ensure system availability, performance, and security. This role requires expertise in system administration tools and a good understanding of IT infrastructure.",
                salaryRange: "85,000 - 170,000 LKR",
                btnID: "net-sys-admin-btn2"
            },
            {
                title: "IT Support Specialist",
                description: "IT Support Specialists provide technical support to users and resolve IT issues. They handle tasks such as troubleshooting hardware and software problems, configuring systems, and providing user training. This role requires strong problem-solving skills and good communication abilities.",
                salaryRange: "70,000 - 140,000 LKR",
                btnID: "net-sys-admin-btn3"
            },
            {
                title: "Network Architect",
                description: "Network Architects design and build network infrastructure. They create network designs that meet business requirements for performance, security, and scalability. This role requires extensive experience in network design and a deep understanding of network technologies.",
                salaryRange: "120,000 - 240,000 LKR",
                btnID: "net-sys-admin-btn4"
            },
            {
                title: "IT Operations Manager",
                description: "IT Operations Managers oversee daily IT operations and ensure smooth functioning of IT services. They manage IT teams, monitor IT systems, and implement operational policies. This role requires strong leadership skills and a comprehensive understanding of IT operations.",
                salaryRange: "130,000 - 260,000 LKR",
                btnID: "net-sys-admin-btn5"
            }
        ]
    },
    {
        field: "Artificial Intelligence and Machine Learning",
        fieldId: 8,
        jobs: [
            {
                title: "AI Engineer",
                description: "AI Engineers develop and implement AI models and algorithms to solve complex problems. They work on projects involving natural language processing, computer vision, and robotics. This role requires a strong foundation in AI, machine learning, and programming.",
                salaryRange: "140,000 - 280,000 LKR",
                btnID: "ai-ml-btn1"
            },
            {
                title: "Machine Learning Developer",
                description: "Machine Learning Developers create algorithms that allow computers to learn from and make decisions based on data. They work on developing predictive models, recommendation systems, and other machine learning applications. This role requires expertise in machine learning techniques and data science.",
                salaryRange: "130,000 - 260,000 LKR",
                btnID: "ai-ml-btn2"
            },
            {
                title: "AI Research Scientist",
                description: "AI Research Scientists conduct research to advance the field of artificial intelligence. They develop new algorithms, publish research papers, and collaborate with academic and industry partners. This role requires a deep understanding of AI theory and a strong background in mathematics and computer science.",
                salaryRange: "150,000 - 300,000 LKR",
                btnID: "ai-ml-btn3"
            },
            {
                title: "Natural Language Processing Specialist",
                description: "Natural Language Processing (NLP) Specialists work on developing algorithms that enable computers to understand and generate human language. They work on projects such as chatbots, sentiment analysis, and machine translation. This role requires expertise in NLP techniques and linguistics.",
                salaryRange: "140,000 - 280,000 LKR",
                btnID: "ai-ml-btn4"
            },
            {
                title: "Robotics Engineer",
                description: "Robotics Engineers design and build robots and automated systems. They work on developing hardware and software solutions to enable robots to perform tasks autonomously. This role requires expertise in robotics, control systems, and mechanical engineering.",
                salaryRange: "160,000 - 320,000 LKR",
                btnID: "ai-ml-btn5"
            }
        ]
    },
    {
        field: "Database Administration",
        fieldId: 9,
        jobs: [
            {
                title: "Database Administrator",
                description: "Database Administrators manage and maintain databases to ensure their availability, performance, and security. They handle tasks such as database design, backup and recovery, and performance tuning. This role requires expertise in database management systems such as Oracle, MySQL, and SQL Server.",
                salaryRange: "100,000 - 200,000 LKR",
                btnID: "db-admin-btn1"
            },
            {
                title: "Database Developer",
                description: "Database Developers design and develop database applications. They work on creating efficient database structures, writing SQL queries, and optimizing database performance. This role requires strong programming skills and a deep understanding of database design principles.",
                salaryRange: "90,000 - 180,000 LKR",
                btnID: "db-admin-btn2"
            },
            {
                title: "Data Architect",
                description: "Data Architects design and manage an organization's data architecture. They create data models, define data standards, and ensure data quality and integrity. This role requires expertise in data modeling, database design, and data governance.",
                salaryRange: "120,000 - 240,000 LKR",
                btnID: "db-admin-btn3"
            },
            {
                title: "SQL Developer",
                description: "SQL Developers write and optimize SQL queries to manage and retrieve data from databases. They work on creating database structures, developing stored procedures, and ensuring database performance. This role requires proficiency in SQL and a good understanding of database management systems.",
                salaryRange: "85,000 - 170,000 LKR",
                btnID: "db-admin-btn4"
            },
            {
                title: "Data Warehouse Specialist",
                description: "Data Warehouse Specialists design and manage data warehouses to support business intelligence and analytics. They work on data integration, ETL processes, and creating data marts. This role requires expertise in data warehousing technologies and data modeling.",
                salaryRange: "110,000 - 220,000 LKR",
                btnID: "db-admin-btn5"
            }
        ]
    },
    {
        field: "IT Support and Services",
        fieldId: 10,
        jobs: [
            {
                title: "Technical Support Engineer",
                description: "Technical Support Engineers provide technical assistance to customers and clients. They troubleshoot hardware and software issues, provide solutions, and ensure customer satisfaction. This role requires strong technical knowledge and excellent communication skills.",
                salaryRange: "70,000 - 140,000 LKR",
                btnID: "it-support-btn1"
            },
            {
                title: "Help Desk Technician",
                description: "Help Desk Technicians provide front-line support for IT issues. They handle tasks such as answering support calls, resolving technical problems, and providing user training. This role requires strong problem-solving skills and a good understanding of IT systems.",
                salaryRange: "60,000 - 120,000 LKR",
                btnID: "it-support-btn2"
            },
            {
                title: "IT Service Manager",
                description: "IT Service Managers oversee IT service delivery and ensure that services meet business needs. They manage IT support teams, implement service management processes, and monitor service performance. This role requires strong leadership skills and a deep understanding of IT service management frameworks.",
                salaryRange: "110,000 - 220,000 LKR",
                btnID: "it-support-btn3"
            },
            {
                title: "Desktop Support Technician",
                description: "Desktop Support Technicians provide technical support for desktop computers and related equipment. They handle tasks such as installing software, configuring hardware, and troubleshooting issues. This role requires strong technical skills and the ability to work with end users.",
                salaryRange: "65,000 - 130,000 LKR",
                btnID: "it-support-btn4"
            },
            {
                title: "Customer Support Specialist",
                description: "Customer Support Specialists provide assistance to customers using a company's products or services. They handle inquiries, troubleshoot issues, and ensure customer satisfaction. This role requires excellent communication skills and a good understanding of the company's offerings.",
                salaryRange: "55,000 - 110,000 LKR",
                btnID: "it-support-btn5"
            }
        ]
    }
];

export default careerFields;
