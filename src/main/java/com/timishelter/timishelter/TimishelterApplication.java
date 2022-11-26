package com.timishelter.timishelter;

import com.timishelter.timishelter.helpers.OLXJobFinder;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class TimishelterApplication {

	public static void main(String[] args) {
		SpringApplication.run(TimishelterApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {
			OLXJobFinder finder = new OLXJobFinder();
			finder.getJobs();
		};
	}
}
