package com.spepo.presentation.dto.tpy;

import com.spepo.presentation.dto.aut.AutRoleDTO;
import com.spepo.presentation.dto.main.AbstractDTO;

public class TpyCategoryDTO extends AbstractDTO<TpyCategoryDTO>{

	private String name;
	private String code;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String Code) {
		this.code = code;
	}
	
	
}
