package com.kata.bank.controller;

import com.kata.bank.model.Operation;
import com.kata.bank.service.OperationException;
import com.kata.bank.service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/operation")
public class OperationController {

    @Autowired
    private OperationService operationService;

    @PostMapping("/deposit")
    public void deposit(
            @RequestParam Integer accountId,
            @RequestParam Double amount) throws OperationException {

        operationService.deposit(accountId, amount);
    }

    @PostMapping("/withdrawal")
    public void withdrawal(
            @RequestParam Integer accountId,
            @RequestParam Double amount) throws OperationException {

        operationService.withdrawal(accountId, amount);
    }

    @GetMapping({"", "/"})
    public List<Operation> history(
            @RequestParam Integer accountId) {

        return operationService.getHistory(accountId);
    }

}
