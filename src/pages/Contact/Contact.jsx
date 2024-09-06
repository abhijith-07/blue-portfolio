import styles from "./Contact.styles";

function Contact({contactRef}) {
    return (
        <styles.ContactWrapper ref={contactRef}>
            <styles.ContactContainer>
                <div>
                    <h1>Let's Connect</h1>
                    <p>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                </div>
                <styles.MessageForm>
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
                <styles.SocialIcons>
                    <i className="logo x">X</i>
                    <i className="logo linkedin">L</i>
                    <i className="logo github">G</i>
                    <i className="logo mail">M</i>
                </styles.SocialIcons>
           </styles.ContactContainer>
        </styles.ContactWrapper>
    )
}

export default Contact;