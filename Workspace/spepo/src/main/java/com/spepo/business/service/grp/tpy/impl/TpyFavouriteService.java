package com.spepo.business.service.grp.tpy.impl;

import com.spepo.business.service.grp.tpy.interf.ITpyFavouriteService;
import com.spepo.presentation.dto.main.ServiceDTO;
import com.spepo.presentation.dto.tpy.TpyFavouriteDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TpyFavouriteService implements ITpyFavouriteService {
    @Override
    public ResponseEntity<?> doService(ServiceDTO dto) {
        return null;
    }

    @Override
    public ResponseEntity<?> doGet(TpyFavouriteDTO tDTO) {
        return null;
    }

    @Override
    public ResponseEntity<?> doList(List<TpyFavouriteDTO> list) {
        return null;
    }

    @Override
    public ResponseEntity<?> doListDyn(List<TpyFavouriteDTO> list, Object... param) {
        return null;
    }

    @Override
    public ResponseEntity<?> doNew(TpyFavouriteDTO tDTO) {
        return null;
    }

    @Override
    public ResponseEntity<?> doMod(TpyFavouriteDTO tDTO) {
        return null;
    }

    @Override
    public ResponseEntity<?> doDel(TpyFavouriteDTO tDTO) {
        return null;
    }
}
