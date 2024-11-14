import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zria99z', 'template_4mt67ca', form.current, 'cyGY5CKzwR4LA4IyBcGk2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contactPage">
            <div className="contactContainer">
                <motion.div 
                    className="paragraph"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className="contactPageTitle">Contact Me</h1>
                    <span className="contactDesc">Let's build<br/> something together</span>
                </motion.div>
                <motion.form 
                    className="contactForm" 
                    ref={form} 
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    <input type="text" className="name"
                        placeholder="Your Name" name="your_name" />
                    <input type="email" className="email"
                        placeholder="Your Email" name="your_email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                </motion.form>
            </div>
        </section>
    );
}

export default Contact;
