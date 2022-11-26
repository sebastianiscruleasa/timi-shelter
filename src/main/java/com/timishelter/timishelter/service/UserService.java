package com.timishelter.timishelter.service;

import com.timishelter.timishelter.model.User;
import com.timishelter.timishelter.model.UserProfile;
import com.timishelter.timishelter.model.UserType;
import com.timishelter.timishelter.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository =  userRepository;
    }

    public UserProfile createUserProfile(
            String username,
            String firstName,
            String lastName,
            String email,
            String phoneNumber,
            String age,
            String address,
            String identificationNumber,
            String userType
    ) {
        UserProfile userProfile = new UserProfile();
        userProfile.setUsername(username);
        userProfile.setFirstName(firstName);
        userProfile.setLastName(lastName);
        userProfile.setEmail(email);
        userProfile.setPhoneNumber(phoneNumber);
        userProfile.setAge(age);
        userProfile.setAddress(address);
        userProfile.setIdentification_number(identificationNumber);
        userProfile.setType(UserType.valueOf(userType.toUpperCase(Locale.ROOT)));
        return userProfile;
    }

    public User createUser(String firstName, String lastName) {
        String username = firstName + lastName;
        username = username.trim().toLowerCase(Locale.ROOT).replaceAll("\\s+", "");
        String password = username;

        int existingUsersInDatabase = 0;
        try {
            existingUsersInDatabase = userRepository.getCountOfSameUsernameUsers(username);
        } catch (Exception e) {
            e.printStackTrace();
        }
        username = username + (existingUsersInDatabase + 1);

        User user = new User(username, password);
        userRepository.save(user);
        return user;
    }
}
