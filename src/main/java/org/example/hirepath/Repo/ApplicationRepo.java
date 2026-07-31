package org.example.hirepath.Repo;

import org.example.hirepath.Entity.ApplicationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicationRepo extends JpaRepository<ApplicationEntity,Long> {
    List<ApplicationEntity> findByUserId(Long userId);
}
