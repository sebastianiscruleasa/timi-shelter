package com.timishelter.timishelter.repository;

import com.timishelter.timishelter.model.JobOffer;
import org.springframework.data.repository.CrudRepository;

public interface JobsRepository extends CrudRepository<JobOffer,Integer> {
}
