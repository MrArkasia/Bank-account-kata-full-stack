package com.kata.bank.model;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"history"})
@Table(name = "account")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "account_id")
    private Integer id;

    @Setter
    @Column(name = "balance")
    private Double balance;

    @ElementCollection
    @Column(name = "history")
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Operation> history = new ArrayList<>();

    @PrePersist
    void createdAt() {
        this.balance = 0.0;
    }

}
