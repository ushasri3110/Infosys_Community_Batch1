package com.infosys.complaintandrequestservice.controller;

import com.infosys.complaintandrequestservice.dto.ComplaintDto;
import com.infosys.complaintandrequestservice.model.Complaint;
import com.infosys.complaintandrequestservice.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ComplaintController {
    @Autowired
    ComplaintService complaintService;
    @PostMapping("/addComplaint")
    public Complaint addComplaint(@RequestHeader ("Authorization") String jwt, @RequestBody ComplaintDto complaintDto){
        return complaintService.addComplaint(jwt,complaintDto);
    }

    @GetMapping("/getAllComplaints")
    public List<Complaint> getAllComplaints(){
        return complaintService.getAllComplaints();
    }

    @PutMapping("/closeComplaint/{id}")
    public Complaint closeComplaint(@PathVariable Long id){
        return complaintService.closeComplaint(id);
    }
}
