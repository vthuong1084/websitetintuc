package com.spepo.presentation.dto.aut;

import com.spepo.presentation.dto.main.AbstractDTO;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class AutUserDTO{

	private Integer id;
	private Integer status;
	private Integer role;
	private String username;
	private String password;
	private String email;
	private String tel;
	private LocalDate birthday;
	private String avatar;

	private List<AutUserDTO> listResult = new ArrayList<>();
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

	public String getAvatar() {
		return avatar;
	}
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public Integer getRole() {
		return role;
	}
	public void setRole(Integer role) {
		this.role = role;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}

	public LocalDate getBirthday() {
		return birthday;
	}

	public void setBirthday(LocalDate birthday) {
		this.birthday = birthday;
	}
}
