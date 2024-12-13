package com.infosys.societymanagementservice.controller;

import com.infosys.societymanagementservice.dto.FlatDto;
import com.infosys.societymanagementservice.exception.RegistrationException;
import com.infosys.societymanagementservice.model.Flat;
import com.infosys.societymanagementservice.service.FlatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FlatController {

    @Autowired
    FlatService flatService;
    @PostMapping("/addFlat")
    public Flat addFlat(@RequestHeader("Authorization") String jwt,@RequestBody FlatDto flatDto){
        Flat flat=new Flat();
        flat.setFlatNo(flatDto.getFlatNo());
        flat.setSocietyId(flatDto.getSocietyId());
        flat.setOccupied(false);
        flat.setRent(flatDto.getRent());
        System.out.println("Flat values"+flat);
        return flatService.addFlat(flat);
    }
    @GetMapping("/getAllFlats")
    public List<Flat> getAllFlats(@RequestHeader("Authorization") String jwt){
        return flatService.getAllFlats();
    }

    @GetMapping("/flatByFlatNo")
    public Flat getFlatByFlatNo(@RequestHeader("Authorization") String jwt,@RequestParam String flatNo) throws RegistrationException {
        return flatService.getFlatByFlatNo(flatNo);
    }
}
