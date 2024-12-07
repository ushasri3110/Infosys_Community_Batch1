package com.infosys.complaintandrequestservice.controller;

import com.infosys.complaintandrequestservice.dto.RequestDto;
import com.infosys.complaintandrequestservice.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RequestController {

    @Autowired
    RequestService requestService;
    @PostMapping("/sendRequest")
    public String sendRequest(@RequestBody RequestDto requestDto){
        return requestService.sendRequest(requestDto);
    }
}
