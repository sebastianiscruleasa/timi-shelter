package com.timishelter.timishelter.controller;

import com.timishelter.timishelter.helpers.OLXJobFinder;
import com.timishelter.timishelter.model.JobOffer;
import com.timishelter.timishelter.repository.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
@RequestMapping(path="/jobs")
public class JobController {

    @Autowired
    private JobsRepository jobsRepository;

    @PostMapping(path="/add")
    public String addJob(
            @RequestParam String username,
            @RequestParam String title,
            @RequestParam String domain,
            @RequestParam String qualification,
            @RequestParam String period,
            @RequestParam String description
    ){
        JobOffer j = new JobOffer();
        j.setUsername(username);
        j.setTitle(title);
        j.setDomain(domain);
        j.setQualification(qualification);
        j.setPeriod(period);
        j.setDescription(description);
        jobsRepository.save(j);
        return "Success";
    }

    @GetMapping(path="/find")
    public @ResponseBody String getJobs() throws IOException, InterruptedException {
        OLXJobFinder finder = new OLXJobFinder();
        finder.getJobs();

        return "done";
    }
}

