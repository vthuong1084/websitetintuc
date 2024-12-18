package com.spepo.business.service.main.interf;

import org.springframework.http.ResponseEntity;

import com.spepo.presentation.dto.main.ServiceDTO;

public interface ILoginService  {

	ResponseEntity<?> callLogin(ServiceDTO dto);
	
}
