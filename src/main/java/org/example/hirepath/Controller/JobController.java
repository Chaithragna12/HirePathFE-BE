package org.example.hirepath.Controller;

import org.example.hirepath.Service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class JobController {

    @Autowired
    private JobService Service;

    @GetMapping("/jobs")
    public String searchJobs(
            @RequestParam String keyword,
            @RequestParam String location) {

        return Service.getJobs(keyword, location);
    }
}