package com.deepak.project.taskmanager.service;

import com.deepak.project.taskmanager.entity.TaskList;
import com.deepak.project.taskmanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskManagerServiceImpl implements TaskManagerService{

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<TaskList> getAllTaskList() {

        return taskRepository.findAll();
    }

    @Override
    public void storeAllTaskList(List<TaskList> taskLists) {
        ArrayList<TaskList> taskListArray= setTaskList(taskLists);
        taskRepository.saveAll(taskListArray);
    }

    public ArrayList<TaskList> setTaskList(List<TaskList> taskList){
        ArrayList<TaskList> taskListArray = new ArrayList<>();
        for (TaskList taskItem: taskList ) {
            TaskList task = new TaskList();
            task.setId(null);
            task.setTaskName(taskItem.getTaskName());
            task.setCreatedOn(taskItem.getCreatedOn());
            taskListArray.add(task);
        }
        return taskListArray;

    }
}
