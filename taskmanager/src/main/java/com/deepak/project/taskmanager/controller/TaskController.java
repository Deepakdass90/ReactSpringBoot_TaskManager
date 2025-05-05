package com.deepak.project.taskmanager.controller;

import com.deepak.project.taskmanager.entity.TaskList;
import com.deepak.project.taskmanager.service.TaskManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // React dev server
@RestController("/task")
public class TaskController {

    @Autowired
    TaskManagerService taskManagerService;

    @GetMapping("/getAllTasks")
    public List<TaskList> getAllTasks(){

        return taskManagerService.getAllTaskList();

    }

    @PostMapping("/storeTasks")
    public List<TaskList> storeAllTasks(@RequestBody List<TaskList> taskLists){

        taskManagerService.storeAllTaskList(taskLists);
        return taskManagerService.getAllTaskList();
    }

}
