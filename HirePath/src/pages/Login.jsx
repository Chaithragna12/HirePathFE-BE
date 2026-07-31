import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Form Submitted");

        if (!loginData.email.trim() || !loginData.password.trim()) {
            alert("Email and Password are required");
            return;
        }

        try {
            console.log("Sending Login Request...");

            const response = await loginUser(loginData);

            console.log("Full Response:", response);
            console.log("Response Data:", response.data);

            // If backend returns null or empty
            if (!response.data) {
                alert("Invalid Email or Password");
                return;
            }

            localStorage.setItem("token", "loggedin");

            alert("Login Successful");

            navigate("/");
            window.location.reload();

        } catch (error) {
            console.error("Login Error:", error);

            if (error.response) {
                console.log("Status:", error.response.status);
                console.log("Error Data:", error.response.data);
            }

            alert("Invalid Email or Password");
        }
    };

    return (
        <div className="login-container">

            <h2 className="login-title">Login</h2>

            <form onSubmit={handleSubmit}>

                <div className="login-group">
                    <input
                        className="login-input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={loginData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="login-group">
                    <input
                        className="login-input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="login-btn">
                    Login
                </button>

            </form>

            <div className="login-link">
                <Link to="/register">Create Account</Link>
            </div>

        </div>
    );
}

export default Login;