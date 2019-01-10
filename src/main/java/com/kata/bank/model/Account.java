package com.kata.bank.model;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class Account {

    private Double balance = 0.0;

    private List<Operation> history = new ArrayList<>();

}
