package com.kata.bank.controller;

import com.kata.bank.model.Operation;
import com.kata.bank.service.OperationException;
import com.kata.bank.service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/operation")
@CrossOrigin(origins = "http://localhost:8080")
public class OperationController {

    @Autowired
    private OperationService operationService;

    @PostMapping("/deposit")
    public Integer deposit(
            @RequestParam Integer accountId,
            @RequestParam BigDecimal amount) throws OperationException {

        return operationService.deposit(accountId, amount);
    }

    @PostMapping("/withdrawal")
    public Integer withdrawal(
            @RequestParam Integer accountId,
            @RequestParam BigDecimal amount) throws OperationException {

        return operationService.withdrawal(accountId, amount);
    }

    @GetMapping({"", "/"})
    public List<Operation> history(
            @RequestParam Integer accountId) {

        return operationService.getHistory(accountId);
    }

}
