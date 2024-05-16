package com.shantanu.Online.Food.Delivery.service;

import com.shantanu.Online.Food.Delivery.model.Order;
import com.shantanu.Online.Food.Delivery.response.PaymentResponse;
import com.stripe.exception.StripeException;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentService {
    public PaymentResponse createPaymentLink(Order order) throws StripeException;
}
