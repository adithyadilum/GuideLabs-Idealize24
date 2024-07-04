const questionsIT = [
    {
        type: 'single',
        text: 'When faced with a technical issue, I prefer to:',
        options: ['Research solutions online.', 'Experiment and try different approaches.', 'Ask for help from a technical expert.'],
        category: 'Technical Preference'
    },
    {
        type: 'single',
        text: 'When working on a project, I prioritize:',
        options: ['Completing tasks quickly.', 'Ensuring accuracy and attention to detail.', 'A balance between speed and accuracy.'],
        category: 'Work Style'
    },
    {
        type: 'single',
        text: 'In a team setting, I prefer to:',
        options: ['Work independently and contribute my expertise.', 'Collaborate closely with others and share ideas.', 'I am comfortable with both independent and collaborative work.'],
        category: 'Team Preference'
    },
    {
        type: 'single',
        text: 'When learning a new skill, I prefer:',
        options: ['Attending hands-on workshops or practical demonstrations.', 'Reading technical documentation and tutorials.', 'A combination of both practical experience and reading materials.'],
        category: 'Learning Style'
    },
    {
        type: 'single',
        text: 'You are tasked with building a website for a local charity. Would you prefer to:',
        options: ['Design the website\'s user interface and user experience', 'Develop the website\'s backend code and functionality', 'Manage the project timeline, budget, and team communication'],
        category: 'Project Preference'
    },
    {
        type: 'single',
        text: 'Imagine you are presented with a large dataset of customer behavior. What would you be most interested in doing?',
        options: ['Uncover hidden patterns and trends in the data', 'Use the data to build a machine learning model for customer recommendations', 'Develop a secure system to store and manage the data'],
        category: 'Data Analysis'
    },
    {
        type: 'multiple',
        questions: [
            {
                text: 'I enjoy tackling complex problems and figuring out solutions.',
                category: 'Problem Solving'
            },
            {
                text: 'I enjoy learning about new technologies and staying up-to-date with the latest advancements.',
                category: 'Learning and Development'
            },
            {
                text: 'I am meticulous and enjoy keeping my work organized and well-documented.',
                category: 'Work Habits'
            }
        ]
    },
    {
        type: 'multiple',
        questions: [
            {
                text: 'I enjoy working with others and clearly explaining technical concepts.',
                category: 'Communication'
            },
            {
                text: 'I am a quick learner and can adapt to new technologies and processes.',
                category: 'Adaptability'
            },
            {
                text: 'I am fascinated by the idea of creating intelligent machines that can learn and adapt.',
                category: 'Interest in AI'
            }
        ]
    },
    {
        type: 'multiple',
        questions: [
            {
                text: 'I enjoy working with large datasets and performing complex calculations.',
                category: 'Data Handling'
            },
            {
                text: 'I am interested in automating tasks and streamlining processes.',
                category: 'Automation'
            },
            {
                text: 'I find data analysis and interpreting trends interesting.',
                category: 'Data Analysis'
            }
        ]
    },
    {
        type: 'multiple',
        questions: [
            {
                text: 'I enjoy helping others solve their technical problems and find satisfaction in troubleshooting and fixing issues.',
                category: 'Technical Support'
            },
            {
                text: 'I like the idea of managing IT projects and leading teams.',
                category: 'Leadership'
            },
            {
                text: 'I find the idea of protecting systems and data from cyber threats exciting.',
                category: 'Cybersecurity'
            }
        ]
    }
];

export default questionsIT;