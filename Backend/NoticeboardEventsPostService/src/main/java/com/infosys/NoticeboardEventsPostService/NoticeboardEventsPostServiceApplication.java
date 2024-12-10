package com.infosys.NoticeboardEventsPostService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class NoticeboardEventsPostServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(NoticeboardEventsPostServiceApplication.class, args);
		System.out.println("Application is running");
	}

}
