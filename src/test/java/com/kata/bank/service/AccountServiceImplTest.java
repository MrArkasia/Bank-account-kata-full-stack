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
public class AccountServiceImplTest {

    @Autowired
    private AccountService accountService;

    @Autowired
    private OperationService operationService;

    @Before
    public void purgeDataBase() {
        accountService.deleteAll();
    }

    @Test
    public void shouldReturnNewAccount() {

        // Given
        // an accountService

        // When
        Integer accountId = accountService.create();
        BigDecimal balance = accountService.getBalance(accountId);

        // Then
        assertThat(balance)
                .isNotNull()
                .isEqualByComparingTo("0.0");
    }

    @Test
    public void shouldDeleteAccount() {

        // Given
        // an accountService
        Integer accountIdToDelete = accountService.create();

        // When
        accountService.delete(accountIdToDelete);
        Account accountDeleted = accountService.find(accountIdToDelete);

        // Then
        assertThat(accountDeleted).isNull();
    }

    @Test
    public void shouldReturnAccountHistory() throws OperationException {

        // Given
        Integer accountId = accountService.create();
        operationService.deposit(accountId, new BigDecimal(100.0));
        operationService.withdrawal(accountId, new BigDecimal(20.0));
        operationService.deposit(accountId, new BigDecimal(50.5));
        operationService.withdrawal(accountId, new BigDecimal(40.0));

        // When
        List<Operation> operations = operationService.getHistory(accountId);

        // Then
        assertThat(operations)
                .isNotNull()
                .hasSize(4);
    }

    @Test
    public void shouldReturnAllAccounts() {

        // Given
        accountService.create();
        accountService.create();
        accountService.create();

        // When
        Iterable<Account> accounts = accountService.findAll();

        // Then
        assertThat(accounts)
                .isNotNull()
                .hasSize(3);
    }

}