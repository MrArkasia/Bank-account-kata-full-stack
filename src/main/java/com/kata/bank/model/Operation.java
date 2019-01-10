package com.kata.bank.model;

import java.util.Date;
import java.util.UUID;

public class Operation {

    private final UUID id;
    private final OperationType type;
    private final Date date;
    private final Double amount;
    private final Double balance;

    public Operation(OperationType type, Date date, Double amount, Double balance) {
        this.id = UUID.randomUUID();
        this.type = type;
        this.date = date;
        this.amount = amount;
        this.balance = balance;
    }

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
