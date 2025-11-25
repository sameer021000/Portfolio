import React from 'react';
import '../CSS/MainScreenCSS.css';

function MainScreen() {
    return (
        <div id="divId1_App">
            
            {/* --- HERO SECTION --- */}
            <div id="heroCard">
                <div id="heroContent">
                    <h1 id="heroName">Sameer Shaik</h1>
                    <h2 id="heroRole">Packaged App Development Associate</h2>
                    <div id="heroContactBar">
                        <span id="heroPhone">+91-6300728110</span>
                        <span id="heroDivider">|</span>
                        <span id="heroEmail">sameer021000@gmail.com</span>
                    </div>
                </div>
            </div>

            {/* --- EXPERIENCE SECTION --- */}
            <div id="sectionExperience">
                <h3 id="titleExperience">Experience</h3>
                <div id="expCardAccent">
                    <div id="expTopRow">
                        <h4 id="expCompany">Accenture Solutions</h4>
                        <span id="expDate">Nov 2024 – Feb 2025</span>
                    </div>
                    <p id="expRole">Packaged App Development Associate</p>
                    <ul id="expList">
                        <li id="expItem1">Received comprehensive training in the MERN stack (MongoDB, Express, React, Node).</li>
                        <li id="expItem2">Contributed to support roles & small component development.</li>
                        <li id="expItem3">Optimized code for real-world application performance.</li>
                    </ul>
                </div>
            </div>

            {/* --- PROJECTS SECTION --- */}
            <div id="sectionProjects">
                <h3 id="titleProjects">Projects</h3>
                <div id="projectGrid">
                    
                    {/* Project 1 */}
                    <div id="projCard1">
                        <div id="projHeader1">
                            <h4 id="pTitle1">Pizzeria Website</h4>
                            <span id="pTech1">MERN Stack</span>
                        </div>
                        <p id="pDesc1">Full-stack ordering system. Users browse/order pizzas; Admins manage inventory via API. Features dynamic cart & MongoDB integration.</p>
                    </div>

                    {/* Project 2 */}
                    <div id="projCard2">
                        <div id="projHeader2">
                            <h4 id="pTitle2">Gold App</h4>
                            <span id="pTech2">Android / Java</span>
                        </div>
                        <p id="pDesc2">Shopping app connecting users with goldsmiths. Features profile management, complex CRUD operations, and artisan showcases.</p>
                    </div>

                    {/* Project 3 */}
                    <div id="projCard3">
                        <div id="projHeader3">
                            <h4 id="pTitle3">Virtual ATM</h4>
                            <span id="pTech3">Java OOP</span>
                        </div>
                        <p id="pDesc3">CLI Banking system using HashMap data structures. Handles Deposits, Withdrawals, and Mini-Statements efficiently.</p>
                    </div>
                </div>
            </div>

            {/* --- SKILLS SECTION --- */}
            <div id="sectionSkills">
                <h3 id="titleSkills">Technical Arsenal</h3>
                <div id="skillsFlex">
                    <div id="skillBox1">
                        <h5 id="skillHead1">Languages</h5>
                        <p id="skillText1">Java, Python, SQL, JavaScript</p>
                    </div>
                    <div id="skillBox2">
                        <h5 id="skillHead2">Web & DB</h5>
                        <p id="skillText2">React.js, Node.js, HTML/CSS, MongoDB</p>
                    </div>
                    <div id="skillBox3">
                        <h5 id="skillHead3">Core Concepts</h5>
                        <p id="skillText3">DSA, OOPs, Git, Cloud Basics</p>
                    </div>
                </div>
            </div>

            {/* --- EDUCATION & ACHIEVEMENTS GRID --- */}
            <div id="gridEduAchieve">
                
                {/* Education */}
                <div id="eduCardStyled">
                    <h3 id="titleEdu">Education</h3>
                    <h4 id="eduCollege">VIT - Andhra Pradesh</h4>
                    <p id="eduDegree">B.Tech Computer Science</p>
                    <p id="eduScore">CGPA: 8.34 / 10.0</p>
                    <span id="eduYear">2020 - 2024</span>
                </div>

                {/* Achievements */}
                <div id="achieveCardStyled">
                    <h3 id="titleAchieve">Achievements</h3>
                    <ul id="achieveListStyled">
                        <li id="achItem1">🥈 2nd Place: Sixth Sense 2024 (Innovators Quest)</li>
                        <li id="achItem2">📜 Cert: DSA in Java (Great Learning)</li>
                        <li id="achItem3">📱 Cert: Android Dev (Great Learning)</li>
                    </ul>
                </div>
            </div>

            <div id="footerSimple">
                Designed by Sameer Shaik
            </div>
        </div>
    );
}

export default MainScreen;