package com.timishelter.timishelter.repository;

import com.timishelter.timishelter.model.Achievement;
import org.springframework.data.repository.CrudRepository;

public interface AchievementsRepository extends CrudRepository<Achievement,String> {
    Achievement findByUsername(String username);
}
