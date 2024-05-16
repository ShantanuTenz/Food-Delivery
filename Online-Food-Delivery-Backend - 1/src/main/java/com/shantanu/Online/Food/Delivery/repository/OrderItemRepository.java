package com.shantanu.Online.Food.Delivery.repository;

import com.shantanu.Online.Food.Delivery.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
