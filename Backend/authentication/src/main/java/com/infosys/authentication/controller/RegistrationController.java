package com.infosys.authentication.controller;

import com.infosys.authentication.dto.AdminDetailsDto;
import com.infosys.authentication.dto.ResidentDetailsDto;
import com.infosys.authentication.exception.RegistrationException;
import com.infosys.authentication.response.ApiResponse;
import com.infosys.authentication.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegistrationController {

    @Autowired
    RegistrationService registrationService;

    @PostMapping("/api/admin-register")
    public ApiResponse adminRegistration(@RequestHeader("Authorization") String jwt, @RequestBody AdminDetailsDto adminDetailsDto) throws RegistrationException {
        return registrationService.adminRegistration(adminDetailsDto,jwt);
    }

    @PostMapping("/resident-register")
    public ApiResponse residentRegistration(@RequestHeader("Authorization") String jwt, @RequestBody ResidentDetailsDto residentDetailsDto) throws RegistrationException {
        System.out.println("Received JWT: " + jwt);
        System.out.println("Admin Details DTO: " + residentDetailsDto);

        return registrationService.residentRegistration(residentDetailsDto,jwt);

    }
}
