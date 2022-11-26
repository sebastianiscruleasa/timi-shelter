package com.timishelter.timishelter.controller;

import com.timishelter.timishelter.model.Shelter;
import com.timishelter.timishelter.repository.ShelterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/shelters")
public class ShelterController {

    @Autowired
    private ShelterRepository shelterRepository;

    @PostMapping("/add")
    public String addShelter(
            @RequestParam String username,
            @RequestParam String type,
            @RequestParam Integer capacity,
            @RequestParam String description
                             ){
        Shelter s = new Shelter();
        s.setUsername(username);
        s.setType(type);
        s.setCapacity(capacity);
        s.setDescription(description);
        shelterRepository.save(s);
        return "Success";
    }

    @GetMapping("/all")
    public Iterable<Shelter> getAllShelters(){
        return shelterRepository.findAll();
    }
}
