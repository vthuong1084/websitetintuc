package com.spepo.persistence.db.nso;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.spepo.persistence.db.main.BaseDB;

@Entity
@Table(name = "TA_NSO_POST")
public class TaNsoPost  extends BaseDB{
	@Column(name = "I_ID")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "T_Title")
    private String title;
	
	@Column(name = "I_Status_01")
    private Integer status01;
	
	@Column(name = "I_Status_02")
    private Integer status02;
	
	@Column(name = "T_Code")
    private String code;
	
	@Column(name = "I_Category")
    private Integer category;
	
	@Column(name = "D_Date_Publ")
    private LocalDate datePubl;
	
	@Column(name = "T_Author")
    private String author;
	
	@Column(name = "T_Short_Description")
    private String shortdescription;
	
	@Column(name = "T_Thumbnail")
    private String thumbnail;
	
	@Column(name = "T_Content_01")
    private String content01;
	
	@Column(name = "T_Content_02")
    private String content02;
	
	@Column(name = "T_Content_03")
    private String content03;
	
	@Column(name = "T_Content_04")
    private String content04;
	
	@Column(name = "T_Content_05")
    private String content05;
	
	@Column(name = "T_Content_06")
    private String content06;
	
	@Column(name = "T_Content_07")
    private String content07;



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Integer getStatus01() {
		return status01;
	}

	public void setStatus01(Integer status01) {
		this.status01 = status01;
	}

	public Integer getStatus02() {
		return status02;
	}

	public void setStatus02(Integer status02) {
		this.status02 = status02;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Integer getCategory() {
		return category;
	}

	public void setCategory(Integer category) {
		this.category = category;
	}

	public LocalDate getDatePubl() {
		return datePubl;
	}

	public void setDatePubl(LocalDate datePubl) {
		this.datePubl = datePubl;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getShortdescription() {
		return shortdescription;
	}

	public void setShortdescription(String shortdescription) {
		this.shortdescription = shortdescription;
	}

	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

	public String getContent01() {
		return content01;
	}

	public void setContent01(String content01) {
		this.content01 = content01;
	}

	public String getContent02() {
		return content02;
	}

	public void setContent02(String content02) {
		this.content02 = content02;
	}

	public String getContent03() {
		return content03;
	}

	public void setContent03(String content03) {
		this.content03 = content03;
	}

	public String getContent04() {
		return content04;
	}

	public void setContent04(String content04) {
		this.content04 = content04;
	}

	public String getContent05() {
		return content05;
	}

	public void setContent05(String content05) {
		this.content05 = content05;
	}

	public String getContent06() {
		return content06;
	}

	public void setContent06(String content06) {
		this.content06 = content06;
	}

	public String getContent07() {
		return content07;
	}

	public void setContent07(String content07) {
		this.content07 = content07;
	}

	

}
