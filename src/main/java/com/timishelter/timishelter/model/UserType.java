package com.timishelter.timishelter.model;

public enum UserType {
    PERSON("PERSON"),
    STATE_INSTITUTION("STATE INSTITUTION"),
    COMPANY("COMPANY"),
    ASSOCIATION("ASSOCIATION");

    private final String stringValue;

    UserType(final String type) { stringValue = type; }

    public String toString() { return stringValue; }
}
