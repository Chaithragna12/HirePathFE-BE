import api from "./api";
export const saveJob = async (job) => {
    return await api.post("/saveJob", job);
};

export const getSavedJobs = async (userId) => {
    return await api.get(`/saveJobById/${userId}`);
};

export const deleteSavedJob = async (jobId) => {
    return await api.delete(`/deleteJob/${jobId}`);
};