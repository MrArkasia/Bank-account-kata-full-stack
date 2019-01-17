package com.kata.bank.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "operation")
public class Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "operation_id")
    private Integer id;

    @Column(name = "date")
    private long date;

    @Enumerated
    @Column(name = "type")
    private OperationType type;

    @Column(name = "amount")
    private Double amount;

    @Column(name = "balance")
    private Double balance;

    @PrePersist
    void createdAt() {
        this.date = new Date().getTime();
    }

}
