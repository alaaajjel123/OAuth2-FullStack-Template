package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public User getUserProfile(@RequestHeader("Authorization") String token) {
        return userService.getUserProfile(token);
    }

    @PutMapping("/update-username")
    public User updateUsername(@RequestHeader("Authorization") String token, @RequestParam String newUsername) {
        return userService.updateUsername(token, newUsername);
    }
}
