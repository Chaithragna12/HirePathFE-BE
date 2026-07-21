import "./About.css";

const About = () => {

    return (

        <div className="about-container">

            <h1 className="about-title">
                About HirePath
            </h1>

            <p className="about-description">

                HirePath is a job search platform built using
                React and Spring Boot.

                It helps job seekers search jobs from external APIs,
                save their favorite jobs, and track applications
                in one place.

            </p>

            <div className="features-section">

                <h2 className="features-title">
                    Features
                </h2>

                <ul className="features-list">

                    <li>Search Jobs</li>

                    <li>Filter Jobs</li>

                    <li>Save Jobs</li>

                    <li>Track Applications</li>

                    <li>User Authentication</li>

                </ul>

            </div>

        </div>

    );

};

export default About;