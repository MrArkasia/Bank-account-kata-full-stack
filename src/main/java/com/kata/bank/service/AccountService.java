package com.kata.bank.service;

import com.kata.bank.model.Account;
import com.kata.bank.model.Operation;

import java.util.List;

public interface AccountService {

    Integer create();

    void delete(Integer id);

    void deleteAll();

    Account find(Integer id);

    Iterable<Account> findAll();

    List<Operation> getHistory(Integer id);

    Double getBalance(Integer id);

    void save(Account account);

}
