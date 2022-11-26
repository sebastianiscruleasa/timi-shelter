package com.timishelter.timishelter.controller;

import com.timishelter.timishelter.model.Achievement;
import com.timishelter.timishelter.repository.AchievementsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/achievements")
public class AchievementController {

    @Autowired
    private AchievementsRepository achievementsRepository;

    @GetMapping("/get")
    @ResponseBody
    public Achievement getAchievements(
            @RequestParam String username
    ){
        return achievementsRepository.findByUsername(username);
    }

    @PostMapping(path="/add")
    @ResponseBody
    public String addAchievement(
            @RequestParam String username,
            @RequestParam String name,
            @RequestParam String date,
            @RequestParam String category,
            @RequestParam String status
    ){
        Achievement a = new Achievement();
        a.setUsername(username);
        a.setName(name);
        a.setDate(date);
        a.setCategory(category);
        a.setStatus(status);
        achievementsRepository.save(a);
        return "Success";
    }
}
