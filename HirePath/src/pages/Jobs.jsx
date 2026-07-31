import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import JobCard from "../components/JobCard";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import api from "../services/api";
import "./Jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchJobs = async ({ keyword, location }) => {
    setLoading(true);

    try {
      const response = await api.get("/jobs", {
        params: {
          keyword,
          location,
        },
      });
      setJobs(response.data.results || []);
    } catch (error) {
      console.log(error);
      setJobs([]);
    }

    setLoading(false);
  };

  const applyFilter = async ({ category, salary }) => {
    setLoading(true);

    try {
      const response = await api.get("/jobs", {
        params: {
          category,
          minSalary: salary,
        },
      });

      setJobs(response.data.results || []);
    } catch (error) {
      console.log(error);
      setJobs([]);
    }

    setLoading(false);
  };

  const saveJob = async (job) => {
    try {
      await api.post("/saveJob", {
        userId: 1,
        jobId: job.id,
        jobTitle: job.title,
        company: job.company.display_name,
        location: job.location.display_name,
        salary: job.salary_min,
        applyUrl: job.redirect_url,
      });

      alert("Job Saved Successfully");
    } catch (error) {
      alert("Unable to Save Job");
    }
  };
const trackApplication = async (job) => {
  try {
    await api.post("/addApplication", {
      userId: 1,
      jobId: job.id,
      jobTitle: job.title,
      company: job.company.display_name,
      status: "Applied",
      appliedDate: new Date().toISOString().split("T")[0],
    });

    alert("Application Tracked Successfully");
  } catch (error) {
    console.log(error);
    alert("Unable to Track Application");
  }
};

  return (
    <div className="jobs-page">
      <SearchBar onSearch={searchJobs} />

      <div className="jobs-container">
        <div className="filter-section">
          <FilterPanel onFilter={applyFilter} />
        </div>

        <div className="job-list-section">
          {loading && <Loader />}

          {!loading && jobs.length === 0 && (
            <EmptyState message="No Jobs Found" />
          )}

          <div className="job-grid">
            {jobs.map((job) => (
              <JobCard
    key={job.id}
    job={job}
    onSave={saveJob}
    onTrack={trackApplication}
/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;