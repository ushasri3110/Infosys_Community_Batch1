package com.infosys.BillingAndPaymentService.service;

import com.infosys.BillingAndPaymentService.model.Payment;
import com.infosys.BillingAndPaymentService.response.PaymentLinkResponse;
import com.razorpay.RazorpayException;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PaymentService {
    public List<Payment> getAllPayments();
    public ResponseEntity<PaymentLinkResponse> createPayment(String jwt) throws RazorpayException;
}
