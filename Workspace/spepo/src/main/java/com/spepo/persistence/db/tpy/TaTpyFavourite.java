package com.spepo.persistence.db.tpy;

import javax.persistence.*;

import com.spepo.persistence.db.main.BaseDB;

@Entity
@Table(name = "TA_TPY_FAVOURITE")
public class TaTpyFavourite  extends BaseDB{
	@Column(name = "I_ID")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer col_I_ID;

	@Column(name = "I_Post")
    private Integer postId;
	
	@Column(name = "T_Type")
    private Integer type;

	public Integer getCol_I_ID() {
		return col_I_ID;
	}

	public void setCol_I_ID(Integer col_I_ID) {
		this.col_I_ID = col_I_ID;
	}

	public Integer getPostId() {
		return postId;
	}

	public void setPostId(Integer postId) {
		this.postId = postId;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}


	
}
