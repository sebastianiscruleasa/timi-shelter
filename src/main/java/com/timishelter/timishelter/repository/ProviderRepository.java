package com.timishelter.timishelter.repository;

import com.timishelter.timishelter.model.Provider;
import org.springframework.data.repository.CrudRepository;

public interface ProviderRepository extends CrudRepository<Provider,Long> {
    Iterable<Provider> findAllByType(String type);
}
