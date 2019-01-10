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
@Import(AccountServiceConfig.class)
public class AccountServiceTest {

    @Autowired
    AccountService accountService;

    // Given
    private Account account;

    @Before
    public void initialize() {
        account = accountService.create();
    }

    @Test
    public void shouldReturnZeroBalance() {

        // When
        final Double balance = account.getBalance();

        // Then
        assertThat(balance).isEqualTo(0.0);
    }

    @Test
    public void shouldReturnPositiveBalanceAfterDeposit() throws OperationException {

        // When
        accountService.deposit(account, 1.0);

        // Then
        assertThat(account.getBalance()).isEqualTo(1.0);
    }

    @Test(expected = OperationException.class)
    public void shouldReturnExceptionWhenDepositNegativeAmount() throws OperationException {

        // When
        accountService.deposit(account, -1.0);

        // Then
        // new AccountException
    }

    @Test(expected = OperationException.class)
    public void shouldReturnExceptionWhenDepositNullAmount() throws OperationException {

        // When
        accountService.deposit(account, null);

        // Then
        // new AccountException
    }

    @Test
    public void shouldReturnPositiveBalanceAfterWithdrawal() throws OperationException {

        // Given
        account.setBalance(100.0);

        // When
        accountService.withdrawal(account, 30.0);

        // Then
        assertThat(account.getBalance()).isEqualTo(70.0);
    }

    @Test(expected = OperationException.class)
    public void shouldReturnExceptionWhenWithdrawalNegativeAmount() throws OperationException {

        // When
        accountService.withdrawal(account, -1.0);

        // Then
        // new AccountException
    }

    @Test(expected = OperationException.class)
    public void shouldReturnExceptionWhenWithdrawalNullAmount() throws OperationException {

        // When
        accountService.withdrawal(account, null);

        // Then
        // new AccountException
    }

    @Test(expected = OperationException.class)
    public void shouldReturnExceptionForWithdrawalWhenNoMoney() throws OperationException {

        // When
        accountService.withdrawal(account, 1.0);

        // Then
        // new AccountException
    }

    @Test
    public void shouldReturnBalanceWhenAfterOperations() throws OperationException {

        // When
        accountService.deposit(account, 100.0);
        accountService.withdrawal(account, 20.0);
        accountService.deposit(account, 50.5);
        accountService.withdrawal(account, 40.0);

        // Then
        assertThat(account.getBalance()).isEqualTo(90.5);
    }

    @Test
    public void shouldReturnAccountHistory() throws OperationException {

        // When
        accountService.deposit(account, 100.0);
        accountService.withdrawal(account, 20.0);
        accountService.deposit(account, 50.5);
        accountService.withdrawal(account, 40.0);
        final List<Operation> history = accountService.getHistory(account);

        // Then
        assertThat(history.size()).isEqualTo(4);
    }

}