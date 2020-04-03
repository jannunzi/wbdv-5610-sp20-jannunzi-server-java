package com.example.wbdvsp20jannunziserverjava.controllers;

import com.example.wbdvsp20jannunziserverjava.models.User;
import com.example.wbdvsp20jannunziserverjava.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class UserController {
    @Autowired
    UserRepository repository;

    @PostMapping("/logout")
    public void logout(HttpSession session) {
        session.invalidate();
    }

    @PostMapping("/login")
    public User login(HttpSession session,
                      @RequestBody User user) {
        User profile = repository.findUserByCredentials(user.getUsername(), user.getPassword());
        session.setAttribute("profile", profile);
        return profile;
    }

    @PostMapping("/register")
    public User register(HttpSession session,
                         @RequestBody User user) {
        User newUser = repository.save(user);
        newUser.setPassword("***");
        session.setAttribute("profile", newUser);
        return newUser;
    }

    @PostMapping("/profile")
    public User profile(HttpSession session) {
        User profile = (User)session.getAttribute("profile");
        return profile;
    }
}
