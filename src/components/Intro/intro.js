import React from "react";
import "./intro.css";
import bg from '../../assets/me2.jpg';
import Skills from "../Skills/skills";
import { motion } from "framer-motion";

const Intro = () => {
    return (
        <>
            <section id="intro">
                <div className="introContent">

                    <div className="introImage">
                        <motion.img 
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }} 
                            src={bg} 
                            alt="portfolio" 
                            className="bg" 
                        />
                    </div>

                    <div className="introParagraph">
                        <motion.span 
                            className="hello" 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5 }}
                        >
                            Hello,
                        </motion.span>
                        <br />
                        <motion.span 
                            className="introText" 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5, delay: 0.2 }} // Add delay for stagger effect
                        >
                            I'm <span className="introName">Ayoub</span><br /> Software Engineer
                        </motion.span>
                        <motion.p 
                            className="introPara" 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5, delay: 0.4 }} // Add delay for stagger effect
                        >
                            Computer science engineering student who is driven <br /> 
                            to learn, collect and seek more knowledge and skills <br /> 
                            to refine his engineering journey.
                        </motion.p>
                    </div>
                </div>
            </section>
            <Skills />
        </>
    );
}

export default Intro;
