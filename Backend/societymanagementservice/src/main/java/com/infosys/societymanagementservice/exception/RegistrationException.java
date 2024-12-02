package com.infosys.societymanagementservice.exception;

public class RegistrationException extends Exception{

    RegistrationException(String message){
        super("Registration Failed");
    }
}
