package com.shantanu.Online.Food.Delivery.request;

import com.shantanu.Online.Food.Delivery.model.Address;
import lombok.Data;

@Data
public class OrderRequest {
    private Long restaurantId;
    private Address deliveryAddress;
}
