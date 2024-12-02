package com.infosys.societymanagementservice.controller;

import com.infosys.societymanagementservice.dto.ResidentDto;
import com.infosys.societymanagementservice.exception.RegistrationException;
import com.infosys.societymanagementservice.model.Resident;
import com.infosys.societymanagementservice.service.ResidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ResidentController {
    @Autowired
    ResidentService residentService;
    @PostMapping("/resident-register")
    public String residentRegistration(@RequestHeader("Authorization") String jwt, @RequestBody ResidentDto residentDto) throws RegistrationException {
        System.out.println("Received JWT: " + jwt);
        System.out.println("Admin Details DTO: " + residentDto);
        return residentService.residentRegistration(residentDto,jwt);

    }

    @GetMapping("/residents")
    public List<Resident> getResidents(){
        return residentService.getResidents();
    }

    @GetMapping("/getResident")
    public Resident getResident(@RequestHeader("Authorization") String jwt){
        return residentService.getResident(jwt);
    }
}
