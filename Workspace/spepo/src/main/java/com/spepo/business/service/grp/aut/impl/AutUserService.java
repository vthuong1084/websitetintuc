package com.spepo.business.service.grp.aut.impl;

import com.spepo.business.mapper.aut.AutUserMapper;
import com.spepo.business.service.common.Authorize;
import com.spepo.business.service.common.OutputAPI;
import com.spepo.business.service.grp.aut.interf.IAutUserService;
import com.spepo.persistence.db.aut.TaAutRole;
import com.spepo.persistence.db.aut.TaAutUser;
import com.spepo.persistence.repository.aut.IAutUserRepo;
import com.spepo.presentation.dto.main.ServiceDTO;
import com.spepo.presentation.dto.aut.AutRoleDTO;
import com.spepo.presentation.dto.aut.AutUserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static com.spepo.def.DefSer.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.MediaType;
@Service
public class AutUserService implements IAutUserService {

	@Autowired
	private IAutUserRepo userRepo;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private AutUserMapper userMapper;

	@Override
	public ResponseEntity<?> doService(ServiceDTO dto) {
			switch (dto.getSvName()) {
			case SV_GET:
				return doGet(dto.getUserDTO());
			case SV_LIST:
				return doList(new ArrayList<>());
			case SV_LISTDYN:
				return doListDyn(new ArrayList<>(), dto.getUserDTO());

			case SV_NEW:
				return doNew(dto.getUserDTO());

			case SV_MOD:
				return doMod(dto.getUserDTO());

			case SV_DEL:
				doDel(dto.getUserDTO());

			}

		
		return null;
	}

	@Override
	public ResponseEntity<?> doGet(AutUserDTO tDTO) {
		TaAutUser user = userRepo.getById(tDTO.getId());
		tDTO = userMapper.toDTO(user, tDTO);

		return ResponseEntity.status(HttpStatus.OK).body(tDTO);
	}

	@Override
	public ResponseEntity<?> doList(List<AutUserDTO> list) {
		List<TaAutUser> users = userRepo.findAll();

		for (TaAutUser user : users) {
			AutUserDTO dto = userMapper.toDTO(user, new AutUserDTO());
			list.add(dto);
		}

		return ResponseEntity.status(HttpStatus.OK).body(list);
	}

	@Override
	public ResponseEntity<?> doListDyn(List<AutUserDTO> list, Object... param) {
		for (int i = 0; i < param.length; i++) {
			Object parameter = param[i];
			if (parameter instanceof AutUserDTO) {
				AutUserDTO tDTO = (AutUserDTO) parameter;
				List<Integer> userIdList = tDTO.getIds();
				List<TaAutUser> users = userRepo.findAllById(userIdList);

				for (TaAutUser user : users) {
					AutUserDTO dto = userMapper.toDTO(user, new AutUserDTO());
					list.add(dto);
				}

			}
		}
		return ResponseEntity.status(HttpStatus.OK).body(list);

	}

	@Override
	public ResponseEntity<?> doNew(AutUserDTO tDTO) {
		TaAutUser user = new TaAutUser();
		tDTO.setPassword(passwordEncoder.encode(tDTO.getPassword()));

		user = userMapper.toEntity(tDTO, user);
		user = userRepo.save(user);
		
		AutUserDTO userDto = new AutUserDTO();
		userDto = userMapper.toDTO(user, userDto);
        
		return ResponseEntity.status(HttpStatus.OK).body(userDto);
	}

	@Override
	public ResponseEntity<?> doMod(AutUserDTO tDTO) {
		TaAutUser user = new TaAutUser();
		user = userMapper.toEntity(tDTO, user);
		user = userRepo.save(user);
		OutputAPI out = new OutputAPI();
		out.setMassage("Update success!");

		return ResponseEntity.status(HttpStatus.OK).body(out);
	}

	@Override
	public ResponseEntity<?> doDel(AutUserDTO tDTO) {
		TaAutUser user = new TaAutUser();
		user = userMapper.toEntity(tDTO, user);
		userRepo.deleteById(user.getId());
		OutputAPI out = new OutputAPI();
		out.setMassage("Delete success!");

		return ResponseEntity.status(HttpStatus.OK).body(out);
	}

}
