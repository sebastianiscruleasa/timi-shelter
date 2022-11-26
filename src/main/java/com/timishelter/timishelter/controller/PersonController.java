package com.timishelter.timishelter.controller;

import com.timishelter.timishelter.model.Person;
import com.timishelter.timishelter.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/person")
public class PersonController {
    @Autowired
    private PersonRepository personRepository;

    @PostMapping(path="/add")
    @ResponseBody //returned String is the response, not a view name
    @Transactional
    public String addNewPerson (
            @RequestParam String firstName,
            @RequestParam String email
    ) {
        Person person = new Person();
        person.setFirstName(firstName);
        person.setEmail(email);
        personRepository.save(person);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Person> getAllPersons() {
        return personRepository.findAll();
    }
}