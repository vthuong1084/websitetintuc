package com.spepo.presentation.dto.aut;

import com.spepo.presentation.dto.main.AbstractDTO;

public class AutRoleDTO  extends AbstractDTO<AutRoleDTO>{

	private String name;
	private String status;
	
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
