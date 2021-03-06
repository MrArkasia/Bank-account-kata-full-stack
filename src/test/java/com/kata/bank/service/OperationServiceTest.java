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

import java.math.BigDecimal;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@RunWith(SpringRunner.class)
@Import(ServicesConfig.class)
public class OperationServiceTest {

    @Autowired
    private OperationService operationService;

    @Autowired
    private AccountService accountService;

    private Integer accountId;

    @Before
    public void initialize() {
        accountService.deleteAll();
        accountId = accountService.create();
    }

    @Test
    public void shouldReturnPositiveBalanceAfterDeposit() throws OperationException {

        // Given
        // an account

        // When
        operationService.deposit(accountId, new BigDecimal(1.0));
        BigDecimal balance = accountService.getBalance(accountId);

        // Then
        assertThat(balance)
                .isNotNull()
                .isEqualByComparingTo("1.0");
    }

    @Test(expected = OperationException.class)
    public void shouldThrowExceptionWhenDepositNegativeAmount() throws OperationException {

        // Given
        // an account

        // When
        operationService.deposit(accountId, new BigDecimal(1.0).negate());

        // Then
        // new AccountException
    }

    @Test(expected = OperationException.class)
    public void shouldThrowExceptionWhenDepositNullAmount() throws OperationException {

        // Given
        // an account

        // When
        operationService.deposit(accountId, null);

        // Then
        // new AccountException
    }

    @Test
    public void shouldReturnPositiveBalanceAfterWithdrawal() throws OperationException {

        // Given
        operationService.deposit(accountId, new BigDecimal(100.0));

        // When
        operationService.withdrawal(accountId, new BigDecimal(30.0));
        BigDecimal balance = accountService.getBalance(accountId);

        // Then
        assertThat(balance)
                .isNotNull()
                .isEqualByComparingTo("70.0");
    }

    @Test(expected = OperationException.class)
    public void shouldThrowExceptionWhenWithdrawalNegativeAmount() throws OperationException {

        // Given
        // an account

        // When
        operationService.withdrawal(accountId, new BigDecimal(1.0).negate());

        // Then
        // new AccountException
    }

    @Test(expected = OperationException.class)
    public void shouldThrowExceptionWhenWithdrawalNullAmount() throws OperationException {

        // Given
        // an account

        // When
        operationService.withdrawal(accountId, null);

        // Then
        // new AccountException
    }

    @Test(expected = OperationException.class)
    public void shouldThrowExceptionForWithdrawalWhenNoMoney() throws OperationException {

        // Given
        // an account

        // When
        operationService.withdrawal(accountId, new BigDecimal(1.0));

        // Then
        // new AccountException
    }

    @Test
    public void shouldReturnAccountHistory() throws OperationException {

        // Given
        // an account

        // When
        operationService.deposit(accountId, new BigDecimal(100.0));
        operationService.withdrawal(accountId, new BigDecimal(20.0));
        operationService.deposit(accountId, new BigDecimal(50.5));
        operationService.withdrawal(accountId, new BigDecimal(40.0));
        List<Operation> history = operationService.getHistory(accountId);

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
        operationService.deposit(accountId, new BigDecimal(100.0));
        operationService.withdrawal(accountId, new BigDecimal(20.0));
        operationService.deposit(accountId, new BigDecimal(50.5));
        operationService.withdrawal(accountId, new BigDecimal(40.0));
        Account account = accountService.find(accountId);
        List<Operation> history = operationService.getHistory(accountId);

        // Then
        assertThat(history)
                .isNotNull()
                .hasSize(4);
        assertThat(account)
                .isNotNull()
                .extracting("balance")
                .usingComparatorForElementFieldsWithType(BigDecimal::compareTo, BigDecimal.class)
                .contains(new BigDecimal("90.50"));
    }

}