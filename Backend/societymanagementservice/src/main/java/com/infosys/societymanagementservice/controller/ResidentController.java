package com.infosys.societymanagementservice.controller;

import com.infosys.societymanagementservice.dto.ResidentDto;
import com.infosys.societymanagementservice.dto.ResidentProfileDto;
import com.infosys.societymanagementservice.exception.RegistrationException;
import com.infosys.societymanagementservice.model.Flat;
import com.infosys.societymanagementservice.model.Resident;
import com.infosys.societymanagementservice.model.Society;
import com.infosys.societymanagementservice.service.FlatService;
import com.infosys.societymanagementservice.service.ResidentService;
import com.infosys.societymanagementservice.service.SocietyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ResidentController {
    @Autowired
    ResidentService residentService;
    @Autowired
    FlatService flatService;
    @Autowired
    SocietyService societyService;
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

    @GetMapping("/getResidentProfile")
    public ResidentProfileDto getResidentProfile(@RequestHeader("Authorization") String jwt){
        return residentService.getResidentProfile(jwt);
    }
}
