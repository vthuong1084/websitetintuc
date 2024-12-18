package com.spepo.business.mapper.tpy;

import com.spepo.persistence.db.tpy.TaTpyCategory;
import com.spepo.presentation.dto.tpy.TpyCategoryDTO;
import org.springframework.stereotype.Component;

@Component
public class TpyCategoryMapper {
    public TpyCategoryDTO toDTO(TaTpyCategory category, TpyCategoryDTO dto) {
        dto.setId(category.getId());
        dto.setName(category.getName());

        return dto;
    }

    public TaTpyCategory toEntity(TpyCategoryDTO dto, TaTpyCategory category) {
        category.setId(dto.getId());
        category.setName(dto.getName());
        return category;
    }
}
