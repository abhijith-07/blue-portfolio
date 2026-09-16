import { useContext } from "react";
import { ExternalLink, Mail } from "lucide-react";
import { ThemeContext } from "../../contexts/themeContext";
import styles from "./Contact.styles";

function Contact({contactRef}) {
    const { darkTheme } = useContext(ThemeContext);

    return (
        <styles.ContactWrapper ref={contactRef} $darktheme={darkTheme}>
            <styles.ContactContainer $darktheme={darkTheme}>
                <div>
                    <h1>Let's Connect</h1>
                    <p>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                </div>
                <styles.MessageForm $darktheme={darkTheme}>
                    <form action="">
                        <div className="form-field">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" id="message" rows={4}></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </styles.MessageForm>
                <styles.SocialIcons $darktheme={darkTheme}>
                    <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <ExternalLink size={22} color={darkTheme ? "var(--font-light)" : "var(--font-dark)"} />
                        <span>GitHub</span>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <ExternalLink size={22} color={darkTheme ? "var(--font-light)" : "var(--font-dark)"} />
                        <span>LinkedIn</span>
                    </a>
                    <a href="mailto:abhijith@email.com" aria-label="Email">
                        <Mail size={22} color={darkTheme ? "var(--font-light)" : "var(--font-dark)"} />
                        <span>Email</span>
                    </a>
                </styles.SocialIcons>
           </styles.ContactContainer>
        </styles.ContactWrapper>
    )
}

export default Contact;