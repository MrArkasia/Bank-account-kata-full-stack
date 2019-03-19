package com.kata.bank.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"history"})
@Table(name = "account")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Integer id;

    @Setter
    @Column(name = "balance")
    private Double balance;

    @ElementCollection
    @JsonIgnore
    @Column(name = "history")
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Operation> history = new ArrayList<>();

    @PrePersist
    void createdAt() {
        this.balance = 0.0;
    }

}
