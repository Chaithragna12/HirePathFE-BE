import api from "./api";
export const addApplication = async (application) => {
    return await api.post("/addApplication", application);
};
export const getApplicationss = async (userId) => {
    return await api.get(`/applications/${userId}`);
};
export const updateApplication = async (id, application) => {
    return await api.put(`/applications/${id}`, application);
};
export const deleteApplication = async (id) => {
    return await api.delete(`/applications/${id}`);
};