package com.kata.bank.controller;

import com.kata.bank.model.Account;
import com.kata.bank.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("/create")
    public Integer create() {
        return accountService.create();
    }

    @GetMapping("/get/{id}")
    public Account get() {
        return null;
    }

}
