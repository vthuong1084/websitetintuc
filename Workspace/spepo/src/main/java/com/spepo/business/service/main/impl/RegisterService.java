package com.spepo.business.service.main.impl;

import com.spepo.business.service.common.OutputAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.spepo.business.mapper.aut.AutDetailsMapper;
import com.spepo.business.mapper.aut.AutUserMapper;
import com.spepo.business.service.main.interf.IRegisterService;
import com.spepo.persistence.db.aut.TaAutDetails;
import com.spepo.persistence.db.aut.TaAutUser;
import com.spepo.persistence.repository.aut.IAutDetailRepo;
import com.spepo.persistence.repository.aut.IAutUserRepo;
import com.spepo.presentation.dto.aut.AutDetailsDTO;
import com.spepo.presentation.dto.aut.AutUserDTO;
import com.spepo.presentation.dto.main.ServiceDTO;

import java.time.LocalDate;

@Service
public class RegisterService implements IRegisterService{
	
	@Autowired
	private IAutUserRepo userRepo;

	@Autowired
	private PasswordEncoder passwordEncoder;
  
	@Autowired
	private AutUserMapper userMapper;
	
	@Autowired
	private IAutDetailRepo detailsRepo;

	@Autowired
	private AutDetailsMapper detailsMapper;

	@Override
	public ResponseEntity<?> callRegister(ServiceDTO dto) {
		OutputAPI outputAPI = new OutputAPI();
		
		TaAutUser user = this.userRepo.findByUsername(dto.getUserDTO().getUsername());

		if (user != null) {
			outputAPI.setMassage("Username exited");
		} else {
			dto.getUserDTO().setPassword(passwordEncoder.encode(dto.getUserDTO().getPassword()));
			TaAutUser taAutUser = new TaAutUser();
			taAutUser = userMapper.toEntity(dto.getUserDTO(), taAutUser);
			taAutUser = userRepo.save(taAutUser);

			outputAPI.setMassage("Register successfully");
		}

		return ResponseEntity.status(HttpStatus.OK).body(outputAPI);
	}

}
