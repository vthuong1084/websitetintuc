package com.spepo.presentation.dto.main;

import com.spepo.presentation.dto.aut.AutDetailsDTO;
import com.spepo.presentation.dto.aut.AutRoleDTO;
import com.spepo.presentation.dto.aut.AutUserDTO;
import com.spepo.presentation.dto.nso.NsoCommentDTO;
import com.spepo.presentation.dto.nso.NsoPostDTO;
import com.spepo.presentation.dto.tpy.TpyCategoryDTO;
import com.spepo.presentation.dto.tpy.TpyFavouriteDTO;

public class ServiceDTO {
	private 	String 			svClass;
	private  	String 			svName;
	private 	Integer			userID;
	private 	AutUserDTO 		userDTO;
	private 	AutRoleDTO		roleDTO;
	private 	AutDetailsDTO	detailsDTO;
	private 	NsoPostDTO		postDTO;
	private 	NsoCommentDTO	commentDTO;
	private 	TpyCategoryDTO	categoryDTO;
	private 	TpyFavouriteDTO	favouriteDTO;

	public String getSvClass() {
		return svClass;
	}

	public void setSvClass(String svClass) {
		this.svClass = svClass;
	}

	public String getSvName() {
		return svName;
	}

	public void setSvName(String svName) {
		this.svName = svName;
	}

	public Integer getUserID() {
		return userID;
	}

	public void setUserID(Integer userID) {
		this.userID = userID;
	}

	public AutUserDTO getUserDTO() {
		return userDTO;
	}

	public void setUserDTO(AutUserDTO userDTO) {
		this.userDTO = userDTO;
	}

	public AutRoleDTO getRoleDTO() {
		return roleDTO;
	}

	public void setRoleDTO(AutRoleDTO roleDTO) {
		this.roleDTO = roleDTO;
	}

	public AutDetailsDTO getDetailsDTO() {
		return detailsDTO;
	}

	public void setDetailsDTO(AutDetailsDTO detailsDTO) {
		this.detailsDTO = detailsDTO;
	}

	public NsoPostDTO getPostDTO() {
		return postDTO;
	}

	public void setPostDTO(NsoPostDTO postDTO) {
		this.postDTO = postDTO;
	}

	public NsoCommentDTO getCommentDTO() {
		return commentDTO;
	}

	public void setCommentDTO(NsoCommentDTO commentDTO) {
		this.commentDTO = commentDTO;
	}

	public TpyCategoryDTO getCategoryDTO() {
		return categoryDTO;
	}

	public void setCategoryDTO(TpyCategoryDTO categoryDTO) {
		this.categoryDTO = categoryDTO;
	}

	public TpyFavouriteDTO getFavouriteDTO() {
		return favouriteDTO;
	}

	public void setFavouriteDTO(TpyFavouriteDTO favouriteDTO) {
		this.favouriteDTO = favouriteDTO;
	}
}
