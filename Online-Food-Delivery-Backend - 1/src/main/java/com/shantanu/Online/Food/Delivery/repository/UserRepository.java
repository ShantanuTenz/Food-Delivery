package com.shantanu.Online.Food.Delivery.repository;

import com.shantanu.Online.Food.Delivery.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    public User findByEmail(String username);
}
