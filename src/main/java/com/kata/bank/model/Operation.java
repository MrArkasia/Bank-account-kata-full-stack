package com.kata.bank.model;

import lombok.Builder;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@Builder
public class Operation {

    private final UUID id = UUID.randomUUID();
    private final Date date = new Date();
    private final OperationType type;
    private final Double amount;
    private final Double balance;

}
