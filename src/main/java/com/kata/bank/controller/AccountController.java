package com.kata.bank.controller;

import com.kata.bank.model.Account;
import com.kata.bank.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
@CrossOrigin(origins = "http://localhost:8080")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping({"", "/"})
    public Integer create() {
        return accountService.create();
    }

    @GetMapping({"", "/"})
    public Account get(@RequestParam Integer accountId) {
        return accountService.find(accountId);
    }

    @GetMapping({"/all"})
    public Iterable<Account> get() {
        return accountService.findAll();
    }

}
