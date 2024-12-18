package com.spepo.persistence.db.aut;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spepo.def.DefEnt;
import com.spepo.persistence.db.main.BaseDB;

@Entity
@Table(name = DefEnt.TA_AUT_ROLE)
public class TaAutRole extends BaseDB {
	@Column(name = "I_ID")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "T_Name")
	private String name;

	@Column(name = "I_Status")
	private String status;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	

}
