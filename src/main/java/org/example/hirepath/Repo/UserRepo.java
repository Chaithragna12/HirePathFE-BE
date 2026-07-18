package org.example.hirepath.Repo;

import org.example.hirepath.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserEntity,Long> {
    public UserEntity findByemail(String email);
}
