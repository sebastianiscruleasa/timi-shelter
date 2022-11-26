package com.timishelter.timishelter.controller;

import com.timishelter.timishelter.model.UserProfile;
import com.timishelter.timishelter.repository.UserProfileRepository;
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

    @PostMapping(path="/createUserProfile")
    @ResponseBody //returned String is the response, not a view name
    public String addUserProfile (
            @RequestParam String username,
            @RequestParam String firstName,
            @RequestParam String email
    ) {
        UserProfile userProfile = new UserProfile();
        userProfile.setUsername(username);
        userProfile.setFirstName(firstName);
        userProfile.setEmail(email);
        userProfileRepository.save(userProfile);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<UserProfile> getAllUserProfiles() {
        return userProfileRepository.findAll();
    }
}