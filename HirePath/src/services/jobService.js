export const searchJobs = async (keyword, location) => {
    return await api.get("/jobs", {
        params: {
            keyword,
            location,
        },
    });
};

export const filterJobs = async (keyword, location, category, minSalary) => {
    return await api.get("/jobs", {
        params: {
            keyword,
            location,
            category,
            minSalary,
        },
    });
};