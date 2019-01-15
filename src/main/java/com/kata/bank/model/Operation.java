package com.kata.bank.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "OPERATION")
public class Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "operation_id", nullable = false, unique = true)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    private Account account;

    //@Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date")
    private long date = new Date().getTime();

    @Enumerated
    @Column(name = "type")
    private OperationType type;

    @Column(name = "amount")
    private Double amount;

    @Column(name = "balance")
    private Double balance;

}
