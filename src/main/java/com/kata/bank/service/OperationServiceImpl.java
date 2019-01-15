package com.kata.bank.service;

import com.kata.bank.model.Account;
import com.kata.bank.model.Operation;
import com.kata.bank.model.OperationType;
import com.kata.bank.persistance.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OperationServiceImpl implements OperationService {

    @Autowired
    AccountRepository accountRepository;

    @Override
    public Account createAccount() {
        final Account account = new Account();
        account.setBalance(0.0);
        accountRepository.save(account);
        return account;
    }

    @Override
    public void deposit(Account account, Double amount) throws OperationException {
        if (isAmountValid(amount)) {
            account.setBalance(account.getBalance() + amount);
            Operation operation = Operation.builder()
                    .type(OperationType.DEPOSIT)
                    .balance(account.getBalance())
                    .amount(amount)
                    .build();
            putInHistory(account, operation);
        } else {
            throw new OperationException();
        }
    }

    @Override
    public void withdrawal(Account account, Double amount) throws OperationException {
        if (isAmountValid(amount) && isWithdrawalAllowed(account.getBalance(), amount)) {
            account.setBalance(account.getBalance() - amount);
            Operation operation = Operation.builder()
                    .type(OperationType.WITHDRAWAL)
                    .balance(account.getBalance())
                    .amount(amount)
                    .build();
            putInHistory(account, operation);
        } else {
            throw new OperationException();
        }
    }

    @Override
    public List<Operation> getHistory(Account account) {
        return account.getHistory();
    }

    @Override
    public List<Account> findAllAccounts() {
        return accountRepository.findAll();
    }

    private void putInHistory(Account account, Operation operation) {
        account.getHistory().add(operation);
    }

    private boolean isAmountValid(Double amount) {
        return amount != null && amount >= 0.0;
    }

    private boolean isWithdrawalAllowed(Double accountAmount, Double amount) {
        return accountAmount - amount >= 0.0;
    }

}
