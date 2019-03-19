package com.kata.bank.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ServicesConfig {

    @Bean
    public AmountService amountService() {
        return new AmountService();
    }

    @Bean
    public OperationService operationService() {
        return new OperationService();
    }

    @Bean
    public AccountService accountService() {
        return new AccountService();
    }

}
