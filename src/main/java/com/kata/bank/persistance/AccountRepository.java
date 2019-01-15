package com.kata.bank.persistance;

import com.kata.bank.model.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface AccountRepository extends CrudRepository<Account, Long> {

    Account save(Account account);

    List<Account> findAll();
}
