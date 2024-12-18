package com.spepo.business.mapper.aut;

import java.time.LocalDate;

import org.springframework.stereotype.Component;

import com.spepo.persistence.db.aut.TaAutDetails;
import com.spepo.presentation.dto.aut.AutDetailsDTO;
@Component
public class AutDetailsMapper {
	
	public TaAutDetails toEntity(AutDetailsDTO detailsDTO, TaAutDetails detailsEnt) {
		detailsEnt.setId(detailsDTO.getId());
		detailsEnt.setUserId(detailsDTO.getUserId());
		detailsEnt.setInf01(detailsDTO.getInf01());
		detailsEnt.setInf02(detailsDTO.getInf02());
		detailsEnt.setInf03(detailsEnt.getInf03());

		detailsEnt.setUserNewId(detailsDTO.getUserNewId());
		detailsEnt.setUserModId(detailsDTO.getUserModId());
		detailsEnt.setDateNew(detailsDTO.getDateNew());
		detailsEnt.setDateMod(LocalDate.now());

		return detailsEnt;
	}

	public AutDetailsDTO toDTO(TaAutDetails detailsEnt, AutDetailsDTO detailsDTO) {
		detailsDTO.setId(detailsEnt.getId());
		detailsDTO.setUserId(detailsDTO.getUserId());
		detailsDTO.setInf01(detailsDTO.getInf01());
		detailsDTO.setInf02(detailsDTO.getInf02());
		detailsEnt.setInf03(detailsEnt.getInf03());

		detailsDTO.setUserNewId(detailsEnt.getUserNewId());
		detailsDTO.setUserModId(detailsEnt.getUserModId());
		detailsDTO.setDateNew(detailsEnt.getDateNew());
		detailsDTO.setDateMod(LocalDate.now());

		return detailsDTO;
	}
}
