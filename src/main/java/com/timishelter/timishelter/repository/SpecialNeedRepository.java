package com.timishelter.timishelter.repository;

import com.timishelter.timishelter.model.SpecialNeed;
import org.springframework.data.repository.CrudRepository;

public interface SpecialNeedRepository extends CrudRepository<SpecialNeed,String> {
    Iterable<SpecialNeed> findAllByUsername(String username);
}
