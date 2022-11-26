package com.timishelter.timishelter.service;

import com.timishelter.timishelter.model.User;
import com.timishelter.timishelter.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    private UserRepository userRepository;

    public LoginService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean login(User user) {
        String username = user.getUsername();
        String password = user.getPassword();
        Optional<User> resultFromDatabase = userRepository.getUserByUsername(username);
        if(resultFromDatabase.isPresent()) {
            User userDatabase = resultFromDatabase.get();
            return userDatabase.getPassword().equals(password);
        }
        return false;
    }
}
