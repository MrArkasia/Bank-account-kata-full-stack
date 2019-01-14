package com.kata.bank.service;

import com.kata.bank.model.Account;
import com.kata.bank.model.Operation;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Import(OperationServiceConfig.class)
public class OperationServiceTest {

    @Autowired
    private OperationService operationService;

    private Account account;

    @Before
    public void initialize() {
        account = operationService.create();
    }

    @Test
    public void shouldReturnZeroBalance() {

        // Given
        // an account

        // When
        final Double balance = account.getBalance();

        // Then
        assertThat(balance).isEqualTo(0.0);
    }

    @Test
    public void shouldReturnPositiveBalanceAfterDeposit() throws OperationException {

        // Given
        // an account

        // When
        operationService.deposit(account, 1.0);

        // Then
        assertThat(account)
                .isNotNull()
                .extracting("balance").contains(1.0);
    }

    @Test(expected = OperationException.class)
    public void shouldThrowExceptionWhenDepositNegativeAmount() throws OperationException {

        // Given
        // an account

        // When
        operationService.deposit(account, -1.0);

        // Then
        // new AccountException
    }

    @Test(expected = OperationException.class)
    public void shouldThrowExceptionWhenDepositNullAmount() throws OperationException {

        // Given
        // an account

        // When
        operationService.deposit(account, null);

        // Then
        // new AccountException
    }

    @Test
    public void shouldThrowPositiveBalanceAfterWithdrawal() throws OperationException {

        // Given
        account.setBalance(100.0);

        // When
        operationService.withdrawal(account, 30.0);

        // Then
        assertThat(account)
                .isNotNull()
                .extracting("balance").contains(70.0);
    }

    @Test(expected = OperationException.class)
    public void shouldThrowExceptionWhenWithdrawalNegativeAmount() throws OperationException {

        // Given
        // an account

        // When
        operationService.withdrawal(account, -1.0);

        // Then
        // new AccountException
    }

    @Test(expected = OperationException.class)
    public void shouldThrowExceptionWhenWithdrawalNullAmount() throws OperationException {

        // Given
        // an account

        // When
        operationService.withdrawal(account, null);

        // Then
        // new AccountException
    }

    @Test(expected = OperationException.class)
    public void shouldThrowExceptionForWithdrawalWhenNoMoney() throws OperationException {

        // Given
        // an account

        // When
        operationService.withdrawal(account, 1.0);

        // Then
        // new AccountException
    }

    @Test
    public void shouldReturnAccountHistory() throws OperationException {

        // Given
        // an account

        // When
        operationService.deposit(account, 100.0);
        operationService.withdrawal(account, 20.0);
        operationService.deposit(account, 50.5);
        operationService.withdrawal(account, 40.0);
        List<Operation> history = operationService.getHistory(account);

        // Then
        assertThat(history)
                .isNotNull()
                .hasSize(4);
    }

    @Test
    public void shouldKeepBalanceAfterOperations() throws OperationException {

        // Given
        // an account

        // When
        operationService.deposit(account, 100.0);
        operationService.withdrawal(account, 20.0);
        operationService.deposit(account, 50.5);
        operationService.withdrawal(account, 40.0);
        List<Operation> history = operationService.getHistory(account);

        // Then
        assertThat(history)
                .isNotNull()
                .hasSize(4);
        assertThat(account)
                .isNotNull()
                .extracting("balance").contains(90.5);
    }

}