import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
// import "../styles.css";
import "../pages/styles.css";

function Register(){

    const navigate=useNavigate();

    const[user,setUser]=useState({
        fullName:"",
        email:"",
        password:"",
        phoneNumber:""
    });

    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            await api.post("/users/register",user);

            alert("Registration Successful");

            navigate("/login");

        }
        catch(error){
            alert("Registration Failed");
        }

    };

    return(

        <div className="form-container">

            <h2>Register</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={user.fullName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={user.phoneNumber}
                        onChange={handleChange}
                    />
                </div>

                <button className="btn register-btn">
                    Register
                </button>

            </form>

            <div className="link">
                <Link to="/login">Already have an account?</Link>
            </div>

        </div>

    );

}

export default Register;