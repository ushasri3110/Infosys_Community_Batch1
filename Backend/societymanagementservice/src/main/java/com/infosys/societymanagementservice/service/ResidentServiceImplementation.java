package com.infosys.societymanagementservice.service;

import com.infosys.societymanagementservice.dto.ResidentDto;
import com.infosys.societymanagementservice.dto.ResidentProfileDto;
import com.infosys.societymanagementservice.exception.RegistrationException;
import com.infosys.societymanagementservice.feign.AuthenticationInterface;
import com.infosys.societymanagementservice.model.Flat;
import com.infosys.societymanagementservice.model.Resident;
import com.infosys.societymanagementservice.model.Society;
import com.infosys.societymanagementservice.repository.FlatRepository;
import com.infosys.societymanagementservice.repository.ResidentRepository;
import com.infosys.societymanagementservice.repository.SocietyRepository;
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
    @Autowired
    SocietyService societyService;
    @Autowired
    SocietyRepository societyRepository;
    @Override
    public String residentRegistration(ResidentDto residentDto, String jwt) throws RegistrationException {
        Flat flat=flatService.getFlatByFlatNo(residentDto.getFlatNo());
        String email=authenticationInterface.getEmailFromJWT(jwt);
        Society society=societyService.getSocietyByName(residentDto.getSocietyName());
        Resident newResident=new Resident();
        newResident.setName(residentDto.getName());
        newResident.setPhoneNo(residentDto.getPhoneNo());
        newResident.setFlatNo(residentDto.getFlatNo());
        newResident.setPostal(residentDto.getPostal());
        newResident.setEmail(email);
        newResident.setSocietyId(society.getSocietyId());
        newResident.setFlatId(flat.getFlatId());
        newResident.setRole("Resident");
        System.out.println(newResident);
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

    @Override
    public ResidentProfileDto getResidentProfile(String jwt) {
        Resident resident=getResident(jwt);
        ResidentProfileDto res=new ResidentProfileDto();
        res.setName(resident.getName());
        res.setPhoneNo(resident.getPhoneNo());
        res.setPostal(resident.getPostal());
        res.setFlatNo(resident.getFlatNo());
        Society society=societyService.getSocietyById(resident.getSocietyId());
        res.setSocietyName(society.getSocietyName());
        res.setEmail(resident.getEmail());
        return res;
    }
}
