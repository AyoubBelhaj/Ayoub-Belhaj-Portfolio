import React from "react";
import { motion } from "framer-motion";
import "./skills.css";
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <motion.span 
                className="skillTitle" 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
            >
                What I do
            </motion.span>
            <motion.span 
                className="skillDesc" 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }} // Delay for stagger effect
            >
                I am a skilled and passionate student who always keeps learning
            </motion.span>
            <div className="skillBars">
                {[
                    { img: UIDesign, title: "Web Development", desc: "Skilled in HTML, CSS, JavaScript, ReactJS, NextJS, and other web technologies to build responsive, dynamic websites." },
                    { img: WebDesign, title: "DevOps", desc: "Experience with Docker, Jenkins, and Linux systems, contributing to continuous integration and deployment (CI/CD) pipelines." },
                    { img: AppDesign, title: "App Design", desc: "Design and develop mobile and web applications with a focus on UI/UX design using tools like Figma and ReactJS." },
                    { img: AppDesign, title: "Backend Development", desc: "Strong proficiency in backend technologies like NodeJS, ExpressJS, Spring Boot, Laravel, and integrating APIs like Google and Mapbox." },
                    { img: AppDesign, title: "Database Management", desc: "Experience in managing databases like MySQL, PostgreSQL, and MongoDB, ensuring efficient data storage and retrieval." },
                ].map((skill, index) => (
                    <motion.div 
                        className="skillBar" 
                        key={index}
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
                    >
                        <img src={skill.img} alt={skill.title} className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>{skill.title}</h2>
                            <p>{skill.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Skills;