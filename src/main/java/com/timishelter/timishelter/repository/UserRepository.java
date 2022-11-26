package com.timishelter.timishelter.repository;

import com.timishelter.timishelter.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository("user_application")
public interface UserRepository extends CrudRepository<User, Integer> {

    @Query( value = "SELECT COUNT(*) FROM user_application ua WHERE ua.username LIKE %:username%",
            nativeQuery = true)
    int getCountOfSameUsernameUsers(String username);

    @Query( value = "SELECT * FROM user_application ua WHERE ua.username = :username LIMIT 1",
            nativeQuery = true)
    Optional<User> getUserByUsername(String username);
}