package org.example.hirepath.Service;

import org.example.hirepath.Entity.SaveJobsEntity;
import org.example.hirepath.Repo.SaveJobsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaveJobService {
    @Autowired
    private SaveJobsRepo savedJobRepository;

    // Save Job
    public SaveJobsEntity saveJob(SaveJobsEntity savedJob) {
        return savedJobRepository.save(savedJob);
    }

    // Get Saved Jobs by User
    public List<SaveJobsEntity> getSavedJobs(Long userId) {
        return savedJobRepository.findByUserId(userId);
    }

    // Delete Saved Job
    public String deleteSavedJob(Long id) {

        if (savedJobRepository.existsById(id)) {

            savedJobRepository.deleteById(id);

            return "Job Deleted Successfully";

        }

        return "Job Not Found";
    }
}
