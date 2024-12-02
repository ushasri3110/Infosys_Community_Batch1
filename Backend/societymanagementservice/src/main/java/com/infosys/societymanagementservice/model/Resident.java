package com.infosys.societymanagementservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Resident {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long residentId;
    private String name;
    private String phoneNo;
    private String postal;
    private String email;
    private String role;
    private String flatNo;

    @ManyToOne
    @JoinColumn(name = "flat_id", nullable = false)
    private Flat flat;
}
