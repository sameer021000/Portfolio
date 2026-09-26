import analysisImg from "../Assets/analysis_screen_lighttheme_potrait.jpg";
import counterImg from "../Assets/counter_screen_lighttheme_potrait.jpg";
import historyImg from "../Assets/history_screen_lighttheme_potrait.jpg";
import settingsImg from "../Assets/settings_screen_lighttheme_potrait.jpg";
import dashboardScreenImg from "../Assets/NoteCalcProjectAssets/dashboard_screen_v1.7.0.jpg";
import budgetScreenImg from "../Assets/NoteCalcProjectAssets/budget_screen_v1.7.0.jpg";
import expensesScreenImg from "../Assets/NoteCalcProjectAssets/expenses_screen_v1.7.0.jpg";
import groupDashboardScreenImg from "../Assets/NoteCalcProjectAssets/group_dashboard_screen_v1.6.0.jpg";
import settingsScreen1Img from "../Assets/NoteCalcProjectAssets/settings_screen1_v1.6.0.jpg";
import settingsScreen2Img from "../Assets/NoteCalcProjectAssets/settings_screen2_v1.6.0.jpg";
import announcementPageImg from "../Assets/SaveTheThroneProjectAssets/announcement_page.jpg";
import birthdaywishingPageImg from "../Assets/SaveTheThroneProjectAssets/birthdaywishing_page.jpg";
import emergencyfamilymeetingPageImg from "../Assets/SaveTheThroneProjectAssets/emergencyfamilymeeting_page.jpg";
import evidencefilePageImg from "../Assets/SaveTheThroneProjectAssets/evidencefile_page.jpg";
import finalePageImg from "../Assets/SaveTheThroneProjectAssets/finale_page.jpg";
import openingPageImg from "../Assets/SaveTheThroneProjectAssets/opening_page.jpg";
import secretfilePageImg from "../Assets/SaveTheThroneProjectAssets/secretfile_page.jpg";

export const portfolioData = {
    name: "Sameer Shaik",
    email: "sameer021000@gmail.com",
    phone: "+91 6300728110",
    linkedin: "https://linkedin.com/in/sameershaik021000/",
    github: "https://github.com/sameer021000/",
    technicalSkills: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Web Development", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        {
            name: "Android Development",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        },
        { name: "XML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Spring-Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Node.Js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "React.Js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
        {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "UI/UX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ],
    experience: [
        {
            role: "Packaged App Development Associate",
            company: "Accenture Solutions Private Limited",
            description:
                "Received comprehensive training in the MERN stack (MongoDB, Express.js, React.js, Node.js). Worked in a project as support role, contributing to the development of small components. Gained hands-on experience in writing and optimizing code for real-world applications. Collaborated with the development team to enhance project functionality and performance.",
            duration: "Nov 2024 - Feb 2025",
        },
    ],
    projects: [
        {
            name: "NoteCalc",
            liveUrl: "https://github.com/sameer021000/NoteCalc/releases",
            githubUrl: "https://github.com/sameer021000/NoteCalc",
            apkUrl: "https://github.com/sameer021000/NoteCalc/releases/download/v1.7.0/NoteCalc.v1.7.0.apk",
            tech: ["Java", "XML", "Android"],
            description: null,
            generalDescription: "A premium, offline-first Android expense tracker and calculator designed to bridge the gap between simple note-taking and structured financial tracking. It combines a stunning, modern interface with powerful tools like dual tracking modes, detailed PDF exports, and an organized dashboard for an intuitive accounting experience.",
            technicalDescription: [
                "Engineered a dual-mode financial tracking system (Expenses & Budgets) with dynamic total calculations and balances.",
                "Developed a PDF Export Engine using native android.graphics.pdf.PdfDocument to generate multi-table, paginated reports.",
                "Implemented a privacy-first, offline persistence layer using SharedPreferences with custom JSON (org.json.JSONObject) serialization, supporting full workspace backup and restore.",
                "Designed a premium UI featuring glassmorphism, rounded layouts, fluid StateListDrawables, and edge-to-edge window insets."
            ],
            image: dashboardScreenImg,
            images: [
                { src: dashboardScreenImg, caption: "Dashboard Screen: Smart dashboard with dynamic search, quick sorting, and interactive states." },
                { src: expensesScreenImg, caption: "Expenses Screen: Track your outgoing expenses with detailed lists and balances." },
                { src: budgetScreenImg, caption: "Budgets Screen: Manage incoming budgets with dynamic totals." },
                { src: groupDashboardScreenImg, caption: "Group Dashboard: Organize accounts seamlessly under custom folders." },
                { src: settingsScreen1Img, caption: "Settings Screen: Privacy-first offline JSON backup system and app configurations." },
                { src: settingsScreen2Img, caption: "Settings Screen: Customize the app with various export and theme options." }
            ],
            badge: "Android App",
        },
        {
            name: "Smart Tasbeeh",
            liveUrl: "https://github.com/sameer021000/Smart-Tasbeeh/releases",
            githubUrl: "https://github.com/sameer021000/Smart-Tasbeeh",
            apkUrl: "https://github.com/sameer021000/Smart-Tasbeeh/releases/download/v1.1.0/Smart-Tasbeeh-v1.1.0.apk",
            tech: ["Java", "XML", "SQLite"],
            description: null,
            generalDescription: "A versatile digital Tasbeeh application designed to modernize and elevate the traditional act of Zikr. Beyond standard counting, it features a hands-free Auto-Count mode, a draggable floating counter button for ergonomic usage, and goal-setting capabilities. With customizable haptic feedback, immersive sound effects, deep analysis of counting rhythm, and detailed history tracking with pinning support, it ensures a premium, distraction-free spiritual experience.",
            technicalDescription: [
                "Engineered a thread-safe Auto-Count system using Handler and Runnable logic for precise interval timing (100ms–60s) without blocking the main UI thread.",
                "Implemented custom touch-interception logic to create a draggable floating counter button with boundary constraints and coordinate persistence for optimal ergonomics.",
                "Developed a statistical analysis engine to compute real-time consistency metrics and visualized them using a custom RecyclerView with SnapHelper for interactive data review.",
                "Integrated robust local storage using SQLite for archiving history with complex sorting/pinning, and SharedPreferences for managing granular app settings across lifecycle changes."
            ],
            image: counterImg,
            images: [
                { src: counterImg, caption: "Counter Screen: Interactive digital tally counter with haptic feedback and sound controls." },
                { src: analysisImg, caption: "Analysis Screen: Detailed statistical insights and rhythm tracking." },
                { src: historyImg, caption: "History Screen: Comprehensive log of all your sessions with pinning support." },
                { src: settingsImg, caption: "Settings Screen: Customize your experience with themes, sounds, and more." }
            ],
            badge: "Android App",
        },
        {
            name: "Gold Artisan Web Application",
            liveUrl: "https://goldartisan.vercel.app/",
            githubUrl: "https://github.com/sameer021000/GoldArtisan",
            tech: ["React.Js", "Node.Js", "MongoDB", "HTML", "CSS", "JavaScript"],
            description: null,
            generalDescription: "A user-friendly digital platform designed to help gold artisans streamline their work. It provides an easy way to register, manage profiles, and connect with potential clients, modernizing the traditional artisan trade.",
            technicalDescription: [
                "Built a full-stack web application using the MERN stack (MongoDB, Express, React, Node) architecture.",
                "Implemented secure JWT authentication and role-based access control for artisans and admins.",
                "Designed a responsive UI with React.js, utilizing Hooks and Context API for state management.",
                "Deployed backend on Render and frontend on Vercel with CI/CD integration."
            ],
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
        },
        {
            name: "Save The Throne",
            liveUrl: "https://muhammadrazabirthday.vercel.app/",
            githubUrl: "https://github.com/sameer021000/Muhammad-Raza-Birthday",
            apkUrl: null,
            tech: ["React.Js", "JavaScript", "HTML", "CSS"],
            description: null,
            generalDescription: "A cinematic, mobile-first interactive birthday experience for Muhammad Raza ('Mamma Darling'). This project transforms a traditional birthday greeting into an interactive adventure where the user is portrayed as the King of Hearts. The story unfolds through multiple animated scenes, humorous family moments, a royal courtroom, interactive celebrations, and finally concludes with a heartfelt birthday message.",
            technicalDescription: [
                "Engineered a mobile-first responsive design tailored for an immersive, cinematic experience.",
                "Developed interactive story progression components featuring custom animations and smooth transitions.",
                "Integrated dynamic audio feedback, sound effects, and visual elements like confetti and fireworks.",
                "Built with React.js using Lucide React for iconography and modern ES6+ JavaScript."
            ],
            image: openingPageImg,
            images: [
                { src: openingPageImg, caption: "Opening Scene: The grand entrance to the royal experience." },
                { src: secretfilePageImg, caption: "Confidential File: Uncovering the highly classified dossier." },
                { src: evidencefilePageImg, caption: "Evidence Collection: Interactive collection of humorous evidence." },
                { src: emergencyfamilymeetingPageImg, caption: "Emergency Meeting: Gathering the family for the royal verdict." },
                { src: announcementPageImg, caption: "Royal Announcement: The official decree and celebration." },
                { src: birthdaywishingPageImg, caption: "Cake Ceremony: Interactive birthday wishing and cake." },
                { src: finalePageImg, caption: "Grand Finale: A heartfelt, emotional closing scene." }
            ],
            badge: "Web App",
        },
    ],
    education: [
        {
            level: "Graduation",
            qualification: "Bachelor Of Technology (B.Tech)",
            institution: "Vellore Institute of Technology",
            location: "Amaravati, Andhra Pradesh",
            board: null,
            knowledge: ["Java", "HTML", "CSS", "JavaScript", "PHP", "MySQL", "Python", "OOPs"],
            gpa: "8.34",
            period: "Aug 2020 - May 2024",
        },
        {
            level: "Intermediate",
            qualification: "12th",
            institution: "Sri Chaitanya Junior College",
            location: "Vijayawada, Andhra Pradesh",
            board: "Board of Intermediate Education Andhra Pradesh",
            knowledge: ["Maths", "Physics", "Chemistry"],
            gpa: "9.54",
            period: "Jun 2017 - Mar 2019",
        },
        {
            level: "School",
            qualification: "10th",
            institution: "Geethanjali EM High School",
            location: "Vijayawada, Andhra Pradesh",
            board: "Board of Secondary Education Andhra Pradesh",
            knowledge: ["Telugu", "Hindi", "English", "Maths", "Science", "Social"],
            gpa: "9.0",
            period: "Jun 2016 - Apr 2017",
        },
    ],
    achievements: [
        {
            title: "SIXTH SENSE 2024",
            desc: "Achieved 2nd place in SIXTH SENSE event organized by Innovators Quest club at VIT-AP University.",
        },
    ],
    responsibilities: [
        {
            title: "Member of design team (VITOPIA)",
            desc: "Contributed my efforts in designing the tickets for fest in the VITAP",
        },
        {
            title: "Member of managing team (VTAPP)",
            desc: "Ensure that all team members fulfilled their responsibilities efficiently",
        },
    ],
    certificates: [
        {
            title: "Data Structures and Algorithms – Great Learning",
            desc: "Completed an intermediate-level course covering core DSA concepts in Java, strengthening problem-solving and algorithmic thinking.",
        },
        {
            title: "Android Application Development – Great Learning",
            desc: "Gained hands-on knowledge of Android app development, including activities, layouts, and basic app workflows.",
        },
        {
            title: "AWS Solution Architect Associate Training – byteXL",
            desc: "Completed a 60-hour training on AWS fundamentals, focusing on cloud architecture, core AWS services, and deployment concepts.",
        },
        {
            title: "Prompt Engineering Webinar – Innovators Quest Club, VIT-AP",
            desc: "Participated in a technical webinar on Prompt Engineering, exploring effective prompt design and real-world AI use cases.",
        },
    ],
}

export const skillCategories = {
    "Frontend & Web Technologies": ["HTML", "CSS", "JavaScript", "React.Js", "UI/UX", "XML", "Web Development"],
    "Backend & Languages": ["Java", "Python", "Node.Js", "Spring-Boot", "PHP"],
    "Database Systems": ["MySQL", "MongoDB"],
    "Mobile & Tools": ["Android Development", "Git", "GitHub"]
}

export const categoryIcons = {
    "Frontend & Web Technologies": "💻",
    "Backend & Languages": "⚙️",
    "Database Systems": "🗄️",
    "Mobile & Tools": "🚀"
}
