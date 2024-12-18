package com.spepo.business.service.main.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.spepo.business.mapper.aut.AutUserMapper;
import com.spepo.business.service.common.OutputAPI;
import com.spepo.business.service.main.interf.ILoginService;
import com.spepo.persistence.db.aut.TaAutUser;
import com.spepo.persistence.repository.aut.IAutUserRepo;
import com.spepo.presentation.dto.aut.AutUserDTO;
import com.spepo.presentation.dto.main.ServiceDTO;

@Service
public class LoginService implements ILoginService {

	@Autowired
	private IAutUserRepo userRepo;

	@Autowired
	private PasswordEncoder passwordEncoder;
  
	@Autowired
	private AutUserMapper userMapper;


	@Override
	public ResponseEntity<?> callLogin(ServiceDTO dto) {
		TaAutUser autUser = this.userRepo.findByUsername(dto.getUserDTO().getUsername());
		OutputAPI out = new OutputAPI();

		if (autUser == null || !passwordEncoder.matches(dto.getUserDTO().getPassword(), autUser.getPassword())) {
			out.setMassage("Error Username or Password");
			return ResponseEntity.status(HttpStatus.OK).body(out);
		}
		
		if (autUser.getStatus() != 1) {
			out.setMassage("Invalid User");
			return ResponseEntity.status(HttpStatus.OK).body(out);
		} 

		AutUserDTO user = new AutUserDTO();
		user = userMapper.toDTO(autUser, user);

		return ResponseEntity.status(HttpStatus.OK).body(user);
	}

}
