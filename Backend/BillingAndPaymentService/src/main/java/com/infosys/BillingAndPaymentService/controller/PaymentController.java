package com.infosys.BillingAndPaymentService.controller;


import com.infosys.BillingAndPaymentService.model.Payment;
import com.infosys.BillingAndPaymentService.service.PaymentService;
import com.razorpay.RazorpayException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PaymentController {

    @Autowired
    PaymentService paymentService;

    @GetMapping("/getAllPayments")
    public List<Payment> getAllPayments(){
        return paymentService.getAllPayments();
    }

    @PostMapping("/makePayment")
    public Payment makePayment(@RequestHeader("Authorization") String jwt) throws RazorpayException {
        return paymentService.createPayment(jwt);
    }

}
