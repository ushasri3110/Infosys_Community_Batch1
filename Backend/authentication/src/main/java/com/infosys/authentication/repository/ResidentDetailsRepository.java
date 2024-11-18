package com.infosys.authentication.repository;

import com.infosys.authentication.model.ResidentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResidentDetailsRepository extends JpaRepository<ResidentDetails,Long> {
}
