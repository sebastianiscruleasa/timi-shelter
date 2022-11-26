package com.timishelter.timishelter.controller;

import com.timishelter.timishelter.model.Achievement;
import com.timishelter.timishelter.repository.AchievementsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/achievements")
public class AchievementController {

    @Autowired
    private AchievementsRepository achievementsRepository;

    @GetMapping("/get")
    public Achievement getAchievements(
            @RequestParam String username
    ){
        return achievementsRepository.findByUsername(username);
    }

    @PostMapping("/add")
    public String addAchievement(
            @RequestParam String username,
            @RequestParam String description
    ){
        Achievement a = new Achievement();
        a.setUsername(username);
        a.setDescription(description);
        achievementsRepository.save(a);
        return "Success";
    }
}
