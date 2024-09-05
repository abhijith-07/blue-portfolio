function Contact() {
    return (
        <section>
            <div className="contact-container">
            <div>
                    <h1>Let's Connect</h1>
                    <p>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                </div>
                <div>
                    <form action="">
                        <label htmlFor="name"></label>
                        <input type="text" name="name" id="name" />
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" />
                        <label htmlFor="message"></label>
                        <textarea name="message" id="message"></textarea>
                        <input type="submit" />
                    </form>
                </div>
                <div className="social-icons">
                    <div className="logo x">X</div>
                    <div className="logo linkedin"></div>
                    <div className="logo github"></div>
                    <div className="logo mail"></div>
                </div>
           </div>
        </section>
    )
}

export default Contact;