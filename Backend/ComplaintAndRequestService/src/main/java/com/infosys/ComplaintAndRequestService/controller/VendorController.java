package com.infosys.complaintandrequestservice.controller;

import com.infosys.complaintandrequestservice.dto.VendorDto;
import com.infosys.complaintandrequestservice.model.Vendor;
import com.infosys.complaintandrequestservice.service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VendorController {
    @Autowired
    VendorService vendorService;
    @PostMapping("/addVendor")
    public Vendor addVendor(@RequestHeader("Authorization") String jwt, @RequestBody VendorDto vendorDto){
        return vendorService.addVendor(jwt,vendorDto);
    }
    @GetMapping("/getAllVendors")
    public List<Vendor> getAllVendors(){
        return vendorService.getAllVendors();
    }
}
