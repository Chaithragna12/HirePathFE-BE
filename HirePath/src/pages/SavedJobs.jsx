import { useEffect, useState } from "react";
import SavedJobCard from "../components/SavedJobCard";
import EmptyState from "../components/EmptyState";
import {
    getSavedJobs,
    deleteSavedJob
} from "../services/savedJobService";
import "./SavedJobs.css";

const SavedJobs = () => {

    const [savedJobs, setSavedJobs] = useState([]);

    const loadSavedJobs = async () => {
        try {
            const response = await getSavedJobs(1); // Replace 1 with logged-in user ID later
            setSavedJobs(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadSavedJobs();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteSavedJob(id);
            loadSavedJobs();
            alert("Job removed successfully");
        } catch (error) {
            console.error(error);
            alert("Failed to remove job");
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
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};

export default SavedJobs;