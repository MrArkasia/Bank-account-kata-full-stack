package com.kata.bank.service;

import com.kata.bank.model.Account;
import org.junit.Test;

import static org.junit.Assert.*;

public class AccountServiceTest {

    @Test
    public void shouldReturnZeroBalance() {
        // Given
        final AccountService accountDao = new AccountService();
        // When
        final Account account = accountDao.create();
        final Double balance = account.getBalance();
        // Then
        assertNotNull(balance);
        assertEquals(balance, 0.0, 0.0);
    }

}