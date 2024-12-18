package com.spepo.business.service.main.interf;

import com.spepo.presentation.dto.main.ServiceDTO;
import com.spepo.presentation.dto.aut.AutUserDTO;
import org.springframework.http.ResponseEntity;

public interface IService {
	ResponseEntity<?> doService(ServiceDTO dto);
}
