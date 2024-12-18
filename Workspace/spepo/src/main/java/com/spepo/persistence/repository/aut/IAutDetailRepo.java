package com.spepo.persistence.repository.aut;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spepo.persistence.db.aut.TaAutDetails;

public interface IAutDetailRepo extends JpaRepository<TaAutDetails, Integer> {

}
