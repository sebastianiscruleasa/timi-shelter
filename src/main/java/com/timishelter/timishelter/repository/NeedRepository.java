package com.timishelter.timishelter.repository;

import com.timishelter.timishelter.model.Need;
import org.springframework.data.repository.CrudRepository;

public interface NeedRepository extends CrudRepository<Need,String> {
    Iterable<Need> findAllByUsername(String username);
}
