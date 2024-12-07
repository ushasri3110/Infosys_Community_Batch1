package com.infosys.complaintandrequestservice.service;

import com.infosys.complaintandrequestservice.dto.SocietyDto;
import com.infosys.complaintandrequestservice.dto.VendorDto;
import com.infosys.complaintandrequestservice.exception.VendorException;
import com.infosys.complaintandrequestservice.feign.SocietyManagementInterface;
import com.infosys.complaintandrequestservice.model.Vendor;
import com.infosys.complaintandrequestservice.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendorServiceImplementation implements VendorService{
    @Autowired
    VendorRepository vendorRepository;
    @Autowired
    SocietyManagementInterface societyManagementInterface;
    @Override
    public Vendor addVendor(String jwt,VendorDto vendorDto) {
        SocietyDto society=societyManagementInterface.getAdminDetails(jwt);
        Vendor newVendor=new Vendor();
        newVendor.setName(vendorDto.getName());
        newVendor.setCompany(vendorDto.getCompany());
        newVendor.setService(vendorDto.getService());
        newVendor.setPhoneNo(vendorDto.getPhoneNo());
        newVendor.setEmail(vendorDto.getEmail());
        newVendor.setSocietyId(society.getSocietyId());
        Vendor savedVendor=vendorRepository.save(newVendor);
        if (savedVendor.getVendorId()!=null){
            return savedVendor;
        }
        throw new VendorException("unable to add vendor");
    }

    @Override
    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }
}
