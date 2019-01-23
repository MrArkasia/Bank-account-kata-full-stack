package com.kata.bank.controller;

import com.kata.bank.service.ServicesConfig;
import org.hamcrest.Matchers;
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
public class OperationControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void shouldReturnAccountWithBalanceDeposited() throws Exception {

        // Given
        // Account rest service
        ResultActions createResultActions = mvc.perform(post("/account"));
        String idStr = createResultActions.andReturn().getResponse().getContentAsString();
        Integer id = new Integer(idStr);

        // When
        ResultActions depositResultActions = mvc.perform(post("/operation/deposit")
                .param("accountId", id.toString())
                .param("amount", "100"));

        ResultActions getResultActions = mvc.perform(get("/account")
                .param("accountId", id.toString()));

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
        ResultActions createResultActions = mvc.perform(post("/account"));
        String idStr = createResultActions.andReturn().getResponse().getContentAsString();
        Integer id = new Integer(idStr);
        mvc.perform(post("/operation/deposit")
                .param("accountId", id.toString())
                .param("amount", "100"));

        // When
        ResultActions withdrawalResultActions = mvc.perform(post("/operation/withdrawal")
                .param("accountId", id.toString())
                .param("amount", "30"));

        ResultActions getResultActions = mvc.perform(get("/account")
                .param("accountId", id.toString()));

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
        ResultActions createResultActions = mvc.perform(post("/account"));
        String idStr = createResultActions.andReturn().getResponse().getContentAsString();
        Integer accountId = new Integer(idStr);

        mvc.perform(post("/operation/deposit")
                .param("accountId", accountId.toString())
                .param("amount", "100"));

        mvc.perform(post("/operation/deposit")
                .param("accountId", accountId.toString())
                .param("amount", "100"));

        // When
        ResultActions resultActions = mvc.perform(get("/operation")
                .param("accountId", accountId.toString()));

        // Then
        resultActions
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString().matches("^[" +
                "{\"id\":1,\"date\":[0-9]+,\"type\":\"DEPOSIT\",\"amount\":100.0,\"balance\":100.0}," +
                "{\"id\":2,\"date\":[0-9]+,\"type\":\"DEPOSIT\",\"amount\":100.0,\"balance\":200.0}" +
                "]$");
    }

}