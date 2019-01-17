package com.kata.bank.service;

interface OperationService {

    void deposit(Integer accountId, Double amount) throws OperationException;

    void withdrawal(Integer accountId, Double amount) throws OperationException;

}
