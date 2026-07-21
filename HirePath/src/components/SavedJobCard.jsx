import "./SavedJobCard.css";

const SavedJobCard = ({ job, onDelete }) => {

    return (

        <div className="saved-card">

            <h2>{job.jobTitle}</h2>

            <p>{job.company}</p>

            <p className="location">
                {job.location}
            </p>

            <div className="buttons">

                <a
                    href={job.applyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="apply-btn"
                >
                    Apply
                </a>

                <button
                    className="remove-btn"
                    onClick={() => onDelete(job.jobId)}
                >
                    Remove
                </button>

            </div>

        </div>

    );

};

export default SavedJobCard;