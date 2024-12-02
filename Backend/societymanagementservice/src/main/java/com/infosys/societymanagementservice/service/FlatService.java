package com.infosys.societymanagementservice.service;

import com.infosys.societymanagementservice.model.Flat;

public interface FlatService {
    Flat addFlat(Flat flat);
    Flat getFlatByFlatNo(String flatNo);
}
