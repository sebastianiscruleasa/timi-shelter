package com.timishelter.timishelter.model;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import javax.annotation.processing.Generated;

@Entity
@Table(name="needs")
public class Need {

    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO,
            generator = "native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private int id;
    private String username;
    private int need;

    public void setUsername(String username) {
        this.username = username;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public int getNeed() {
        return need;
    }

    public void setNeed(int need) {
        this.need = need;
    }
}
