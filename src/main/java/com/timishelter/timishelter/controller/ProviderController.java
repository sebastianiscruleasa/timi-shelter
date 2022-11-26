package com.timishelter.timishelter.controller;

import com.timishelter.timishelter.model.Provider;
import com.timishelter.timishelter.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/shelters")
public class ProviderController {

    @Autowired
    private ProviderRepository providerRepository;

    @PostMapping("/add")
    public String addShelter(
            @RequestParam String username,
            @RequestParam String type,
            @RequestParam Integer capacity,
            @RequestParam String description
                             ){
        Provider s = new Provider();
        s.setUsername(username);
        s.setType(type);
        s.setCapacity(capacity);
        s.setDescription(description);
        providerRepository.save(s);
        return "Success";
    }

    @GetMapping(path="/find")
    @ResponseBody
    public Iterable<Provider> getProviderByType(
            @RequestParam String type
    ){
        return providerRepository.findAllByType(type);
    }

    @GetMapping("/all")
    public @ResponseBody
    Iterable<Provider> getAllShelters(){
        return providerRepository.findAll();
    }
}
