package com.infosys.authentication.service;

import com.infosys.authentication.config.JwtProvider;
import com.infosys.authentication.dto.AdminDetailsDto;
import com.infosys.authentication.dto.ResidentDetailsDto;
import com.infosys.authentication.exception.RegistrationException;
import com.infosys.authentication.model.AdminDetails;
import com.infosys.authentication.model.ResidentDetails;
import com.infosys.authentication.model.User;
import com.infosys.authentication.repository.AdminDetailsRepository;
import com.infosys.authentication.repository.ResidentDetailsRepository;
import com.infosys.authentication.repository.UserRepository;
import com.infosys.authentication.response.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationServiceImplementation implements RegistrationService{

    @Autowired
    AdminDetailsRepository adminDetailsRepository;

    @Autowired
    ResidentDetailsRepository residentDetailsRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public ApiResponse adminRegistration(AdminDetailsDto adminDetailsDto, String jwt) throws RegistrationException {
        String email= JwtProvider.getEmailFromJwtToken(jwt);
        User user=userRepository.findByEmail(email);
        if (user==null){
            throw new RegistrationException("Invalid Registration");
        }
        AdminDetails newAdmin=new AdminDetails();
        newAdmin.setName(adminDetailsDto.getName());
        newAdmin.setPhoneNo(adminDetailsDto.getPhoneNo());
        newAdmin.setSocietyName(adminDetailsDto.getSocietyName());
        newAdmin.setSocietyAddress(adminDetailsDto.getSocietyAddress());
        newAdmin.setCity(adminDetailsDto.getCity());
        newAdmin.setDistrict(adminDetailsDto.getDistrict());
        newAdmin.setPostal(adminDetailsDto.getPostal());
        newAdmin.setUser(user);
        AdminDetails registerAdmin=adminDetailsRepository.save(newAdmin);
        if (registerAdmin==null){
            throw new RegistrationException("Registration Failed");
        }
        return new ApiResponse("Registation Successful",true);
    }

    @Override
    public ApiResponse residentRegistration(ResidentDetailsDto residentDetailsDto,String jwt) throws RegistrationException {
        String email= JwtProvider.getEmailFromJwtToken(jwt);
        User user=userRepository.findByEmail(email);
        if (user==null){
            throw new RegistrationException("Invalid Registration");
        }
        ResidentDetails newResident=new ResidentDetails();
        newResident.setName(residentDetailsDto.getName());
        newResident.setPhoneNo(residentDetailsDto.getPhoneNo());
        newResident.setSocietyName(residentDetailsDto.getSocietyName());
        newResident.setFlatNo(residentDetailsDto.getFlatNo());
        newResident.setPostal(residentDetailsDto.getPostal());
        newResident.setUser(user);
        ResidentDetails registerResident=residentDetailsRepository.save(newResident);
        if (registerResident==null){
            throw new RegistrationException("Registration Failed");
        }
        return new ApiResponse("Registation Successful",true);
    }
}
