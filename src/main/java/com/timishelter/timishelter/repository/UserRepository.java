package com.timishelter.timishelter.repository;

import com.timishelter.timishelter.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

}