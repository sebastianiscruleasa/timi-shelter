package com.timishelter.timishelter.controller;

import com.timishelter.timishelter.helpers.OLXJobFinder;
import com.timishelter.timishelter.model.JobOffer;
import com.timishelter.timishelter.repository.JobsRepository;
import com.timishelter.timishelter.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
@RequestMapping(path="/jobs")
public class JobController {

    @Autowired
    private JobsRepository jobsRepository;

    @Autowired
    private JobService jobService;

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

    @GetMapping("/findJobs")
    @ResponseBody
    public Iterable<JobOffer> getAllJobs() {
        return jobsRepository.findAll();
    }

    @GetMapping("/findSpecificJobs")
    @ResponseBody
    public List<JobOffer> getSpecificJobs(
            @RequestParam(required = false) List<String> keywords
    ) {
        return jobService.getAllJobsForKeywords(keywords);
    }

    @GetMapping(path="/findOlxJobs")
    public @ResponseBody String getOlxJobs() throws IOException, InterruptedException {
        OLXJobFinder finder = new OLXJobFinder();
        finder.getJobs();

        return "done";
    }
}
