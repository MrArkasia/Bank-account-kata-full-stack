package com.kata.bank.controller;

import com.kata.bank.model.Account;
import com.kata.bank.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping({"", "/"})
    @ResponseBody
    public Integer create() {
        return accountService.create();
    }

    @GetMapping({"", "/"})
    @ResponseBody
    public Account get(@RequestParam Integer accountId) {
        return accountService.find(accountId);
    }

}
