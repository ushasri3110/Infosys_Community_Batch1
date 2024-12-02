package com.infosys.societymanagementservice.controller;

import com.infosys.societymanagementservice.dto.AdminDto;
import com.infosys.societymanagementservice.dto.ResidentDto;
import com.infosys.societymanagementservice.exception.RegistrationException;
import com.infosys.societymanagementservice.model.Society;
import com.infosys.societymanagementservice.service.SocietyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SocietyController {

    @Autowired
    SocietyService societyService;
    @PostMapping("/society-register")
    public String residentRegistration(@RequestHeader("Authorization") String jwt, @RequestBody AdminDto adminDto) throws RegistrationException {
        System.out.println("Received JWT: " + jwt);
        System.out.println("Admin Details DTO: " + adminDto);
        return societyService.societyRegistration(adminDto,jwt);

    }

    @GetMapping("/societies")
    public List<Society> getAllSocieties(){
        return societyService.getAllSocieties();
    }
}
