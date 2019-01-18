package com.kata.bank.controller;

import com.kata.bank.service.ServicesConfig;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
@Import(ServicesConfig.class)
public class AccountControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void create() throws Exception {

        // Given
        // Account rest service

        // When
        ResultActions resultActions = mvc.perform(
                get("/account/create").contentType(MediaType.TEXT_PLAIN));

        // Then
        resultActions
                .andExpect(status().isOk())
                .andExpect(content().string(Matchers.containsString("1")));
    }

}