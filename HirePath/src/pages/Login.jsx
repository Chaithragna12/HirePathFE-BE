import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles.css";

function Login(){

    const navigate=useNavigate();

    const[loginData,setLoginData]=useState({
        email:"",
        password:""
    });

    const handleChange=(e)=>{
        setLoginData({
            ...loginData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{

            await api.post("/users/login",loginData);

            alert("Login Successful");

            navigate("/");

        }
        catch(error){
            alert("Invalid Email or Password");
        }
    };

    return(

        <div className="form-container">

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={loginData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleChange}
                    />
                </div>

                <button className="btn login-btn">
                    Login
                </button>

            </form>

            <div className="link">
                <Link to="/register">Create Account</Link>
            </div>

        </div>

    );

}

export default Login;