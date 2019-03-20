package com.kata.bank.service;

import java.math.BigDecimal;

public class AmountService {

    private final BigDecimal zero = new BigDecimal(0.0);

    public boolean isAmountValid(BigDecimal amount) {
        return amount != null && amount.compareTo(zero) >= 0;
    }

    public boolean isWithdrawalAllowed(BigDecimal accountAmount, BigDecimal amount) {
        return accountAmount.subtract(amount).compareTo(zero) >= 0;
    }

}
