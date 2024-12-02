package com.infosys.societymanagementservice.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Flat {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long flatId;
    private String flatNo;

    @ManyToOne
    @JoinColumn(name = "society_id", nullable = false)
    @JsonBackReference
    private Society society;

    @OneToMany(mappedBy = "flat", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Resident> residents = new ArrayList<>();


}
