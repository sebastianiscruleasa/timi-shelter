package com.timishelter.timishelter.controller;

import com.timishelter.timishelter.model.Experience;
import com.timishelter.timishelter.repository.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/experience")
public class ExperienceController {

    @Autowired
    private ExperienceRepository experienceRepository;

    @PostMapping("/add")
    @ResponseBody
    public String addExperience(
            @RequestParam String username,
            @RequestParam String description
    ){
        Experience e= new Experience();
        e.setUsername(username);
        e.setDescription(description);
        experienceRepository.save(e);
        return "Saved";
    }

    @GetMapping("/get")
    @ResponseBody
    public Optional<Experience> getExperience(
            @RequestParam String username
    ){
        return experienceRepository.findById(username);
    }

}
