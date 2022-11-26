package com.timishelter.timishelter.controller;

import com.timishelter.timishelter.model.User;
import com.timishelter.timishelter.model.UserProfile;
import com.timishelter.timishelter.repository.UserProfileRepository;
import com.timishelter.timishelter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/userProfile")
public class UserProfileController {

    @Autowired
    private UserProfileRepository userProfileRepository;
    @Autowired
    private UserService userService;

    @PostMapping(path="/createUserProfile")
    @ResponseBody
    public User createUserProfile (
            @RequestParam String firstName,
            @RequestParam String lastName,
            @RequestParam String email,
            @RequestParam String phoneNumber,
            @RequestParam String age,
            @RequestParam String address,
            @RequestParam String identificationNumber,
            @RequestParam String userType
    ) {
        //on user profile creation, return fresh credentials for login
        User user = userService.createUser(firstName, lastName);

        UserProfile userProfile = userService.createUserProfile(user.getUsername(), firstName, lastName, email, phoneNumber, age, address, identificationNumber, userType);
        userProfileRepository.save(userProfile);
        user.setUserType(userProfile.getType());

        return user;
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<UserProfile> getAllUserProfiles() {
        return userProfileRepository.findAll();
    }

}