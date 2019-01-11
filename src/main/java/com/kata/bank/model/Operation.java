package com.kata.bank.model;

import lombok.*;

import java.util.Date;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Operation {

    private UUID id = UUID.randomUUID();
    private Date date = new Date();
    private OperationType type;
    private Double amount;
    private Double balance;

}
