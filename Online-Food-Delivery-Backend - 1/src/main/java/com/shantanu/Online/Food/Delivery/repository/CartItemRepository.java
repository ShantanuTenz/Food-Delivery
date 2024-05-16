package com.shantanu.Online.Food.Delivery.repository;

import com.shantanu.Online.Food.Delivery.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}
