package com.infosys.societymanagementservice.controller;

import com.infosys.societymanagementservice.model.Flat;
import com.infosys.societymanagementservice.service.FlatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FlatController {

    @Autowired
    FlatService flatService;
    @PostMapping("/addFlat")
    public Flat addFlat(@RequestBody Flat flat){
        System.out.println("Flat values"+flat);
        return flatService.addFlat(flat);
    }
}
