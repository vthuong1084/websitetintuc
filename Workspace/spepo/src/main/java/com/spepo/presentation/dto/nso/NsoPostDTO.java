package com.spepo.presentation.dto.nso;

import java.time.LocalDate;

import com.spepo.presentation.dto.main.AbstractDTO;

public class NsoPostDTO extends AbstractDTO<NsoPostDTO>{

	private String title;
	
	private Integer status01;
	private Integer status02;
	private String code;
	private Integer category;
	private LocalDate datePubl;
	private String author;
	
	private String shortdescription;
	private String thumbnail;
	
	private String content01;
	private String content02;
	private String content03;
	private String content04;
	private String content05;
	private String content06;
	private String content07;
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
