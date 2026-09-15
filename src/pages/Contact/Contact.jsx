import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "motion/react";
import styles from "./Contact.styles";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

function Contact({ contactRef }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');
        // Requires three Vite env vars set in .env (never hardcode these):
        // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
        // Sign up at emailjs.com, connect an email provider, and create a
        // template with {{name}}, {{email}}, {{message}} fields.
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form,
            { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
        ).then(
            () => { setStatus('sent'); setForm({ name: '', email: '', message: '' }); },
            () => setStatus('error')
        );
    }

    return (
        <styles.ContactWrapper ref={contactRef}>
            <styles.ContactContainer>
                <div className="intro">
                    <h1>Let's Connect</h1>
                    <p>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                    <SocialLinks size={22} />
                </div>
                <styles.MessageForm>
                    <form onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" required value={form.name} onChange={handleChange} />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" required value={form.email} onChange={handleChange} />
                        </div>
                        <div className="form-field">
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" id="message" rows={4} required value={form.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending…' : 'Send Message'}
                        </button>
                        <AnimatePresence>
                            {status === 'sent' && (
                                <motion.p
                                    className="form-status sent"
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    Message sent — thanks, I'll get back to you soon.
                                </motion.p>
                            )}
                            {status === 'error' && (
                                <motion.p
                                    className="form-status error"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    Something went wrong — try emailing directly instead.
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </form>
                </styles.MessageForm>
            </styles.ContactContainer>
        </styles.ContactWrapper>
    )
}

export default Contact;
