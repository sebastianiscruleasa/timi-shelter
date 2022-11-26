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
            @RequestParam(required = true) String firstName,
            @RequestParam(required = true) String lastName,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String phoneNumber,
            @RequestParam(required = false) String age,
            @RequestParam(required = false) String address,
            @RequestParam(required = false) String identificationNumber,
            @RequestParam(required = true) String userType,
            @RequestParam(required = false) boolean isGoodCitizen
    ) {
        //on user profile creation, return fresh credentials for login
        User user = userService.createUser(firstName, lastName);

        UserProfile userProfile = userService.createUserProfile(user.getUsername(), firstName, lastName, email, phoneNumber, age, address, identificationNumber, userType, isGoodCitizen);
        userProfileRepository.save(userProfile);
        user.setUserType(userProfile.getType());

        return user;
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<UserProfile> getAllUserProfiles() {
        return userProfileRepository.findAll();
    }

}