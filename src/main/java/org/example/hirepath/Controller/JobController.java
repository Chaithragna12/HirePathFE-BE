package org.example.hirepath.Controller;

import org.example.hirepath.Service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping("/jobs")
    public String searchJobs(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String location,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Integer salary
    ) {

        return jobService.searchJobs(
                keyword,
                location,
                category,
                salary
        );
    }


}