package com.spepo.business.service.main.interf;

import com.spepo.presentation.dto.main.ServiceDTO;

import java.util.List;

import org.springframework.http.ResponseEntity;

public interface IGrpService<T> {
	ResponseEntity<?> doService(ServiceDTO dto);
    ResponseEntity<?> doGet(T tDTO);
    ResponseEntity<?> doList(List<T> list);
    ResponseEntity<?> doListDyn(List<T> list, Object... param);
    ResponseEntity<?> doNew(T tDTO);
    ResponseEntity<?> doMod(T tDTO);
    ResponseEntity<?> doDel(T tDTO);
    
}
