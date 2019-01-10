package com.kata.bank.service;

import com.kata.bank.model.Account;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {

    public Account create() {
        final Account account = new Account();
        account.setBalance(0.0);
        return account;
    }

}
