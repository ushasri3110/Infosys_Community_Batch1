package com.infosys.societymanagementservice.service;

import com.infosys.societymanagementservice.config.JwtProvider;
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
import java.util.regex.Pattern;

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
    @Autowired
    FlatRepository flatRepository;
    @Override
    public String residentRegistration(ResidentDto residentDto, String jwt) throws RegistrationException {
        Flat flat=flatService.getFlatByFlatNo(residentDto.getFlatNo());
        String email=authenticationInterface.getEmailFromJWT(jwt);
        Society society=societyService.getSocietyByName(residentDto.getSocietyName());
        Resident newResident=new Resident();
        newResident.setName(residentDto.getName());
        String number=residentDto.getPhoneNo();
        String regex = "^(\\+\\d{1,3}[- ]?)?\\d{10}$";
        Pattern pattern = Pattern.compile(regex);
        if (!pattern.matcher(number).matches()){
            throw new RegistrationException("Phone Number is Invalid");
        }
        newResident.setPhoneNo(residentDto.getPhoneNo());
        newResident.setFlatNo(residentDto.getFlatNo());
        if (!society.getPostal().equals(residentDto.getPostal())){
            throw new RegistrationException("Postal is Invalid");
        }
        newResident.setPostal(residentDto.getPostal());
        newResident.setEmail(email);
        newResident.setSocietyId(society.getSocietyId());
        newResident.setFlatId(flat.getFlatId());
        newResident.setRole("Resident");
        Resident savedResident=residentRepository.save(newResident);
        flat.setOccupied(true);
        flatRepository.save(flat);
        if (savedResident.getResidentId()==null){
            throw new RegistrationException("Unable to Register");
        }
        return "Registration Successful";
    }

    @Override
    public List<Resident> getResidents() {
        return residentRepository.findAll();
    }

    @Override
    public Resident getResident(String jwt) {
        String email= JwtProvider.getEmailFromJwtToken(jwt);
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
