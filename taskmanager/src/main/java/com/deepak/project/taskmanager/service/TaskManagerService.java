package com.deepak.project.taskmanager.service;


import com.deepak.project.taskmanager.entity.TaskList;

import java.util.List;

public interface TaskManagerService {

    public List<TaskList> getAllTaskList();
    public void storeAllTaskList(List<TaskList> taskLists);

}
