package com.timishelter.timishelter.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "experience")
public class Experience {

    @Id
    private String username;
    private String description;

    public void setUsername(String id) {
        this.username = id;
    }

    @jakarta.persistence.Id
    public String getUsername() {
        return username;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
