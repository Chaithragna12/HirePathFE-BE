import { useEffect, useState } from "react";
import ApplicationCard from "../components/ApplicationCard";
import EmptyState from "../components/EmptyState";
import {getApplicationss} from "../services/applicationService";
import "./Application.css";

const Applications = () => {

  const [applications, setApplications] = useState([]);

  const getApplications = async () => {
    try {
      const response = await getApplicationss(1);
      setApplications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <div className="applications-page">

      <h1>My Applications</h1>

      {applications.length === 0 ? (
        <EmptyState message="No Applications Found" />
      ) : (
        <div className="application-grid">

          {applications.map((application) => (
            <ApplicationCard
              key={application.id}
              application={application}
            />
          ))}

        </div>
      )}

    </div>
  );
};

export default Applications;