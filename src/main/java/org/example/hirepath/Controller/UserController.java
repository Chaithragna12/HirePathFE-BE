package org.example.hirepath.Controller;

import org.example.hirepath.Entity.UserEntity;
import org.example.hirepath.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService ser;
    @PostMapping("/signup")
    public UserEntity signup(@RequestBody UserEntity u){

        return ser.userSignUp(u);
    }
    @PostMapping("/login")
    public UserEntity login(@RequestBody UserEntity u){

        return ser.userLogin(u);
    }
}
