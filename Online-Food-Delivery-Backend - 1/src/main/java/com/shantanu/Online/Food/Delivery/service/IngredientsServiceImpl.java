package com.shantanu.Online.Food.Delivery.service;

import com.shantanu.Online.Food.Delivery.model.Category;
import com.shantanu.Online.Food.Delivery.model.IngredientCategory;
import com.shantanu.Online.Food.Delivery.model.IngredientsItem;
import com.shantanu.Online.Food.Delivery.model.Restaurant;
import com.shantanu.Online.Food.Delivery.repository.IngredientCategoryRepository;
import com.shantanu.Online.Food.Delivery.repository.IngredientItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientsServiceImpl implements IngredientsService{

    @Autowired
    private IngredientItemRepository ingredientItemRepository;
    @Autowired
    private IngredientCategoryRepository ingredientCategoryRepository;

    @Autowired
    private RestaurantService restaurantService;

    @Override
    public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);

        IngredientCategory ingredientCategory = new IngredientCategory();
        ingredientCategory.setRestaurant(restaurant);
        ingredientCategory.setName(name);

        ingredientCategoryRepository.save(ingredientCategory);
        return ingredientCategory;
    }

    @Override
    public IngredientCategory findIngredientCategoryById(Long id) throws Exception {
        Optional<IngredientCategory> opt = ingredientCategoryRepository.findById(id);
        if(opt.isEmpty()){
            throw new Exception("Ingredient Category not found");
        }
        return opt.get();
    }

    @Override
    public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long id) throws Exception {
        return ingredientCategoryRepository.findByRestaurantId(id);
    }

    @Override
    public IngredientsItem createIngredientItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception {

        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientCategory category = findIngredientCategoryById(categoryId);

        IngredientsItem ingredientsItem = new IngredientsItem();
        ingredientsItem.setRestaurant(restaurant);
        ingredientsItem.setCategory(category);
        ingredientsItem.setName(ingredientName);

        ingredientItemRepository.save(ingredientsItem);
        category.getIngredients().add(ingredientsItem);

        return ingredientsItem;
    }

    @Override
    public List<IngredientsItem> findRestaurantsIngredients(Long restaurantId) throws Exception {
        return ingredientItemRepository.findByRestaurantId(restaurantId);
    }

    @Override
    public IngredientsItem updateStock(Long id) throws Exception {
        Optional<IngredientsItem> ingredientsItem = ingredientItemRepository.findById(id);
        if(ingredientsItem.isEmpty()){
            throw new Exception("Ingredient not found");
        }
        IngredientsItem item = ingredientsItem.get();
        item.setInStoke(!ingredientsItem.get().isInStoke());
        ingredientItemRepository.save(item);

        return item;
    }
}
