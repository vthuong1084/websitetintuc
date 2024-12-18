package com.spepo.persistence.db.main;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;

public class BaseDB {

	
	@Column(name = "I_Aut_User_New")
	private Integer userNewId;
	
	@Column(name = "I_Aut_User_Mod")
	private Integer userModId;
	
	@Column(name = "D_Date_New")
	private LocalDate dateNew;
	
	@Column(name = "D_Date_Mod")
	private LocalDate dateMod;

	public Integer getUserNewId() {
		return userNewId;
	}

	public void setUserNewId(Integer userNewId) {
		this.userNewId = userNewId;
	}

	public Integer getUserModId() {
		return userModId;
	}

	public void setUserModId(Integer userModId) {
		this.userModId = userModId;
	}

	public LocalDate getDateNew() {
		return dateNew;
	}

	public void setDateNew(LocalDate dateNew) {
		this.dateNew = dateNew;
	}

	public LocalDate getDateMod() {
		return dateMod;
	}

	public void setDateMod(LocalDate dateMod) {
		this.dateMod = dateMod;
	}

	

	

}
