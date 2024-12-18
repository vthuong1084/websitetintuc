package com.spepo.business.mapper.aut;

import com.spepo.persistence.db.aut.TaAutUser;
import com.spepo.presentation.dto.aut.AutUserDTO;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Date;

@Component
public class AutUserMapper {

    public TaAutUser toEntity(AutUserDTO userDTO, TaAutUser userEnt) {
        userEnt.setId(userDTO.getId());
        userEnt.setStatus(userDTO.getStatus());
        userEnt.setRoleid(userDTO.getRole());
        userEnt.setUsername(userDTO.getUsername());
        userEnt.setPassword(userDTO.getPassword());
        userEnt.setEmail(userDTO.getEmail());
        userEnt.setTel(userDTO.getTel());
        userEnt.setBirthday(userDTO.getBirthday());
        userEnt.setAvatar(userDTO.getAvatar());

        return userEnt;
    }

    public AutUserDTO toDTO(TaAutUser userEnt, AutUserDTO userDTO) {
    	  userDTO.setId(userEnt.getId());
    	  userDTO.setStatus(userEnt.getStatus());
    	  userDTO.setRole(userEnt.getRoleid());
    	  userDTO.setUsername(userEnt.getUsername());
    	  userDTO.setPassword(userEnt.getPassword());
          userDTO.setEmail(userEnt.getEmail());
          userDTO.setTel(userEnt.getTel());
          userDTO.setBirthday(userEnt.getBirthday());
          userDTO.setAvatar(userEnt.getAvatar());

        return userDTO;
    }
}
