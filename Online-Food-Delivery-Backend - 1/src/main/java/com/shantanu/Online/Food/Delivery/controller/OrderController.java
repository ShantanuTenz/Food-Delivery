package com.shantanu.Online.Food.Delivery.controller;

import com.shantanu.Online.Food.Delivery.model.CartItem;
import com.shantanu.Online.Food.Delivery.model.Order;
import com.shantanu.Online.Food.Delivery.model.User;
import com.shantanu.Online.Food.Delivery.request.AddCartItemRequest;
import com.shantanu.Online.Food.Delivery.request.OrderRequest;
import com.shantanu.Online.Food.Delivery.response.PaymentResponse;
import com.shantanu.Online.Food.Delivery.service.OrderService;
import com.shantanu.Online.Food.Delivery.service.PaymentService;
import com.shantanu.Online.Food.Delivery.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/order")
    public ResponseEntity<PaymentResponse> createOrder(@RequestBody OrderRequest req,
                                                       @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Order order = orderService.createOrder(req, user);
        PaymentResponse response = paymentService.createPaymentLink(order);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/order/user")
    public ResponseEntity<List<Order>> getOrderHistory(@RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        List<Order> orders = orderService.getUsersOrder(user.getId());

        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

}