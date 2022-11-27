package com.timishelter.timishelter.repository;

import com.timishelter.timishelter.model.UserProfile;
import org.springframework.data.repository.CrudRepository;

public interface UserProfileRepository extends CrudRepository<UserProfile, Integer> {

}