package com.timishelter.timishelter.controller;

import com.timishelter.timishelter.model.User;
import com.timishelter.timishelter.model.UserProfile;
import com.timishelter.timishelter.repository.UserProfileRepository;
import com.timishelter.timishelter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
            @RequestBody(required = true) UserProfile userProfileData
    ) {
        //on user profile creation, return fresh credentials for login
        User user = userService.createUser(userProfileData.getFirstName(), userProfileData.getLastName());

        UserProfile userProfile = userService.createUserProfile(
                user.getUsername(),
                userProfileData.getFirstName(),
                userProfileData.getLastName(),
                userProfileData.getEmail(),
                userProfileData.getPhoneNumber(),
                userProfileData.getAge(),
                userProfileData.getAddress(),
                userProfileData.getIdentification_number(),
                userProfileData.getType(),
                userProfileData.isGoodCitizen()
        );
        userProfileRepository.save(userProfile);
        user.setUserType(userProfile.getType());

        return user;
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<UserProfile> getAllUserProfiles() {
        return userProfileRepository.findAll();
    }

}