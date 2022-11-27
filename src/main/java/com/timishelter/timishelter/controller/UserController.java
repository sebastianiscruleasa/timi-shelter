package com.timishelter.timishelter.controller;

import com.timishelter.timishelter.model.User;
import com.timishelter.timishelter.repository.UserRepository;
import com.timishelter.timishelter.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LoginService loginService;

    @PostMapping(path="/newUser")
    @ResponseBody //returned String is the response, not a view name
    @Transactional
    public ResponseEntity<String> create (
            @RequestParam String username,
            @RequestParam String password
    ) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        userRepository.save(user);
        return new ResponseEntity<String>("Hello World", HttpStatus.CREATED);
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping(path="/login")
    @ResponseBody
    public boolean login(
            @RequestBody(required = true) User user
    ) {
        return loginService.login(user);
    }
}