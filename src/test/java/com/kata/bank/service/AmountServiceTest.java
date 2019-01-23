package com.kata.bank.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringRunner;

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
        Double amount = 100.0;

        // When
        boolean result = amountService.isAmountValid(amount);

        // Then
        assertThat(result).isEqualTo(true);
    }

    @Test
    public void ShouldReturnFalseForNotAmountValid() {

        // Given
        Double amount = -100.0;

        // When
        boolean result = amountService.isAmountValid(amount);

        // Then
        assertThat(result).isEqualTo(false);
    }

    @Test
    public void ShouldReturnTrueForAValidWithdrawal() {

        // Given
        Double balance = 100.0;
        Double amount = 50.0;

        // When
        boolean result = amountService.isWithdrawalAllowed(balance, amount);

        // Then
        assertThat(result).isEqualTo(true);
    }

    @Test
    public void ShouldReturnTrueForNotValidWithdrawal() {

        // Given
        Double balance = 30.0;
        Double amount = 50.0;

        // When
        boolean result = amountService.isWithdrawalAllowed(balance, amount);

        // Then
        assertThat(result).isEqualTo(false);
    }
}