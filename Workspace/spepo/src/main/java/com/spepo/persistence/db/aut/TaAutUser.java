package com.spepo.persistence.db.aut;

import javax.persistence.*;

import com.spepo.def.DefEnt;
import com.spepo.persistence.db.main.BaseDB;

import java.time.LocalDate;

@Entity
@Table(name = DefEnt.TA_AUT_USER)
public class TaAutUser {

    @Column(name = "I_ID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name = "T_Name")
    private String username;

    @Column(name = "T_Pass")
    private String password;
    
    @Column(name="I_Status")
   	private Integer status;
    
    @Column(name="I_Role")
   	private Integer roleId;
	@Column(name = "T_Email")
	private String email;

	@Column(name = "T_Tel")
	private String tel;

	@Column(name = "D_Birthday")
	private LocalDate birthday;

	@Column(name = "T_Avatar")
	private String avatar;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	public String getAvatar() {
		return avatar;
	}
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getRoleid() {
		return roleId;
	}

	public void setRoleid(Integer roleid) {
		this.roleId = roleid;
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
