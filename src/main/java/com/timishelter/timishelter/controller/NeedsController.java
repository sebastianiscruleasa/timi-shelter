package com.timishelter.timishelter.controller;

import com.timishelter.timishelter.model.Need;
import com.timishelter.timishelter.model.SpecialNeed;
import com.timishelter.timishelter.repository.NeedRepository;
import com.timishelter.timishelter.repository.SpecialNeedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/needs")
public class NeedsController {

    @Autowired
    private NeedRepository needRepository;
    @Autowired
    private SpecialNeedRepository specialNeedRepository;

    @GetMapping("/regular")
    public @ResponseBody
    Iterable<Need> getNeeds(
            @RequestParam String username
    ){
        return needRepository.findAllByUsername(username);
    }

    @GetMapping("/special")
    public @ResponseBody Iterable<SpecialNeed> getSpecialNeeds(
            @RequestParam String username
    ){
        return specialNeedRepository.findAllByUsername(username);
    }

    @PostMapping("addNormal")
    public String addNeeds(
            @RequestParam String username,
            @RequestParam int[] needs
    ){
        for (int need:
             needs) {
            Need newNeed = new Need();
            newNeed.setUsername(username);
            newNeed.setNeed(need);
            needRepository.save(newNeed);
        }
        return "Success";
    }

    @PostMapping("addSpecial")
    public String addSpecialNeed(
            @RequestParam String username,
            @RequestParam String description
    ){
        SpecialNeed specialNeed = new SpecialNeed();
        specialNeed.setUsername(username);
        specialNeed.setDescription(description);
        specialNeedRepository.save(specialNeed);
        return "Success";
    }
}
