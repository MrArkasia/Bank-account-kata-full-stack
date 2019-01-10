package com.kata.bank.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AccountServiceConfig {

    @Bean
    public AccountService accountService() {
        return new AccountServiceImpl();
    }

}
