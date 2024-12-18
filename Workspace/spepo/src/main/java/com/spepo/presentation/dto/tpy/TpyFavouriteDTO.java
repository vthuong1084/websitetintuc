package com.spepo.presentation.dto.tpy;

import com.spepo.presentation.dto.aut.AutRoleDTO;
import com.spepo.presentation.dto.main.AbstractDTO;

public class TpyFavouriteDTO extends AbstractDTO<TpyFavouriteDTO>{

	private Integer I_Post;
	private String T_Type;
	public Integer getI_Post() {
		return I_Post;
	}
	public void setI_Post(Integer i_Post) {
		I_Post = i_Post;
	}
	public String getT_Type() {
		return T_Type;
	}
	public void setT_Type(String t_Type) {
		T_Type = t_Type;
	}
	
	
}
