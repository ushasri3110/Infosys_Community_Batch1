package com.infosys.complaintandrequestservice.feign;

import com.infosys.complaintandrequestservice.dto.ResidentDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;


@FeignClient(name = "societymanagementservice")
public interface SocietyManagementInterface {
    @GetMapping("/getResidentByJWT")
    ResidentDto getResidentByJWT(@RequestHeader("Authorization") String jwt);
}


