package com.kata.bank.service;

import com.kata.bank.model.Account;
import com.kata.bank.model.Operation;

import java.util.List;

interface OperationService {

    Account createAccount();

    void deposit(Account account, Double amount) throws OperationException;

    void withdrawal(Account account, Double amount) throws OperationException;

    List<Operation> getHistory(Account account);

    List<Account> getAll();

}
