package com.infosys.complaintandrequestservice.service;

import com.infosys.complaintandrequestservice.dto.RequestDto;

public interface RequestService {
    public String sendRequest(RequestDto requestDto);
}
