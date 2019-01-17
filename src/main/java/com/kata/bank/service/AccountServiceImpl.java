package com.kata.bank.service;

import com.kata.bank.model.Account;
import com.kata.bank.model.Operation;
import com.kata.bank.persistance.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class AccountServiceImpl implements AccountService {

    @Autowired
    AccountRepository accountRepository;

    @Override
    public Integer create() {
        final Account account = new Account();
        accountRepository.save(account);
        return account.getId();
    }

    @Override
    public void delete(Integer id) {
        accountRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        accountRepository.deleteAll();
    }

    @Override
    public Account find(Integer id) {
        List<Account> accounts = accountRepository.findById(id);
        if (accounts != null && accounts.size() == 1) {
            return accounts.get(0);
        }
        return null;
    }

    @Override
    public List<Operation> getHistory(Integer id) {
        Account account = this.find(id);
        if (account != null) {
            return account.getHistory();
        }
        return new ArrayList<>();
    }

    @Override
    public Double getBalance(Integer id) {
        Account account = this.find(id);
        if (account != null) {
            return account.getBalance();
        }
        return null;
    }

    @Override
    public void save(Account account) {
        accountRepository.save(account);
    }

    @Override
    public Iterable<Account> findAll() {
        return accountRepository.findAll();
    }

}
