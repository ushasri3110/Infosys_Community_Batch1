package com.infosys.BillingAndPaymentService.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentLinkResponse {
    private String paymentLinkId;
    private String paymentLinkUrl;
}
