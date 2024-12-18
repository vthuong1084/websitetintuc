package com.spepo.presentation.dto.aut;

import com.spepo.presentation.dto.main.AbstractDTO;

public class AutDetailsDTO extends AbstractDTO<AutDetailsDTO>{

	private Integer userId;
	private String inf01;
	private String inf02;
	private String inf03;

	public void setInf01(String inf01){
		this.inf01 = inf01;
	}
	public String getInf01(){
		return inf01;
	}
	public void setInf02(String inf02){
		this.inf02 = inf02;
	}
	public String getInf02(){
		return inf02;
	}

	public void setInf03(String inf03){
		this.inf03 = inf03;
	}
    public String getInf03(){
		return inf03;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}


	
}
