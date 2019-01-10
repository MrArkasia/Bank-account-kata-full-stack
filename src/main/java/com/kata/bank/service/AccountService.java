package com.kata.bank.service;

import com.kata.bank.model.Account;

public class AccountService {

    public Account create() {
        final Account account = new Account();
        account.setBalance(0.0);
        return account;
    }

}
