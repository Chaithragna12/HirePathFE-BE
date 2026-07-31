import api from "../services/api";

export const registerUser = async (user) => {
    return await api.post("/signup", user);
};

export const loginUser = async (loginData) => {
    return await api.post("/login", loginData);
};