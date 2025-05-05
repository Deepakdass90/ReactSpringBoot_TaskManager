package com.deepak.project.taskmanager.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DefaultController {
    @GetMapping("/firstControl")
    String firstControl(){
        return "FirstString";
    }

}
