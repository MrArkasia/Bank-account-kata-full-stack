package com.kata.bank.model;

import java.util.Date;
import java.util.UUID;

public class Operation {

    private UUID id;
    private OperationType type;
    private Date date;
    private Double amount;
    private Double balance;

    public UUID getId() {
        return id;
    }

    public OperationType getType() {
        return type;
    }

    public Date getDate() {
        return date;
    }

    public Double getAmount() {
        return amount;
    }

    public Double getBalance() {
        return balance;
    }
}
