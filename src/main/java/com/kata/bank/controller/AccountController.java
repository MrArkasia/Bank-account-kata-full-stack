package com.kata.bank.controller;

import com.kata.bank.model.Account;
import com.kata.bank.service.AccountService;
import com.kata.bank.service.OperationException;
import com.kata.bank.service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private OperationService operationService;

    @GetMapping("/create")
    public Integer create() {
        return accountService.create();
    }

    @GetMapping("/get/{id}")
    public Account get(@PathVariable Integer id) {
        return accountService.find(id);
    }

    @GetMapping("/deposit/{id}/{amount}")
    public void deposit(@PathVariable Integer id, @PathVariable Double amount) throws OperationException {
        operationService.deposit(id, amount);
    }

}
