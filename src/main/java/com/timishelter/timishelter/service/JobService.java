package com.timishelter.timishelter.service;

import com.timishelter.timishelter.model.JobOffer;
import com.timishelter.timishelter.repository.JobsRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class JobService {

    private JobsRepository jobsRepository;

    public JobService(JobsRepository jobsRepository) {
        this.jobsRepository = jobsRepository;
    }

    public List<JobOffer> getAllJobsForKeywords(List<String> keywords) {
        List<JobOffer> matchingJobs = new ArrayList<>();
        Iterable<JobOffer> availableJobs = jobsRepository.findAll();
        Iterator iterator = availableJobs.iterator();
        while(iterator.hasNext()) {
            JobOffer jobOffer = (JobOffer) iterator.next();
            if(!matchingJobs.contains(jobOffer)) {
                for (String keyword : keywords) {
                    if (jobOffer.getDescription().contains(keyword)) {
                        matchingJobs.add(jobOffer);
                    }
                }
            }
        }
        return matchingJobs;
    }

}
