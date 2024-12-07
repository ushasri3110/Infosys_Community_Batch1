package com.infosys.complaintandrequestservice.service;

import com.infosys.complaintandrequestservice.dto.RequestDto;
import com.infosys.complaintandrequestservice.exception.RequestException;
import com.infosys.complaintandrequestservice.model.Request;
import com.infosys.complaintandrequestservice.model.Vendor;
import com.infosys.complaintandrequestservice.repository.RequestRepository;
import com.infosys.complaintandrequestservice.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.event.EventListener;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RequestServiceImplementation implements RequestService{

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private RequestRepository requestRepository;

    public String sendRequest(RequestDto requestDto) {
        Optional<Vendor> vendorOptional = vendorRepository.findById(requestDto.getVendorId());

        if (vendorOptional.isEmpty()) {
            throw new RequestException("Vendor with ID " + requestDto.getVendorId() + " not found.");
        }

        Vendor vendor = vendorOptional.get();

        Request newRequest = new Request();
        newRequest.setAddress(requestDto.getAddress());
        newRequest.setDescription(requestDto.getDescription());
        newRequest.setStatus("Open");
        newRequest.setVendorId(requestDto.getVendorId());
        Request savedRequest = requestRepository.save(newRequest);

        if (savedRequest.getRequestId() != null) {
            return sendEmail(vendor.getEmail(), createRequestBody(requestDto), vendor.getService());
        } else {
            throw new RequestException("Failed to save the request.");
        }
    }

    private String sendEmail(String toEmail, String body, String subject) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("ponakaushasri@gmail.com");
            message.setTo(toEmail);
            message.setText(body);
            message.setSubject(subject);
            javaMailSender.send(message);
            return "Request sent successfully.";
        } catch (Exception e) {
            throw new RequestException("Failed to send email: " + e.getMessage());
        }
    }

    private String createRequestBody(RequestDto requestDto) {
        return "Request Details:\n" +
                "Address: " + requestDto.getAddress() + "\n" +
                "Description: " + requestDto.getDescription() + "\n" +
                "Phone No: " + requestDto.getPhoneNo();
    }
}
