package com.shantanu.Online.Food.Delivery.service;

import com.shantanu.Online.Food.Delivery.model.User;
import org.springframework.stereotype.Service;

public interface UserService {
    public User findUserByJwtToken(String jwt) throws Exception;

    public User findUserByEmail(String email) throws Exception;

}
