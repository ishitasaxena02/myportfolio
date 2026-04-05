// Portfolio Data Configuration
const portfolioData = {

    // Skills Data
    skills: [
        { id: "agile", name: "Agile", subtitle: "Methodology", icon: "assets/images/skills/agile.png" },
        { id: "c", name: "C", subtitle: "Programming", icon: "assets/images/skills/c.png" },
        { id: "cpp", name: "C++", subtitle: "Development", icon: "assets/images/skills/c++.png" },
        { id: "css3", name: "CSS3", subtitle: "Styling", icon: "assets/images/skills/css-3.png" },
        { id: "drone", name: "Drone", subtitle: "Technology", icon: "assets/images/skills/drone.png" },
        { id: "flask", name: "Flask", subtitle: "Framework", icon: "assets/images/skills/flask.png" },
        { id: "github", name: "GitHub", subtitle: "Version Control", icon: "assets/images/skills/github.png" },
        { id: "html", name: "HTML5", subtitle: "Markup", icon: "assets/images/skills/html.png" },
        { id: "java", name: "Java", subtitle: "Development", icon: "assets/images/skills/java.png" },
        { id: "jira", name: "Jira", subtitle: "Project Management", icon: "assets/images/skills/jira.png" },
        { id: "js", name: "JavaScript", subtitle: "Programming", icon: "assets/images/skills/js.png" },
        { id: "kafka", name: "Apache", subtitle: "Kafka", icon: "assets/images/skills/kafka.png" },
        { id: "mysql", name: "MySQL", subtitle: "Database", icon: "assets/images/skills/mysql.png" },
        { id: "nodejs", name: "Node.js", subtitle: "Backend", icon: "assets/images/skills/nodejs.png" },
        { id: "react", name: "React", subtitle: "", icon: "assets/images/skills/physics.png" },
        { id: "postgresql", name: "PostgreSQL", subtitle: "Database", icon: "assets/images/skills/postgresql.png" },
        { id: "python", name: "Python", subtitle: "Development", icon: "assets/images/skills/python.png" },
        { id: "redis", name: "Redis", subtitle: "Caching", icon: "assets/images/skills/redis.png" },
        { id: "rest", name: "REST", subtitle: "APIs", icon: "assets/images/skills/rest.png" },
        { id: "schema", name: "Schema", subtitle: "Design", icon: "assets/images/skills/schema.png" },
        { id: "sql", name: "SQL", subtitle: "Queries", icon: "assets/images/skills/sql.png" },
        { id: "sqlite", name: "SQLite", subtitle: "Database", icon: "assets/images/skills/sqlite.png" },
        { id: "system", name: "System", subtitle: "Design", icon: "assets/images/skills/system.png" },
        { id: "tensorflow", name: "TensorFlow", subtitle: "ML", icon: "assets/images/skills/tf.png" }
    ],

    // Projects Data
    projects: [
        {
            id: "movie-recommendation",
            title: "Movie Recommendation System",
            icon: "🎬",
            description: "Used TensorFlow and RBM for personalized top 10 movie recommendations.",
            technologies: ["TensorFlow", "Python", "RBM"],
            links: {
                github: "https://github.com/ishitasaxena02/deep_learning_based_recommender_system"
            }
        },
        {
            id: "atm-system",
            title: "ATM Management System", 
            icon: "🏧",
            description: "Python-based ATM with real-time SQLite database integration, offering essential banking functions.",
            technologies: ["Python", "SQLite", "Database"],
            links: {
                github: "https://github.com/ishitasaxena02/ATM-SYSTEM-USING-PYTHON-AND-SQLITE"
            }
        },
        {
            id: "encrypted-chat",
            title: "Encrypted Chat Application",
            icon: "🔐", 
            description: "Built a Secure, Real-Time Chat App with End-to-End Encryption, Offering Multiple Encryption Modes for User Privacy.",
            technologies: ["Real-time", "Encryption", "Security"],
            links: {
                github: "https://github.com/ishitasaxena02/SecureChat_Real_Time_Encrypted_Chat_Application/tree/main"
            }
        },
        {
            id: "tour-lucknow",
            title: "Tour Lucknow",
            icon: "🏛️",
            description: "Tour Lucknow: Your virtual gateway to Lucknow's cultural treasures and hidden gems, all beautifully showcased in a Bootstrap-powered tourism website portfolio.",
            technologies: ["Bootstrap", "Tourism", "Web Design"],
            links: {
                demo: "https://ishitasaxena02.github.io/Tour-Lucknow/",
                github: "https://github.com/ishitasaxena02/Tour-Lucknow"
            }
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}