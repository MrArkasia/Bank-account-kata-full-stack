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

    @Override
    public void deposit(Account account, double amount) throws OperationException {
        if (amount >= 0.0) {
            final Double balance = account.getBalance();
            account.setBalance(balance + amount);
        } else {
            throw new OperationException();
        }
    }

}
