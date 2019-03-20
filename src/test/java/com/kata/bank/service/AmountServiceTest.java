package com.kata.bank.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@RunWith(SpringRunner.class)
@Import(ServicesConfig.class)
public class AmountServiceTest {

    @Autowired
    AmountService amountService;

    @Test
    public void ShouldReturnTrueForAmountValid() {

        // Given
        BigDecimal amount = new BigDecimal(100.0);

        // When
        boolean result = amountService.isAmountValid(amount);

        // Then
        assertThat(result).isEqualTo(true);
    }

    @Test
    public void ShouldReturnFalseForNotAmountValid() {

        // Given
        BigDecimal amount = new BigDecimal(100.0).negate();

        // When
        boolean result = amountService.isAmountValid(amount);

        // Then
        assertThat(result).isEqualTo(false);
    }

    @Test
    public void ShouldReturnTrueForAValidWithdrawal() {

        // Given
        BigDecimal balance = new BigDecimal(100.0);
        BigDecimal amount = new BigDecimal(50.0);

        // When
        boolean result = amountService.isWithdrawalAllowed(balance, amount);

        // Then
        assertThat(result).isEqualTo(true);
    }

    @Test
    public void ShouldReturnTrueForNotValidWithdrawal() {

        // Given
        BigDecimal balance = new BigDecimal(30.0);
        BigDecimal amount = new BigDecimal(50.0);

        // When
        boolean result = amountService.isWithdrawalAllowed(balance, amount);

        // Then
        assertThat(result).isEqualTo(false);
    }
}