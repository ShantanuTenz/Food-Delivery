package com.shantanu.Online.Food.Delivery.repository;

import com.shantanu.Online.Food.Delivery.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
