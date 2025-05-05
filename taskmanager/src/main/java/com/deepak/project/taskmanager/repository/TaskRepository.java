package com.deepak.project.taskmanager.repository;

import com.deepak.project.taskmanager.entity.TaskList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<TaskList , Long> {
}
