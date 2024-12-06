package com.infosys.societymanagementservice.service;

import com.infosys.societymanagementservice.exception.RegistrationException;
import com.infosys.societymanagementservice.model.Flat;

import java.util.List;

public interface FlatService {
    Flat addFlat(Flat flat);
    Flat getFlatByFlatNo(String flatNo) throws RegistrationException;
    List<Flat> getAllFlats();
}
