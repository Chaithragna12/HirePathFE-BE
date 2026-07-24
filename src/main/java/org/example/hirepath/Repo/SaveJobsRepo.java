package org.example.hirepath.Repo;

import org.example.hirepath.Entity.SaveJobsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SaveJobsRepo extends JpaRepository<SaveJobsEntity,Long> {
    List<SaveJobsEntity> findByUserId(Long userId);

//    void deleteByJobId(Long id);
}
