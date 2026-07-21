import "./ApplicationCard.css";

const ApplicationCard = ({ application }) => {

    return (

        <div className="application-card">

            <h2>
                {application.jobTitle}
            </h2>

            <p>
                {application.company}
            </p>

            <p>

                Status :
                <span className="status">

                    {application.status}

                </span>

            </p>

            <p>

                Applied :
                {application.appliedDate}

            </p>

        </div>

    );

};

export default ApplicationCard;