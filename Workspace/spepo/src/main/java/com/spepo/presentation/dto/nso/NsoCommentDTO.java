package com.spepo.presentation.dto.nso;

import com.spepo.presentation.dto.main.AbstractDTO;

public class NsoCommentDTO extends AbstractDTO<NsoCommentDTO>{

	private String message;
	private Integer postId;
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Integer getPostId() {
		return postId;
	}
	public void setPostId(Integer postId) {
		this.postId = postId;
	}
	
}
