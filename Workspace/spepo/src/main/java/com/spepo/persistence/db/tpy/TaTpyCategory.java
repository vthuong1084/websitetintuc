package com.spepo.persistence.db.tpy;

import javax.persistence.*;

import com.spepo.persistence.db.main.BaseDB;

@Entity
@Table(name = "TA_TPY_CATEGORY")
public class TaTpyCategory  extends BaseDB{
	@Column(name = "I_ID")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "T_Name")
    private String name;
	
	@Column(name = "T_Code")
    private String code;

	
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

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	
}
