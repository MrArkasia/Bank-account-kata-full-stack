package com.kata.bank.model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "ACCOUNT")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id", nullable = false, unique = true)
    private Integer id;

    @Column(name = "balance")
    private Double balance = 0.0;

    @ElementCollection
    @Column(name = "history")
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "account", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Operation> history = new ArrayList<>();

}
