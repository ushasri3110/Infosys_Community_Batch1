package com.infosys.BillingAndPaymentService.repository;

import com.infosys.BillingAndPaymentService.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Long> {
    public Payment findByFlatNo(String flatNo);
}
