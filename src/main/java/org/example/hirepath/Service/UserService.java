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
    public UserEntity userLogin(UserEntity u){
        UserEntity existing=repo.findByemail(u.getEmail());
        if(existing!=null && u.getPassword().equals(existing.getPassword())){
            return u;
        }
        return null;
    }
}
