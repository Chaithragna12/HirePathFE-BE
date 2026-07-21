import "./JobCard.css";

const JobCard = ({ job, onSave }) => {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>

      <p className="company">
        {job.company?.display_name}
      </p>

      <p className="location">
        📍 {job.location?.display_name}
      </p>

      <p className="salary">
        ₹ {job.salary_min} - ₹ {job.salary_max}
      </p>

      <div className="buttons">
        <button
          className="save-btn"
          onClick={() => onSave(job)}
        >
          ❤️ Save
        </button>

        <a
          href={job.redirect_url}
          target="_blank"
          rel="noreferrer"
          className="apply-btn"
        >
          Apply
        </a>
      </div>
    </div>
  );
};

export default JobCard;