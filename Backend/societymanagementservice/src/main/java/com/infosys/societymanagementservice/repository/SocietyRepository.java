package com.infosys.societymanagementservice.repository;

import com.infosys.societymanagementservice.model.Society;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SocietyRepository extends JpaRepository<Society,Long> {
    Society findByEmail(String email);
}
