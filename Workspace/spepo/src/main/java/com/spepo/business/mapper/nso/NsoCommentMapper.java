package com.spepo.business.mapper.nso;

import com.spepo.persistence.db.nso.TaNsoComment;
import com.spepo.presentation.dto.nso.NsoCommentDTO;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class NsoCommentMapper {

    public TaNsoComment toEntity(NsoCommentDTO dto, TaNsoComment comment) {
        comment.setId(dto.getId());
        comment.setMessage(dto.getMessage());
        comment.setPostId(dto.getPostId());

        comment.setUserNewId(dto.getUserNewId());
        comment.setUserModId(dto.getUserModId());
        comment.setDateNew(dto.getDateNew());
        comment.setDateMod(LocalDate.now());

        return comment;
    }

    public NsoCommentDTO toDTO(TaNsoComment comment, NsoCommentDTO dto) {
        dto.setId(comment.getId());
        dto.setMessage(comment.getMessage());
        dto.setPostId(comment.getPostId());

        dto.setUserNewId(comment.getUserNewId());
        dto.setUserModId(comment.getUserModId());
        dto.setDateNew(comment.getDateNew());
        dto.setDateMod(LocalDate.now());

        return dto;
    }
}
