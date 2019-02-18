package com.ximendes.developer.demo;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Person {


    @Id
    @GeneratedValue
    private Long id;

    private String name;
}
