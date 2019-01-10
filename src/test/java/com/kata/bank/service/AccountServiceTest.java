package com.kata.bank.service;

import com.kata.bank.model.Account;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringRunner;

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
    public void shouldReturnPositiveAccountBalance() throws OperationException {
        // Given
        final Account account = accountService.create();
        // When
        accountService.deposit(account, 1.0);
        // Then
        assertEquals((Double) 1.0, account.getBalance());
    }

    @Test(expected = OperationException.class)
    public void shouldReturnAccountExceptionWhenDepositNegativeAmount() throws OperationException {
        // Given
        final Account account = accountService.create();
        // When
        accountService.deposit(account, -1.0);
        // Then
        // new AccountException
    }

    @Test(expected = OperationException.class)
    public void shouldReturnAccountExceptionWhenDepositNullAmount() throws OperationException {
        // Given
        final Account account = accountService.create();
        // When
        accountService.deposit(account, null);
        // Then
        // new AccountException
    }

}