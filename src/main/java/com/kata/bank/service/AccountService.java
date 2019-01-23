package com.kata.bank.service;

import com.kata.bank.model.Account;
import com.kata.bank.persistance.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class AccountService {

    @Autowired
    AccountRepository accountRepository;

    public Integer create() {
        final Account account = new Account();
        accountRepository.save(account);
        return account.getId();
    }

    public void delete(Integer id) {
        accountRepository.deleteById(id);
    }

    public void deleteAll() {
        accountRepository.deleteAll();
    }

    public Account find(Integer id) {
        List<Account> accounts = accountRepository.findById(id);
        if (accounts != null && accounts.size() == 1) {
            return accounts.get(0);
        }
        return null;
    }

    public Double getBalance(Integer id) {
        Account account = this.find(id);
        if (account != null) {
            return account.getBalance();
        }
        return null;
    }

    public void save(Account account) {
        accountRepository.save(account);
    }

    public Iterable<Account> findAll() {
        return accountRepository.findAll();
    }

}
