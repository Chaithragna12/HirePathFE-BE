package org.example.hirepath.Service;

import org.example.hirepath.Entity.UserEntity;
import org.example.hirepath.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserService {
    @Autowired
    private UserRepo repo;
    public UserEntity userSignUp(UserEntity u){
        UserEntity existing=repo.findByemail(u.getEmail()); //storing email
        if(existing==null){
            u.setCreatedAt(LocalDateTime.now());
            return repo.save(u);

        }
        return null;
    }
    public UserEntity userLogin(UserEntity u) {

//        System.out.println("Email: " + u.getEmail());

        UserEntity existing = repo.findByemail(u.getEmail());

//        System.out.println("Found User: " + existing);

        if (existing != null) {
            System.out.println("Password Match: " +
                    u.getPassword().equals(existing.getPassword()));

            if (u.getPassword().equals(existing.getPassword())) {
                return existing;
            }
        }

        return null;
    }
}
