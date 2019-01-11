package com.kata.bank.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OperationServiceConfig {

    @Bean
    public OperationService accountService() {
        return new OperationServiceImpl();
    }

}
