package com.infosys.societymanagementservice.service;

import com.infosys.societymanagementservice.model.Flat;
import com.infosys.societymanagementservice.repository.FlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FlatServiceImplementation implements FlatService{
    @Autowired
    FlatRepository flatRepository;

    @Override
    public Flat addFlat(Flat flat) {
        return flatRepository.save(flat);
    }
    

    @Override
    public Flat getFlatByFlatNo(String flatNo) {
        return flatRepository.findByFlatNo(flatNo);
    }
}
