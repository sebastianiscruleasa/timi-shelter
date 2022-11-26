package com.timishelter.timishelter.helpers;

import org.apache.catalina.connector.Request;
import org.apache.catalina.connector.Response;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class OLXJobFinder {

    public void getJobs() throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://indeed-indeed.p.rapidapi.com/apisearch?" +
                        "useragent=%3CREQUIRED%3E&" +
                        "userip=%3CREQUIRED%3E&" +
                        "chnl=%3CREQUIRED%3E&" +
                        "co=%3CREQUIRED%3E&" +
                        "latlong=%3CREQUIRED%3E&" +
                        "filter=%3CREQUIRED%3E&" +
                        "highlight=%3CREQUIRED%3E&" +
                        "fromage=%3CREQUIRED%3E&" +
                        "limit=%3CREQUIRED%3E&" +
                        "start=%3CREQUIRED%3E&" +
                        "jt=%3CREQUIRED%3E&" +
                        "st=%3CREQUIRED%3E&" +
                        "radius=25&" +
                        "sort=%3CREQUIRED%3E&" +
                        "l=timisoara%2C%20romania&" +
                        "q=java&" +
                        "callback=%3CREQUIRED%3E&" +
                        "format=json&v=2&" +
                        "publisher=undefined"))
                .header("X-RapidAPI-Key", "125d07fb1dmshc985a5e07dcf0f8p13a61djsnbaef83181dc7")
                .header("X-RapidAPI-Host", "indeed-indeed.p.rapidapi.com")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }

    public OLXJobFinder() throws IOException, InterruptedException {
    }

}
