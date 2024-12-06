package com.infosys.complaintandrequestservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class ComplaintandrequestserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComplaintandrequestserviceApplication.class, args);
		System.out.println("Application is running");
	}

}
