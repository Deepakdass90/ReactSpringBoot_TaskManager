package com.deepak.project.taskmanager.Exceptions;

public class TaskProcessingException extends RuntimeException{

    public TaskProcessingException(){
        super();
    }

    public TaskProcessingException(String customMessage){
        super(customMessage);
    }

}
