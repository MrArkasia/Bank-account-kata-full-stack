package com.kata.bank.service;

import com.kata.bank.model.Account;

interface AccountService {

    Account create();

    void deposit(Account account, Double amount) throws OperationException;

    void withdrawal(Account account, Double amount) throws OperationException;
}
