package com.spepo.business.service.grp.aut.impl;

import static com.spepo.def.DefSer.SV_DEL;
import static com.spepo.def.DefSer.SV_GET;
import static com.spepo.def.DefSer.SV_LIST;
import static com.spepo.def.DefSer.SV_LISTDYN;
import static com.spepo.def.DefSer.SV_MOD;
import static com.spepo.def.DefSer.SV_NEW;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.spepo.business.mapper.aut.AutRoleMapper;
import com.spepo.business.service.common.OutputAPI;
import com.spepo.business.service.grp.aut.interf.IAutRoleService;
import com.spepo.persistence.db.aut.TaAutRole;
import com.spepo.persistence.repository.aut.IAutRoleRepo;
import com.spepo.presentation.dto.aut.AutRoleDTO;
import com.spepo.presentation.dto.main.ServiceDTO;
@Service
public class AutRoleService implements IAutRoleService {
	
    @Autowired
    private IAutRoleRepo roleRepo;
    @Autowired
    private AutRoleMapper roleMapper;
    
    @Override
    public ResponseEntity<?> doService(ServiceDTO dto) {

            switch (dto.getSvName()) {
                case SV_GET:
                    return doGet(dto.getRoleDTO());
                  

                case SV_LIST:
                    return doList(new ArrayList<>());
               

                case SV_LISTDYN:
                	
                	return doListDyn(new ArrayList<>(), dto.getRoleDTO());
                    

                case SV_NEW:
                	return doNew(dto.getRoleDTO());
                    

                case SV_MOD:
                	return doMod(dto.getRoleDTO());
                   

                case SV_DEL:
                	doDel(dto.getRoleDTO());
                    break;
            }
        

        return null;
    }

    @Override
    public ResponseEntity<?> doGet(AutRoleDTO tDTO) {
    	  TaAutRole user 	= roleRepo.getById(tDTO.getId());
          tDTO			= roleMapper.toDTO(user, tDTO);

          return ResponseEntity.status(HttpStatus.OK).body(tDTO);
    }

    @Override
    public ResponseEntity<?> doList(List<AutRoleDTO> list) {
    	List<TaAutRole> roles = roleRepo.findAll();
    	 for (TaAutRole role : roles) {
    	        AutRoleDTO dto = roleMapper.toDTO(role, new AutRoleDTO());
    	        list.add(dto);
    	    }
    	   
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @Override 
    public ResponseEntity<?> doListDyn(List<AutRoleDTO> list, Object... param) {

    	for(int i = 0; i < param.length; i++) {
			Object parameter = param[i];
			if(parameter instanceof AutRoleDTO) {
				AutRoleDTO tDTO = (AutRoleDTO) parameter;
		        List<Integer> roleIdList = tDTO.getIds();
		        List<TaAutRole> roles = roleRepo.findAllById(roleIdList);
		
		        for (TaAutRole role : roles) {
	    	        AutRoleDTO dto = roleMapper.toDTO(role, new AutRoleDTO());
	    	        list.add(dto);
	    	    }
		       
			}
		}
		
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @Override
    public ResponseEntity<?> doNew(AutRoleDTO tDTO) {
    	 TaAutRole role = new TaAutRole();
    	 role = roleMapper.toEntity(tDTO, role);
         role.setDateNew(LocalDate.now());
         role = roleRepo.save(role);
         return ResponseEntity.status(HttpStatus.OK).body(roleMapper.toDTO(role, tDTO));
    }

    @Override
    public ResponseEntity<?> doMod(AutRoleDTO tDTO) {
    	 TaAutRole role = new TaAutRole();
    	 role = roleMapper.toEntity(tDTO, role);
         role = roleRepo.save(role);
         OutputAPI out = new OutputAPI();
         out.setMassage("Update success!");
         
         return ResponseEntity.status(HttpStatus.OK).body(out);
    }

    @Override
    public ResponseEntity<?> doDel(AutRoleDTO tDTO) {
    	TaAutRole role = new TaAutRole();
    	role = roleMapper.toEntity(tDTO, role);
    	roleRepo.deleteById(role.getId());
    	OutputAPI out = new OutputAPI();
        out.setMassage("Delete success!");
        
        return ResponseEntity.status(HttpStatus.OK).body(out);
    }
}
