package com.infosys.NoticeboardEventsPostService.feign;

import com.infosys.NoticeboardEventsPostService.dto.SocietyDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name="societymanagementservice")
@Component
public interface SocietyManagementInterface {
    @GetMapping("/get-admin")
    public SocietyDto getAdminDetails(@RequestHeader("Authorization") String jwt);
}
