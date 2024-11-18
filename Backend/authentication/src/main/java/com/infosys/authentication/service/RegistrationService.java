package com.infosys.authentication.service;

import com.infosys.authentication.dto.AdminDetailsDto;
import com.infosys.authentication.dto.ResidentDetailsDto;
import com.infosys.authentication.exception.RegistrationException;
import com.infosys.authentication.response.ApiResponse;

public interface RegistrationService {

    public ApiResponse adminRegistration(AdminDetailsDto adminDetailsDto,String jwt) throws RegistrationException;
    public ApiResponse residentRegistration(ResidentDetailsDto residentDetailsDto, String jwt) throws RegistrationException;
}
