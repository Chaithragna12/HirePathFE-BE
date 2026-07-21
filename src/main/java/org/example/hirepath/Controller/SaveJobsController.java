package org.example.hirepath.Controller;

import org.example.hirepath.Entity.SaveJobsEntity;
import org.example.hirepath.Service.SaveJobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class SaveJobsController {

    @Autowired
    private SaveJobService savedJobService;

    // Save Job
    @PostMapping("/saveJob")
    public SaveJobsEntity saveJob(@RequestBody SaveJobsEntity savedJob) {
        return savedJobService.saveJob(savedJob);
    }

    // Get Saved Jobs
    @GetMapping("/saveJobById/{userId}")
    public List<SaveJobsEntity> getSavedJobs(@PathVariable Long userId) {
        return savedJobService.getSavedJobs(userId);
    }

    // Delete Saved Job
    @DeleteMapping("/deleteJob/{id}")
    public String deleteSavedJob(@PathVariable Long id) {
        return savedJobService.deleteSavedJob(id);
    }

}
