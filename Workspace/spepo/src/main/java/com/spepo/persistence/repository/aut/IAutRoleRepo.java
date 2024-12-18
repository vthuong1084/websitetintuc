package com.spepo.persistence.repository.aut;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spepo.persistence.db.aut.TaAutRole;

@Repository
public interface IAutRoleRepo  extends JpaRepository<TaAutRole, Integer> {
	TaAutRole findByName(String name);
//	Optional<TaAutRole> findByName(String name);
}
