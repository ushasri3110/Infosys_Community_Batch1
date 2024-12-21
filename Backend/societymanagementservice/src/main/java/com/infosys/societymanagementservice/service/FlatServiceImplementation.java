package com.infosys.societymanagementservice.service;

import com.infosys.societymanagementservice.exception.RegistrationException;
import com.infosys.societymanagementservice.model.Flat;
import com.infosys.societymanagementservice.repository.FlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlatServiceImplementation implements FlatService{
    @Autowired
    FlatRepository flatRepository;

    @Override
    public Flat addFlat(Flat flat) {
        return flatRepository.save(flat);
    }

    @Override
    public Flat getFlatByFlatNo(String flatNo) throws RegistrationException {
        Flat flat=flatRepository.findByFlatNo(flatNo);
        if (flat!=null){
            return flat;
        }
        throw new RegistrationException("Flat Not Found");
    }

    @Override
    public List<Flat> getAllFlats() {
        return flatRepository.findAll();
    }

    @Override
    public Flat updateFlatRent(Long flatId,Long rent) {
        Flat flat=flatRepository.findById(flatId).get();
        flat.setRent(rent);
        return flatRepository.save(flat);
    }
}
