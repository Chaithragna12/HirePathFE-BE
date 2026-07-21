import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="navbar-container">

                <Link to="/" className="logo">
                    HirePath
                </Link>

                <div className="nav-links">

                    <Link to="/">Home</Link>

                    <Link to="/jobs">Jobs</Link>

                    <Link to="/savedJobs">Saved Jobs</Link>

                    <Link to="/applications">Applications</Link>

                    <Link to="/about">About</Link>

                    <Link to="/contact">Contact</Link>

                </div>

                <div className="nav-buttons">

                    <Link to="/login" className="login-btn">
                        Login
                    </Link>

                    <Link to="/register" className="register-btn">
                        Register
                    </Link>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;