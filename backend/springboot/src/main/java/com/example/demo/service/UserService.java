package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public User getUserProfile(String token) {
        String email = jwtUtil.extractClaims(token).getSubject();
        return userRepository.findByEmail(email).orElse(null);
    }

    public User updateUsername(String token, String newUsername) {
        String email = jwtUtil.extractClaims(token).getSubject();
        User user = userRepository.findByEmail(email).orElse(null);
        if (user != null && !user.getUsername().equals(newUsername)) {
            user.setUsername(newUsername);
            userRepository.save(user);
            return user;
        }
        return null; // Username not changed
    }
}

