package com.kata.bank.dao;

import com.kata.bank.model.Account;

public class AccountDaoImpl implements AccountDao {

    @Override
    public Account create() {
        final Account account = new Account();
        account.setBalance(0.0);
        return account;
    }

}
