import { useState } from "react";
import "./Contact.css";

const Contact = () => {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Thank you! Your message has been received.");

        setContact({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <div className="contact-container">

            <div className="contact-card">

                <h1 className="contact-title">
                    Contact Us
                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={contact.name}
                        onChange={handleChange}
                        className="contact-input"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={contact.email}
                        onChange={handleChange}
                        className="contact-input"
                    />

                    <textarea
                        rows="5"
                        name="message"
                        placeholder="Your Message"
                        value={contact.message}
                        onChange={handleChange}
                        className="contact-textarea"
                    />

                    <button
                        type="submit"
                        className="contact-button"
                    >
                        Send Message
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Contact;