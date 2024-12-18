package com.spepo.business.service.grp.tpy.impl;

import static com.spepo.def.DefSer.SV_DEL;
import static com.spepo.def.DefSer.SV_GET;
import static com.spepo.def.DefSer.SV_LIST;
import static com.spepo.def.DefSer.SV_LISTDYN;
import static com.spepo.def.DefSer.SV_MOD;
import static com.spepo.def.DefSer.SV_NEW;

import java.util.ArrayList;
import java.util.List;

import com.spepo.persistence.db.nso.TaNsoPost;
import com.spepo.presentation.dto.nso.NsoPostDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.spepo.business.mapper.tpy.TpyCategoryMapper;
import com.spepo.business.service.common.Authorize;
import com.spepo.business.service.common.OutputAPI;
import com.spepo.business.service.grp.tpy.interf.ITpyCategoryService;
import com.spepo.persistence.db.tpy.TaTpyCategory;
import com.spepo.persistence.repository.tpy.ITpyCategoryRepo;
import com.spepo.presentation.dto.main.ServiceDTO;
import com.spepo.presentation.dto.tpy.TpyCategoryDTO;

@Service
public class TpyCategoryService implements ITpyCategoryService {
    @Autowired
    private ITpyCategoryRepo categoryRepo;
    @Autowired
    private TpyCategoryMapper categoryMapper;
    @Override
    public ResponseEntity<?> doService(ServiceDTO dto) {


            switch (dto.getSvName()) {
                case SV_GET:
                    return doGet(dto.getCategoryDTO());

                case SV_LIST:
                    return doList(new ArrayList<>());

                case SV_LISTDYN:
                    return doListDyn(dto.getCategoryDTO().getListResult());

                case SV_NEW:
                    return doNew(dto.getCategoryDTO());

                case SV_MOD:
                    return doMod(dto.getCategoryDTO());

                case SV_DEL:
                    return doDel(dto.getCategoryDTO());
            }


        OutputAPI out = new OutputAPI();
        out.setMassage("");

        return ResponseEntity.status(HttpStatus.OK).body(out);
    }

    @Override
    public ResponseEntity<?> doGet(TpyCategoryDTO tDTO) {
        TaTpyCategory category = categoryRepo.getById(tDTO.getId());

        return ResponseEntity.status(HttpStatus.OK).body(categoryMapper.toDTO(category, tDTO));
    }

    @Override
    public ResponseEntity<?> doList(List<TpyCategoryDTO> list) {
        List<TaTpyCategory> categories = categoryRepo.findAll();


        TpyCategoryDTO categoryDTO = new TpyCategoryDTO();
        for (TaTpyCategory category : categories) {
            TpyCategoryDTO dto = categoryMapper.toDTO(category, new TpyCategoryDTO());
            list.add(dto);

        }

        return ResponseEntity.status(HttpStatus.OK).body(list);
    }


    @Override
    public ResponseEntity<?> doListDyn(List<TpyCategoryDTO> list, Object... param) {
        return null;
    }

    @Override
    public ResponseEntity<?> doNew(TpyCategoryDTO tDTO) {
        TaTpyCategory category  = new TaTpyCategory();
        category            = categoryMapper.toEntity(tDTO, category);
        category            = categoryRepo.save(category);

        OutputAPI out = new OutputAPI();
        out.setMassage("");
        return ResponseEntity.status(HttpStatus.OK).body(out);
    }

    @Override
    public ResponseEntity<?> doMod(TpyCategoryDTO tDTO) {
        return null;
    }

    @Override
    public ResponseEntity<?> doDel(TpyCategoryDTO tDTO) {
        return null;
    }
}
