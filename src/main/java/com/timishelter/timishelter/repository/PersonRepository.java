package com.timishelter.timishelter.repository;

import com.timishelter.timishelter.model.Person;
import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<Person, Integer> {

}