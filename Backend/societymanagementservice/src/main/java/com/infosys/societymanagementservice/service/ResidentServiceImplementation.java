package com.infosys.societymanagementservice.service;

import com.infosys.societymanagementservice.dto.ResidentDto;
import com.infosys.societymanagementservice.exception.RegistrationException;
import com.infosys.societymanagementservice.feign.AuthenticationInterface;
import com.infosys.societymanagementservice.model.Flat;
import com.infosys.societymanagementservice.model.Resident;
import com.infosys.societymanagementservice.repository.FlatRepository;
import com.infosys.societymanagementservice.repository.ResidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidentServiceImplementation implements ResidentService{
    @Autowired
    ResidentRepository residentRepository;
    @Autowired
    AuthenticationInterface authenticationInterface;
    @Autowired
    FlatService flatService;
    @Override
    public String residentRegistration(ResidentDto residentDto, String jwt) throws RegistrationException {
        Resident newResident=new Resident();
        Flat flat=flatService.getFlatByFlatNo(residentDto.getFlatNo());
        newResident.setName(residentDto.getName());
        newResident.setPhoneNo(residentDto.getPhoneNo());
        newResident.setPostal(residentDto.getPostal());
        newResident.setFlatNo(residentDto.getFlatNo());
        String email=authenticationInterface.getEmailFromJWT(jwt);
        newResident.setEmail(email);
        newResident.setFlat(flat);
        residentRepository.save(newResident);
        return "Registration Successful";
    }

    @Override
    public List<Resident> getResidents() {
        return residentRepository.findAll();
    }

    @Override
    public Resident getResident(String jwt) {
        String email=authenticationInterface.getEmailFromJWT(jwt);
        return residentRepository.findByEmail(email);
    }
}
