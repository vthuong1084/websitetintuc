package com.spepo.business.mapper.aut;

import java.time.LocalDate;

import org.springframework.stereotype.Component;

import com.spepo.persistence.db.aut.TaAutRole;
import com.spepo.presentation.dto.aut.AutRoleDTO;
@Component
public class AutRoleMapper {
	public TaAutRole toEntity(AutRoleDTO roleDTO, TaAutRole roleEnt) {
	    roleEnt.setId(roleDTO.getId());
		roleEnt.setName(roleDTO.getName());
		roleEnt.setStatus(roleDTO.getStatus());

		roleEnt.setUserNewId(roleDTO.getUserNewId());
		roleEnt.setUserModId(roleDTO.getUserModId());
		roleEnt.setDateNew(roleDTO.getDateNew());
		roleEnt.setDateMod(LocalDate.now());

		return roleEnt;
	}

	public AutRoleDTO toDTO(TaAutRole roleEnt, AutRoleDTO roleDTO) {
		roleDTO.setId(roleEnt.getId());
		roleDTO.setName(roleEnt.getName());
		roleDTO.setStatus(roleEnt.getStatus());

		roleDTO.setUserNewId(roleEnt.getUserNewId());
		roleDTO.setUserModId(roleEnt.getUserModId());
		roleDTO.setDateNew(roleEnt.getDateNew());
		roleDTO.setDateMod(LocalDate.now());

		return roleDTO;
	}
}
