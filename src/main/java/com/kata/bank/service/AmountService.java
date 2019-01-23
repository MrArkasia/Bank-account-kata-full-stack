package com.kata.bank.service;

public class AmountService {

    public boolean isAmountValid(Double amount) {
        return amount != null && amount >= 0.0;
    }

    public boolean isWithdrawalAllowed(Double accountAmount, Double amount) {
        return accountAmount - amount >= 0.0;
    }

}
