import React, { useState } from "react";
import { motion } from "framer-motion";
import "./works.css";
import Portfolio1 from '../../assets/home-with-login.PNG';
import Portfolio2 from '../../assets/home-page.png';

const Works = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Project 1",
            img: Portfolio1,
            description: "This is a description of Project 1.",
            link: "https://github.com/AyoubBelhaj/Blog/tree/master"
        },
        {
            id: 2,
            title: "Project 2",
            img: Portfolio2,
            description: "This is a description of Project 2.",
            link: "https://github.com/AyoubBelhaj/-web_avance_sujet_A/tree/master"
        },
        {
            id: 3,
            title: "Project 3",
            img: Portfolio2,
            description: "This is a description of Project 3.",
            link: "https://github.com/YourRepo/Project3"
        },
        {
            id: 4,
            title: "Project 4",
            img: Portfolio2,
            description: "This is a description of Project 4.",
            link: "https://github.com/YourRepo/Project4"
        },
        {
            id: 5,
            title: "Project 5",
            img: Portfolio2,
            description: "This is a description of Project 5.",
            link: "https://github.com/YourRepo/Project5"
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedProject(null);
    };

    return (
        <section id="works">
            <motion.h2 
                className="workstitle" 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
            >
                My Portfolio
            </motion.h2>
            <motion.span 
                className="worksDesc" 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                This is a demo text. You can write your own content here.
            </motion.span>
            <motion.div 
                className="worksGrid" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="worksCard"
                        onClick={() => openModal(project)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ 
                            scale: 1.05, // Slightly increase scale for a pronounced effect
                            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            transition: { 
                                duration: 0.3, // Longer transition duration for smoother effect
                                type: "tween", // Use spring physics for more fluid animation
                                stiffness: 100, // Adjust stiffness for responsiveness
                                damping: 20 // Reduce oscillation for smoother end
                            } 
                        }} 
                    >
                        <img src={project.img} alt={project.title} className="worksCardImg" />
                        <h3>{project.title}</h3>
                    </motion.div>
                ))}
            </motion.div>

            {isOpen && selectedProject && (
                <motion.div
                    className="modal"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 0.3 }} 
                    onClick={closeModal} 
                >
                    <motion.div
                        className="modalContent"
                        onClick={(e) => e.stopPropagation()} 
                        initial={{ y: "-100vh" }} 
                        animate={{ y: 0 }} 
                        exit={{ y: "100vh" }} 
                        transition={{ duration: 0.3 }} 
                    >
                        <span className="close" onClick={closeModal}>&times;</span>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            {selectedProject.title}
                        </motion.h2>
                        <img src={selectedProject.img} alt={selectedProject.title} />
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            {selectedProject.description}
                        </motion.p>
                        <motion.a
                            href={selectedProject.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            View Project
                        </motion.a>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default Works;