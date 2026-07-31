import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";
import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        phoneNumber: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await registerUser(user);

            alert("Registration Successful");

            console.log(response.data);

            navigate("/login");

        } catch (error) {

            console.error(error);

            alert(error.response?.data || "Registration Failed");

        }
    };

    return (

        <div className="register-container">

            <h2 className="register-title">Register</h2>

            <form onSubmit={handleSubmit}>

                <div className="register-group">
                    <input
                        className="register-input"
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={user.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="register-group">
                    <input
                        className="register-input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="register-group">
                    <input
                        className="register-input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="register-group">
                    <input
                        className="register-input"
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={user.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="register-btn">
                    Register
                </button>

            </form>

            <div className="register-link">
                <Link to="/login">Already have an account?</Link>
            </div>

        </div>

    );

}

export default Register;