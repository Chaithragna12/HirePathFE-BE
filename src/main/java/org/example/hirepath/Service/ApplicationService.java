package org.example.hirepath.Service;

import org.example.hirepath.Entity.ApplicationEntity;
import org.example.hirepath.Repo.ApplicationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {
    @Autowired
    private ApplicationRepo repo;
    public ApplicationEntity addApplication(ApplicationEntity application) {
        return repo.save(application);
    }

    public List<ApplicationEntity> getApplications(Long userId) {
        return repo.findByUserId(userId);
    }

    public ApplicationEntity updateApplication(Long id, ApplicationEntity application) {

        application.setId(id);

        return repo.save(application);
    }

    public String deleteApplication(Long id) {

        repo.deleteById(id);

        return "Application Deleted Successfully";
    }
}
