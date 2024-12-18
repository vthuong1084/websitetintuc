package com.spepo.business.mapper.nso;

import com.spepo.persistence.db.nso.TaNsoPost;
import com.spepo.presentation.dto.nso.NsoPostDTO;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class NsoPostMapper {
	 public TaNsoPost toEntity(NsoPostDTO dto, TaNsoPost post) {
	        post.setId(dto.getId());
	        
	        post.setTitle(dto.getTitle());
	        
	        post.setStatus01(dto.getStatus01());
	        post.setStatus02(dto.getStatus02());
	        
	        post.setCode(dto.getCode());
			post.setThumbnail(dto.getThumbnail());
	        
	        post.setCategory(dto.getCategory());
	        
	        post.setDatePubl(dto.getDatePubl());
	        
	        post.setAuthor(dto.getAuthor());
	        post.setShortdescription(dto.getShortdescription());
			post.setThumbnail(dto.getThumbnail());
	        
	        post.setContent01(dto.getContent01());
	        post.setContent02(dto.getContent02());
	        post.setContent03(dto.getContent03());
	        post.setContent04(dto.getContent04());
	        post.setContent05(dto.getContent05());
	        post.setContent06(dto.getContent06());
	        post.setContent07(dto.getContent07());

			post.setUserNewId(dto.getUserNewId());
			post.setUserModId(dto.getUserModId());
			post.setDateNew(dto.getDateNew());
			post.setDateMod(LocalDate.now());
	        
	        return post;
	    }

	    public NsoPostDTO toDTO(TaNsoPost post, NsoPostDTO dto) {
			dto.setId(post.getId());

			dto.setTitle(post.getTitle());

			dto.setStatus01(post.getStatus01());
			dto.setStatus02(post.getStatus02());

			dto.setCode(post.getCode());

			dto.setCategory(post.getCategory());

			dto.setDatePubl(post.getDatePubl());

			dto.setThumbnail(post.getThumbnail());
			dto.setAuthor(post.getAuthor());
			dto.setShortdescription(post.getShortdescription());
			dto.setThumbnail(post.getThumbnail());

			dto.setContent01(post.getContent01());
			dto.setContent02(post.getContent02());
			dto.setContent03(post.getContent03());
			dto.setContent04(post.getContent04());
			dto.setContent05(post.getContent05());
			dto.setContent06(post.getContent06());
			dto.setContent07(post.getContent07());

			dto.setUserNewId(post.getUserNewId());
			dto.setUserModId(post.getUserModId());
			dto.setDateNew(post.getDateNew());
			dto.setDateMod(LocalDate.now());

	        return dto;
	    }

}
