package com.kata.bank.service;

import com.kata.bank.model.Account;
import com.kata.bank.model.Operation;
import com.kata.bank.model.OperationType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class OperationServiceImpl implements OperationService {

    @Autowired
    AccountService accountService;

    @Override
    public void deposit(Integer accountId, Double amount) throws OperationException {
        Account account = accountService.find(accountId);
        if (isAmountValid(amount)) {
            account.setBalance(account.getBalance() + amount);
            Operation operation = Operation.builder()
                    .type(OperationType.DEPOSIT)
                    .balance(account.getBalance())
                    .amount(amount)
                    .build();
            account.getHistory().add(operation);
            accountService.save(account);
        } else {
            throw new OperationException();
        }
    }

    @Override
    public void withdrawal(Integer accountId, Double amount) throws OperationException {
        Account account = accountService.find(accountId);
        if (isAmountValid(amount) && isWithdrawalAllowed(account.getBalance(), amount)) {
            account.setBalance(account.getBalance() - amount);
            Operation operation = Operation.builder()
                    .type(OperationType.WITHDRAWAL)
                    .balance(account.getBalance())
                    .amount(amount)
                    .build();
            account.getHistory().add(operation);
            accountService.save(account);
        } else {
            throw new OperationException();
        }
    }

    private boolean isAmountValid(Double amount) {
        return amount != null && amount >= 0.0;
    }

    private boolean isWithdrawalAllowed(Double accountAmount, Double amount) {
        return accountAmount - amount >= 0.0;
    }

}
