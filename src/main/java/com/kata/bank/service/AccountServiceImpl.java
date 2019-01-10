package com.kata.bank.service;

import com.kata.bank.model.Account;
import com.kata.bank.model.Operation;
import com.kata.bank.model.OperationType;
import org.springframework.stereotype.Service;

import java.util.Date;
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
        if (isAmountValid(amount)) {
            account.setBalance(account.getBalance() + amount);
            final Operation operation = new Operation(OperationType.DEPOSIT, new Date(), account.getBalance(), amount);
            historize(account, operation);
        } else {
            throw new OperationException();
        }
    }

    @Override
    public void withdrawal(Account account, Double amount) throws OperationException {
        if (isAmountValid(amount) && isWithdrawalAllowed(account.getBalance(), amount)) {
            account.setBalance(account.getBalance() - amount);
            final Operation operation = new Operation(OperationType.WITHDRAWAL, new Date(), account.getBalance(), amount);
            historize(account, operation);
        } else {
            throw new OperationException();
        }
    }

    @Override
    public List<Operation> getHistory(Account account) {
        return account.getHistory();
    }

    private void historize(Account account, Operation operation) {
        account.getHistory().add(operation);
    }

    private boolean isAmountValid(Double amount) {
        return amount != null && amount >= 0.0;
    }

    private boolean isWithdrawalAllowed(Double accountAmount, Double amount) {
        return accountAmount - amount >= 0.0;
    }

}
