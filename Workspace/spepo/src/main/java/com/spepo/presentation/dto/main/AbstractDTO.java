package com.spepo.presentation.dto.main;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class AbstractDTO<T> {
	private Integer id;
	private Integer userNewId;
	private LocalDate dateNew;
	private Integer userModId;
	private LocalDate dateMod;
	private List<T> listResult = new ArrayList<>();
	private List<Integer> ids = new ArrayList<>();
	
	
	
	public List<Integer> getIds() {
		return ids;
	}
	public void setIds(List<Integer> ids) {
		this.ids = ids;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public Integer getUserNewId() {
		return userNewId;
	}
	public void setUserNewId(Integer userNewId) {
		this.userNewId = userNewId;
	}
	public LocalDate getDateNew() {
		return dateNew;
	}
	public void setDateNew(LocalDate dateNew) {
		this.dateNew = dateNew;
	}
	public Integer getUserModId() {
		return userModId;
	}
	public void setUserModId(Integer userModId) {
		this.userModId = userModId;
	}
	public LocalDate getDateMod() {
		return dateMod;
	}
	public void setDateMod(LocalDate dateMod) {
		this.dateMod = dateMod;
	}
	public List<T> getListResult() {
		return listResult;
	}
	public void setListResult(List<T> listResult) {
		this.listResult = listResult;
	}
	
	
}
