package org.example.hirepath.Controller;

import org.example.hirepath.Entity.ApplicationEntity;
import org.example.hirepath.Service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ApplicationController {
    @Autowired
    private ApplicationService ser;

    @PostMapping("/addApplication")
    public ApplicationEntity addApplication(@RequestBody ApplicationEntity application) {
        return ser.addApplication(application);
    }

    @GetMapping("/applications/{userId}")
    public List<ApplicationEntity> getApplications(@PathVariable Long userId) {
        return ser.getApplications(userId);
    }

    @PutMapping("/applications/{id}")
    public ApplicationEntity updateApplication(@PathVariable Long id,
                                               @RequestBody ApplicationEntity application) {
        return ser.updateApplication(id, application);
    }

    @DeleteMapping("/applications/{id}")
    public String deleteApplication(@PathVariable Long id) {
        return ser.deleteApplication(id);
    }
}
