package com.kata.bank.dao;

import com.kata.bank.model.Account;
import org.junit.Test;

import static org.junit.Assert.*;

public class AccountDaoImplTest {

    @Test
    public void shouldReturnZeroBalance() {
        // Given
        final AccountDao accountDao = new AccountDaoImpl();
        // When
        final Account account = accountDao.create();
        final Double balance = account.getBalance();
        // Then
        assertNotNull(balance);
        assertEquals(balance, 0.0, 0.0);
    }

}