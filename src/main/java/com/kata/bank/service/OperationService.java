package com.kata.bank.service;

import com.kata.bank.model.Account;
import com.kata.bank.model.Operation;
import com.kata.bank.model.OperationType;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class OperationService {

    @Autowired
    AccountService accountService;

    @Autowired
    AmountService amountService;

    public Integer deposit(Integer accountId, Double amount) throws OperationException {
        Account account = accountService.find(accountId);
        if (amountService.isAmountValid(amount)) {
            account.setBalance(account.getBalance() + amount);
            Operation operation = Operation.builder()
                    .type(OperationType.DEPOSIT)
                    .balance(account.getBalance())
                    .amount(amount)
                    .build();
            account.getHistory().add(operation);
            accountService.save(account);
            return accountId;
        } else {
            throw new OperationException();
        }
    }

    public Integer withdrawal(Integer accountId, Double amount) throws OperationException {
        Account account = accountService.find(accountId);
        if (amountService.isAmountValid(amount) && amountService.isWithdrawalAllowed(account.getBalance(), amount)) {
            account.setBalance(account.getBalance() - amount);
            Operation operation = Operation.builder()
                    .type(OperationType.WITHDRAWAL)
                    .balance(account.getBalance())
                    .amount(amount)
                    .build();
            account.getHistory().add(operation);
            accountService.save(account);
            return accountId;
        } else {
            throw new OperationException();
        }
    }

    public List<Operation> getHistory(Integer accountId) {
        Account account = accountService.find(accountId);
        if (account != null) {
            return account.getHistory();
        }
        return new ArrayList<>();
    }

}
