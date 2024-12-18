package com.spepo.business.service.grp.nso.impl;

import com.spepo.business.mapper.nso.NsoPostMapper;
import com.spepo.business.service.common.Authorize;
import com.spepo.business.service.common.OutputAPI;
import com.spepo.business.service.grp.nso.interf.INsoPostService;
import com.spepo.persistence.db.aut.TaAutUser;
import com.spepo.persistence.db.nso.TaNsoComment;
import com.spepo.persistence.db.nso.TaNsoPost;
import com.spepo.persistence.repository.nso.INsoCommentRepo;
import com.spepo.persistence.repository.nso.INsoPostRepo;
import com.spepo.presentation.dto.aut.AutUserDTO;
import com.spepo.presentation.dto.main.ServiceDTO;
import com.spepo.presentation.dto.nso.NsoPostDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static com.spepo.def.DefSer.*;

@Service
public class NsoPostService implements INsoPostService {
    @Autowired
    private INsoPostRepo postRepo;
    @Autowired
    private INsoCommentRepo commentRepo;
    @Autowired
    private NsoPostMapper postMapper;

    @Override
    public ResponseEntity<?> doService(ServiceDTO dto) {

//        if (Authorize.canAuthorize(dto.getUserDTO())) {
            switch (dto.getSvName()) {
                case SV_GET:
                    return doGet(dto.getPostDTO());

                case SV_LIST:
                    return doList(new ArrayList<>());

                case SV_LISTDYN:
                    return doListDyn(new ArrayList<>(), dto.getPostDTO());

                case SV_NEW:
                    return doNew(dto.getPostDTO());

                case SV_MOD:
                    return doMod(dto.getPostDTO());

                case SV_DEL:
                    return doDel(dto.getPostDTO());
            }
//        }


        OutputAPI out = new OutputAPI();
        out.setMassage("");

        return ResponseEntity.status(HttpStatus.OK).body(out);
    }

    @Override
    public ResponseEntity<?> doGet(NsoPostDTO tDTO) {
        TaNsoPost post = postRepo.getById(tDTO.getId());

        return ResponseEntity.status(HttpStatus.OK).body( postMapper.toDTO(post, tDTO));
    }

    @Override
    public ResponseEntity<?> doList(List<NsoPostDTO> list) {
        List<TaNsoPost> posts = postRepo.findAll();

        for (TaNsoPost post : posts) {
            NsoPostDTO dto = postMapper.toDTO(post, new NsoPostDTO());
            list.add(dto);
        }

        return ResponseEntity.status(HttpStatus.OK).body(list);

    }

    @Override
    public ResponseEntity<?> doListDyn(List<NsoPostDTO> list, Object... param) {
        for (int i = 0; i < param.length; i++) {
            Object parameter = param[i];
            if (parameter instanceof NsoPostDTO) {
                NsoPostDTO tDTO = (NsoPostDTO) parameter;
                Integer idList = tDTO.getCategory();
                List<TaNsoPost> posts = postRepo.findAllByCategory(idList);

                for (TaNsoPost post : posts) {
                    NsoPostDTO dto = postMapper.toDTO(post, new NsoPostDTO());
                    list.add(dto);
                }

            }
        }
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @Override
    public ResponseEntity<?> doNew(NsoPostDTO tDTO) {
        TaNsoPost post  = new TaNsoPost();
        post            = postMapper.toEntity(tDTO, post);
        post            = postRepo.save(post);

        NsoPostDTO postDTO = new NsoPostDTO();
        postDTO = postMapper.toDTO(post, postDTO);

        return ResponseEntity.status(HttpStatus.OK).body(postDTO);
    }

    @Override
    public ResponseEntity<?> doMod(NsoPostDTO tDTO) {
        TaNsoPost post  = new TaNsoPost();
        post            = postRepo.save(postMapper.toEntity(tDTO, post));

        OutputAPI out = new OutputAPI();
        out.setMassage("Modify Successfully");
        return ResponseEntity.status(HttpStatus.OK).body(out);
    }

    @Override
    public ResponseEntity<?> doDel(NsoPostDTO tDTO) {
        TaNsoPost post = new TaNsoPost();
        List<TaNsoComment> comments = commentRepo.findByPostId(tDTO.getId());

        for (TaNsoComment comment : comments) {
            commentRepo.delete(comment);
        }

        postRepo.delete(postMapper.toEntity(tDTO, post));

        OutputAPI out = new OutputAPI();
        out.setMassage("Delete Successfully");
        return ResponseEntity.status(HttpStatus.OK).body(out);
    }
}
