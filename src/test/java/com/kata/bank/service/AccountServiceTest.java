package com.kata.bank.service;

import com.kata.bank.model.Account;
import com.kata.bank.model.Operation;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Import(AccountServiceConfig.class)
public class AccountServiceTest {

    @Autowired
    AccountService accountService;

    @Test
    public void shouldReturnZeroBalance() {
        // Given
        final Account account = accountService.create();
        // When
        final Double balance = account.getBalance();
        // Then
        assertNotNull(balance);
        assertEquals(balance, 0.0, 0.0);
    }

    @Test
    public void shouldReturnPositiveBalanceAfterDeposit() throws OperationException {
        // Given
        final Account account = accountService.create();
        // When
        accountService.deposit(account, 1.0);
        // Then
        assertEquals((Double) 1.0, account.getBalance());
    }

    @Test(expected = OperationException.class)
    public void shouldReturnExceptionWhenDepositNegativeAmount() throws OperationException {
        // Given
        final Account account = accountService.create();
        // When
        accountService.deposit(account, -1.0);
        // Then
        // new AccountException
    }

    @Test(expected = OperationException.class)
    public void shouldReturnExceptionWhenDepositNullAmount() throws OperationException {
        // Given
        final Account account = accountService.create();
        // When
        accountService.deposit(account, null);
        // Then
        // new AccountException
    }

    @Test
    public void shouldReturnPositiveBalanceAfterWithdrawal() throws OperationException {
        // Given
        final Account account = accountService.create();
        account.setBalance(100.0);
        // When
        accountService.withdrawal(account, 30.0);
        // Then
        assertEquals((Double) 70.0, account.getBalance());
    }

    @Test(expected = OperationException.class)
    public void shouldReturnExceptionWhenWithdrawalNegativeAmount() throws OperationException {
        // Given
        final Account account = accountService.create();
        // When
        accountService.withdrawal(account, -1.0);
        // Then
        // new AccountException
    }

    @Test(expected = OperationException.class)
    public void shouldReturnExceptionWhenWithdrawalNullAmount() throws OperationException {
        // Given
        final Account account = accountService.create();
        // When
        accountService.withdrawal(account, null);
        // Then
        // new AccountException
    }

    @Test(expected = OperationException.class)
    public void shouldReturnExceptionForWithdrawalWhenNoMoney() throws OperationException {
        // Given
        final Account account = accountService.create();
        // When
        accountService.withdrawal(account, 1.0);
        // Then
        // new AccountException
    }

    @Test
    public void shouldReturnBalanceWhenAfterOperations() throws OperationException {
        // Given
        final Account account = accountService.create();
        // When
        accountService.deposit(account, 100.0);
        accountService.withdrawal(account, 20.0);
        accountService.deposit(account, 50.5);
        accountService.withdrawal(account, 40.0);
        // Then
        assertEquals((Double) 90.5, account.getBalance());
    }

    @Test
    public void shouldReturnAccountHistory() throws OperationException {
        // Given
        final Account account = accountService.create();
        // When
        accountService.deposit(account, 100.0);
        accountService.withdrawal(account, 20.0);
        accountService.deposit(account, 50.5);
        accountService.withdrawal(account, 40.0);
        final List<Operation> history = accountService.getHistory(account);
        // Then
        assertEquals(4, history.size());
    }

}