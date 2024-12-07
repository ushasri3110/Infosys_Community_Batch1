package com.infosys.complaintandrequestservice.service;

import com.infosys.complaintandrequestservice.dto.VendorDto;
import com.infosys.complaintandrequestservice.model.Vendor;

import java.util.List;

public interface VendorService {
    public Vendor addVendor(String jwt,VendorDto vendorDto);
    public List<Vendor> getAllVendors();
}
