package com.ximendes.developer.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersonController {

    private PersonRepository  repository;

    public PersonController(PersonRepository personRepository) {
        this.repository = personRepository;
    }

    @GetMapping("/all")
    public Collection<Person> coolCars() {
        return repository.findAll();

    }
}
