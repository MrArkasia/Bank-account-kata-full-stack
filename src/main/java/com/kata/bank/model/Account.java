package com.kata.bank.model;

import java.util.ArrayList;
import java.util.List;

public class Account {

    private Double balance = 0.0;

    private List<Operation> history = new ArrayList<>();

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public List<Operation> getHistory() {
        return history;
    }

}
