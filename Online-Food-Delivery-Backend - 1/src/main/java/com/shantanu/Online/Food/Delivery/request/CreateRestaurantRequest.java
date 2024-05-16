package com.shantanu.Online.Food.Delivery.request;

import com.shantanu.Online.Food.Delivery.model.Address;
import com.shantanu.Online.Food.Delivery.model.ContactInformation;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class CreateRestaurantRequest {

    private Long id;
    private String name;
    private String description;
    private String cuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private String openingHours;
    private List<String> images;

}
