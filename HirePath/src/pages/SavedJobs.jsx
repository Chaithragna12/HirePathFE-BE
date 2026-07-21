import { useEffect, useState } from "react";
import SavedJobCard from "../components/SavedJobCard";
import EmptyState from "../components/EmptyState";
import api from "../services/api";
import "./SavedJobs.css";

const SavedJobs = () => {

  const [savedJobs, setSavedJobs] = useState([]);

  const getSavedJobs = async () => {
    try {
      const response = await api.get("/savedJobs/1");
      setSavedJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSavedJobs();
  }, []);

  const deleteJob = async (jobId) => {
    try {
      await api.delete(`/savedJobs/${jobId}`);
      getSavedJobs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="saved-page">

      <h1>Saved Jobs</h1>

      {savedJobs.length === 0 ? (
        <EmptyState message="No Saved Jobs" />
      ) : (
        <div className="saved-grid">
          {savedJobs.map((job) => (
            <SavedJobCard
              key={job.id}
              job={job}
              onDelete={deleteJob}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default SavedJobs;