package com.kata.bank.controller;

import com.kata.bank.model.Account;
import com.kata.bank.service.AccountService;
import com.kata.bank.service.OperationException;
import com.kata.bank.service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private OperationService operationService;

    @PostMapping("/create")
    public Integer create() {
        return accountService.create();
    }

    @GetMapping("/get")
    public Account get(@RequestParam Integer id) {
        return accountService.find(id);
    }

    @PostMapping("/deposit")
    public void deposit(@RequestParam Integer id, @RequestParam Double amount) throws OperationException {
        operationService.deposit(id, amount);
    }

    @PostMapping("/withdrawal")
    public void withdrawal(
            @RequestParam(value = "id") Integer id,
            @RequestParam(value = "amount") Double amount) throws OperationException {

        operationService.withdrawal(id, amount);
    }

}
