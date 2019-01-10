package com.kata.bank.service;

import com.kata.bank.model.Account;
import com.kata.bank.model.Operation;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {

    public Account create() {
        final Account account = new Account();
        account.setBalance(0.0);
        return account;
    }

    @Override
    public void deposit(Account account, Double amount) throws OperationException {
        if (isValidAmount(amount)) {
            account.setBalance(account.getBalance() + amount);
        } else {
            throw new OperationException();
        }
    }

    @Override
    public void withdrawal(Account account, Double amount) throws OperationException {
        if (isValidAmount(amount) && isValidWithdrawal(account.getBalance(), amount)) {
            account.setBalance(account.getBalance() - amount);
        } else {
            throw new OperationException();
        }
    }

    @Override
    public List<Operation> getHistory(Account account) {
        return null;
    }

    private boolean isValidAmount(Double amount) {
        return amount != null && amount >= 0.0;
    }

    private boolean isValidWithdrawal(Double accountAmount, Double amount) {
        return accountAmount - amount >= 0.0;
    }

}
