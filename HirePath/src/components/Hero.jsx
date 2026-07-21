import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
    return (

        <section className="hero">

            <div className="hero-container">

                <div className="hero-content">

                    <h1>
                        Find Your Dream Job With
                        <span> HirePath</span>
                    </h1>

                    <p>
                        Search thousands of jobs, save your favourites,
                        and track your applications from one place.
                    </p>

                    <div className="hero-buttons">

                        <Link to="/jobs" className="find-btn">
                            Find Jobs
                        </Link>

                        <Link to="/register" className="start-btn">
                            Get Started
                        </Link>

                    </div>

                </div>

                <div className="hero-image">

                    <img src="/hero.jpg" alt="Hero" />

                </div>

            </div>

        </section>

    );
};

export default Hero;