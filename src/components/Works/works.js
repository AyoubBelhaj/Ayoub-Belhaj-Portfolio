    import React, { useState } from "react";
    import { motion } from "framer-motion";
    import "./works.css";
    import Portfolio1 from '../../assets/home-with-login.PNG';
    import Portfolio2 from '../../assets/home-page.png';
    import AiFormBuilder from '../../assets/ai-builder.png';
    import PersonalPortfolio from '../../assets/portfolio.png';
    import InternshipPic from '../../assets/calendrier1.png';

    const Works = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [selectedProject, setSelectedProject] = useState(null);

        const projects = [
            {
                id: 1,
                title: "AI Form Builder",
                img: AiFormBuilder, 
                description: "A dynamic form builder built with Next.js 14, Next-auth, and PostgreSQL. Optimized form creation efficiency by 40%.",
                link: "https://github.com/AyoubBelhaj/ai-form-builder.git" 
            },
            {
                id: 2,
                title: "Complaint Management System",
                img: Portfolio2, 
                description: "Optimized a complaint management system for banks using Angular 17, Express.js, MongoDB, and Node.js. Integrated JWT for secure authentication.",
                link: "https://github.com/AyoubBelhaj/-web_avance_sujet_A.git" 
            },
            {
                id: 3,
                title: "Internship Management Application",
                img: InternshipPic, 
                description: "Developed an application for managing internship applications and evaluations using Spring Boot and Angular. Reduced administrative management time by 30%.",
                link: "https://github.com/YourRepo/InternshipManagement"
            },
            {
                id: 4,
                title: "Personal Portfolio",
                img: PersonalPortfolio, 
                description: "Developed a responsive personal portfolio with ReactJS and Framer Motion. Enhanced user experience with smooth animations, increasing interactions by 50%.",
                link: "https://github.com/AyoubBelhaj/Portfolio" 
            },
            {
                id: 5,
                title: "Blog Application",
                img: Portfolio1, 
                description: "Developed and improved a blog application with HTML5, CSS, JavaScript, PHP, and Laravel. Reduced loading times by 30% and improved the responsive design.",
                link: "https://github.com/AyoubBelhaj/Blog" 
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
                    My Projects
                </motion.h2>
                <motion.span 
                    className="worksDesc" 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.2 }}
                >Welcome to my project shelfe ! take a close look and I hope it will help you
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
                            className="proj-desc"
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
                                className="btn-project"
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