package com.kata.bank.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
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

    @Column(name = "balance")
    private BigDecimal balance;

    @ElementCollection
    @JsonIgnore
    @Column(name = "history")
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Operation> history = new ArrayList<>();

    @PrePersist
    void createdAt() {
        this.balance = new BigDecimal(0.0);
    }

}
