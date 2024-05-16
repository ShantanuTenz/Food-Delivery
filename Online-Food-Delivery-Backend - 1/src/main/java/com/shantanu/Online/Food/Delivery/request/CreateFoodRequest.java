package com.shantanu.Online.Food.Delivery.request;

import com.shantanu.Online.Food.Delivery.model.Category;
import com.shantanu.Online.Food.Delivery.model.IngredientsItem;
import lombok.Data;

import java.util.List;

@Data
public class CreateFoodRequest {
    private String name;
    private String description;
    private Long price;
    private Category category;
    private List<String> images;
    private Long restaurantId;
    private boolean vegetarian;
    private boolean seasonal;
    private List<IngredientsItem> ingredients;
}
