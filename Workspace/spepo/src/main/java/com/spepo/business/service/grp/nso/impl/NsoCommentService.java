package com.spepo.business.service.grp.nso.impl;

import com.spepo.business.mapper.nso.NsoCommentMapper;
import com.spepo.business.service.common.Authorize;
import com.spepo.business.service.common.OutputAPI;
import com.spepo.business.service.grp.nso.interf.INsoCommentService;
import com.spepo.persistence.db.nso.TaNsoComment;
import com.spepo.persistence.repository.nso.INsoCommentRepo;
import com.spepo.presentation.dto.main.ServiceDTO;
import com.spepo.presentation.dto.nso.NsoCommentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.spepo.def.DefSer.*;
import static com.spepo.def.DefSer.SV_DEL;

@Service
public class NsoCommentService implements INsoCommentService {
    @Autowired
    private INsoCommentRepo commentRepo;
    @Autowired
    private NsoCommentMapper commentMapper;
    @Override
    public ResponseEntity<?> doService(ServiceDTO dto) {

        if (Authorize.canAuthorize(dto.getUserDTO())) {
            switch (dto.getSvName()) {
                case SV_GET:
                    return doGet(dto.getCommentDTO());

                case SV_LIST:
                    return doList(dto.getCommentDTO().getListResult());

                case SV_LISTDYN:
                    return doListDyn(dto.getCommentDTO().getListResult());

                case SV_NEW:
                    return doNew(dto.getCommentDTO());

                case SV_MOD:
                    return doMod(dto.getCommentDTO());

                case SV_DEL:
                    return doDel(dto.getCommentDTO());
            }
        }

        OutputAPI out = new OutputAPI();
        out.setMassage("");

        return ResponseEntity.status(HttpStatus.OK).body(out);
    }

    @Override
    public ResponseEntity<?> doGet(NsoCommentDTO tDTO) {
        TaNsoComment comment = commentRepo.getById(tDTO.getId());

        return ResponseEntity.status(HttpStatus.OK).body(commentMapper.toDTO(comment, tDTO));
    }

    @Override
    public ResponseEntity<?> doList(List<NsoCommentDTO> list) {
        List<TaNsoComment> comments = commentRepo.findAll();

        NsoCommentDTO commentDTO = new NsoCommentDTO();
        for (TaNsoComment comment : comments) {
            list.add(commentMapper.toDTO(comment, commentDTO));
        }

        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @Override
    public ResponseEntity<?> doListDyn(List<NsoCommentDTO> list, Object... param) {
        return null;
    }

    @Override
    public ResponseEntity<?> doNew(NsoCommentDTO tDTO) {
        TaNsoComment comment = new TaNsoComment();
        comment = commentMapper.toEntity(tDTO, comment);
        comment = commentRepo.save(comment);

        OutputAPI out = new OutputAPI();
        out.setMassage("");

        return ResponseEntity.status(HttpStatus.OK).body(out);
    }

    @Override
    public ResponseEntity<?> doMod(NsoCommentDTO tDTO) {
        TaNsoComment comment = new TaNsoComment();
        comment = commentMapper.toEntity(tDTO, comment);
        comment = commentRepo.save(comment);

        OutputAPI out = new OutputAPI();
        out.setMassage("");

        return ResponseEntity.status(HttpStatus.OK).body(out);
    }

    @Override
    public ResponseEntity<?> doDel(NsoCommentDTO tDTO) {
        TaNsoComment comment = new TaNsoComment();
        comment = commentMapper.toEntity(tDTO, comment);
        commentRepo.delete(comment);

        OutputAPI out = new OutputAPI();
        out.setMassage("");

        return ResponseEntity.status(HttpStatus.OK).body(out);
    }
}
