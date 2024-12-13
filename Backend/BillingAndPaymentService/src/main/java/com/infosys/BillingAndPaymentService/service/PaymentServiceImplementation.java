package com.infosys.BillingAndPaymentService.service;


import com.infosys.BillingAndPaymentService.dto.FlatDto;
import com.infosys.BillingAndPaymentService.dto.ResidentDto;
import com.infosys.BillingAndPaymentService.feign.SocietyManagementInterface;
import com.infosys.BillingAndPaymentService.model.Payment;
import com.infosys.BillingAndPaymentService.repository.PaymentRepository;
import com.infosys.BillingAndPaymentService.response.PaymentLinkResponse;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import jakarta.annotation.PostConstruct;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentServiceImplementation implements PaymentService{

    @Autowired
    SocietyManagementInterface societyManagementInterface;
    @Autowired
    PaymentRepository paymentRepository;

    @Value("${razorpay.key.id}")
    private String razorpayId;
    @Value("${razorpay.key.secret}")
    private String razorpaySecret;

    private RazorpayClient razorpayClient;

    @PostConstruct
    public void init() throws RazorpayException {
        this.razorpayClient=new RazorpayClient(razorpayId,razorpaySecret);
    }

    @Scheduled(cron = "0 08 17 13 * *", zone = "Asia/Kolkata")
    public void billReminder(){
        List<FlatDto> flats=societyManagementInterface.getAllFlats();
        for (FlatDto flat:flats){
            if (flat.isOccupied()){
                Payment newPayment=new Payment();
                newPayment.setFlatNo(flat.getFlatNo());
                newPayment.setSocietyId(flat.getSocietyId());
                newPayment.setAmount(35000L);
                newPayment.setStatus("Pending");
                paymentRepository.save(newPayment);
            }
        }
    }

    public List<Payment> getAllPayments(){
        return paymentRepository.findAll();
    }

    



}
