package com.spepo.persistence.repository.aut;

import com.spepo.persistence.db.aut.TaAutUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAutUserRepo extends JpaRepository<TaAutUser, Integer> {
	 TaAutUser findByUsername(String name);
	
}
