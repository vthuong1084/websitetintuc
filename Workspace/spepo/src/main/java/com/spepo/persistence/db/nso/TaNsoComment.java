package com.spepo.persistence.db.nso;

import javax.persistence.*;

import com.spepo.persistence.db.main.BaseDB;

@Entity
@Table(name = "TA_NSO_COMMENT")
public class TaNsoComment  extends BaseDB{
	@Column(name = "I_ID")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "T_Message")
    private String message;
	
	@Column(name = "I_Post")
    private Integer postId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

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
