package com.spepo.business.service.grp.aut.impl;

import static com.spepo.def.DefSer.SV_DEL;
import static com.spepo.def.DefSer.SV_GET;
import static com.spepo.def.DefSer.SV_LIST;
import static com.spepo.def.DefSer.SV_LISTDYN;
import static com.spepo.def.DefSer.SV_MOD;
import static com.spepo.def.DefSer.SV_NEW;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.spepo.business.mapper.aut.AutDetailsMapper;
import com.spepo.business.service.common.OutputAPI;
import com.spepo.business.service.grp.aut.interf.IAutDetailsService;
import com.spepo.persistence.db.aut.TaAutDetails;
import com.spepo.persistence.db.aut.TaAutRole;
import com.spepo.persistence.repository.aut.IAutDetailRepo;
import com.spepo.presentation.dto.aut.AutDetailsDTO;
import com.spepo.presentation.dto.aut.AutRoleDTO;
import com.spepo.presentation.dto.main.ServiceDTO;

@Service
public class AutDetailsService implements IAutDetailsService {

	@Autowired
	private IAutDetailRepo detailsRepo;
	@Autowired
	private AutDetailsMapper detailsMapper;

	@Override
	public ResponseEntity<?> doService(ServiceDTO dto) {

		switch (dto.getSvName()) {
		case SV_GET:
			return doGet(dto.getDetailsDTO());

		case SV_LIST:
			return doList(new ArrayList<>());

		case SV_LISTDYN:

			return doListDyn(new ArrayList<>(), dto.getRoleDTO());

		case SV_NEW:
			return doNew(dto.getDetailsDTO());

		case SV_MOD:
			return doMod(dto.getDetailsDTO());

		case SV_DEL:
			doDel(dto.getDetailsDTO());
			break;
		}

		return null;
	}

	@Override
	public ResponseEntity<?> doGet(AutDetailsDTO tDTO) {
		TaAutDetails details = detailsRepo.getById(tDTO.getUserId());
		tDTO = detailsMapper.toDTO(details, tDTO);

		return ResponseEntity.status(HttpStatus.OK).body(tDTO);
	}

	@Override
	public ResponseEntity<?> doList(List<AutDetailsDTO> list) {
		List<TaAutDetails> details = detailsRepo.findAll();    	
    	 for (TaAutDetails detail : details) {
    		 AutDetailsDTO dto = detailsMapper.toDTO(detail, new AutDetailsDTO());
    	        list.add(dto);
    	    }
    	   
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }


	@Override
	public ResponseEntity<?> doListDyn(List<AutDetailsDTO> list, Object... param) {

    	for(int i = 0; i < param.length; i++) {
			Object parameter = param[i];
			if(parameter instanceof AutRoleDTO) {
				AutDetailsDTO tDTO = (AutDetailsDTO) parameter;
		        List<Integer> detailsIdList = tDTO.getIds();
		        List<TaAutDetails> details = detailsRepo.findAllById(detailsIdList);
		
		        for (TaAutDetails detail : details) {
		        	AutDetailsDTO dto = detailsMapper.toDTO(detail, new AutDetailsDTO());
	    	        list.add(dto);
	    	    }
		       
			}
		}
		
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }


	@Override
	public ResponseEntity<?> doNew(AutDetailsDTO tDTO) {
		TaAutDetails details = new TaAutDetails();
		tDTO.setDateNew(LocalDate.now());
		details = detailsMapper.toEntity(tDTO, details);
		details = detailsRepo.save(details);
         return ResponseEntity.status(HttpStatus.OK).body(detailsMapper.toDTO(details, tDTO));
    }

	@Override
	public ResponseEntity<?> doMod(AutDetailsDTO tDTO) {
		TaAutDetails details = new TaAutDetails();
		details = detailsMapper.toEntity(tDTO, details);
		details = detailsRepo.save(details);
         OutputAPI out = new OutputAPI();
         out.setMassage("Update success!");
         
         return ResponseEntity.status(HttpStatus.OK).body(out);
    }


	@Override
	public ResponseEntity<?> doDel(AutDetailsDTO tDTO) {
		TaAutDetails details = new TaAutDetails();
		details = detailsMapper.toEntity(tDTO, details);
    	detailsRepo.deleteById(details.getId());
    	OutputAPI out = new OutputAPI();
        out.setMassage("Delete success!");
        
        return ResponseEntity.status(HttpStatus.OK).body(out);
    }
}
