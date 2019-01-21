package com.kata.bank.controller;

import com.kata.bank.service.AccountService;
import com.kata.bank.service.ServicesConfig;
import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
@Import(ServicesConfig.class)
public class AccountControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private AccountService accountService;

    @Before
    public void purgeDataBase() {
        accountService.deleteAll();
    }

    @Test
    public void shouldReturnNewAccountId() throws Exception {

        // Given
        // Account rest service

        // When
        ResultActions resultActions = mvc.perform(post("/account/create"));

        // Then
        resultActions
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString().matches("^[0-9]+$");
    }

    @Test
    public void shouldReturnAccount() throws Exception {

        // Given
        // Account rest service
        ResultActions createResultActions = mvc.perform(post("/account/create"));
        String idStr = createResultActions.andReturn().getResponse().getContentAsString();
        Integer id = new Integer(idStr);

        // When
        ResultActions resultActions = mvc.perform(get("/account/get/")
                .param("id", id.toString()));

        // Then
        resultActions
                .andExpect(status().isOk())
                .andExpect(content().string(Matchers.containsString("{\"id\":" + id + ",\"balance\":0.0}")));
    }

    @Test
    public void shouldReturnAccountWithBalanceDeposited() throws Exception {

        // Given
        // Account rest service
        ResultActions createResultActions = mvc.perform(post("/account/create"));
        String idStr = createResultActions.andReturn().getResponse().getContentAsString();
        Integer id = new Integer(idStr);

        // When
        ResultActions depositResultActions = mvc.perform(post("/account/deposit")
                .param("id", id.toString())
                .param("amount", "100"));

        ResultActions getResultActions = mvc.perform(get("/account/get")
                .param("id", id.toString()));

        // Then
        depositResultActions
                .andExpect(status().isOk());

        getResultActions
                .andExpect(status().isOk())
                .andExpect(content().string(Matchers.containsString("{\"id\":" + id + ",\"balance\":100.0}")));
    }

    @Test
    public void shouldReturnAccountWithBalanceWithdrawal() throws Exception {

        // Given
        // Account rest service
        ResultActions createResultActions = mvc.perform(post("/account/create"));
        String idStr = createResultActions.andReturn().getResponse().getContentAsString();
        Integer id = new Integer(idStr);
        mvc.perform(post("/account/deposit")
                .param("id", id.toString())
                .param("amount", "100"));

        // When
        ResultActions withdrawalResultActions = mvc.perform(post("/account/withdrawal")
                .param("id", id.toString())
                .param("amount", "30"));

        ResultActions getResultActions = mvc.perform(get("/account/get")
                .param("id", id.toString()));

        // Then
        withdrawalResultActions
                .andExpect(status().isOk());

        getResultActions
                .andExpect(status().isOk())
                .andExpect(content().string(Matchers.containsString("{\"id\":" + id + ",\"balance\":70.0}")));
    }

    @Test
    public void shouldReturnAccountHistory() throws Exception {

        // Given
        // Account rest service
        ResultActions createResultActions = mvc.perform(post("/account/create"));
        String idStr = createResultActions.andReturn().getResponse().getContentAsString();
        Integer id = new Integer(idStr);

        mvc.perform(post("/account/deposit")
                .param("id", id.toString())
                .param("amount", "100"));

        mvc.perform(post("/account/deposit")
                .param("id", id.toString())
                .param("amount", "100"));

        // When
        ResultActions resultActions = mvc.perform(get("/account/history")
                .param("id", id.toString()));

        // Then
        resultActions
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString().matches("^[" +
                "{\"id\":1,\"date\":[0-9]+,\"type\":\"DEPOSIT\",\"amount\":100.0,\"balance\":100.0}," +
                "{\"id\":2,\"date\":[0-9]+,\"type\":\"DEPOSIT\",\"amount\":100.0,\"balance\":200.0}" +
                "]$");
    }

}