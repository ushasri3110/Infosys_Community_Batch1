package com.infosys.societymanagementservice.repository;

import com.infosys.societymanagementservice.model.Flat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FlatRepository extends JpaRepository<Flat,Long> {
    Flat findByFlatNo(String flatNo);
}
