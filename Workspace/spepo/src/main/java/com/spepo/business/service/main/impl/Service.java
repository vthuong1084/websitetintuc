package com.spepo.business.service.main.impl;

import com.spepo.business.service.grp.aut.interf.IAutDetailsService;
import com.spepo.business.service.grp.aut.interf.IAutRoleService;
import com.spepo.business.service.grp.aut.interf.IAutUserService;
import com.spepo.business.service.grp.nso.interf.INsoCommentService;
import com.spepo.business.service.grp.nso.interf.INsoPostService;
import com.spepo.business.service.grp.tpy.interf.ITpyCategoryService;
import com.spepo.business.service.grp.tpy.interf.ITpyFavouriteService;
import com.spepo.business.service.main.interf.ILoginService;
import com.spepo.business.service.main.interf.IRegisterService;
import com.spepo.business.service.main.interf.IService;
import com.spepo.def.DefSer;
import com.spepo.presentation.dto.main.ServiceDTO;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@org.springframework.stereotype.Service
public class Service implements IService {

	@Autowired
	private IAutUserService 		userService;
	
	@Autowired
	private IAutRoleService 		roleService;
	
	@Autowired
	private IAutDetailsService 		detailsService;
	
	@Autowired
	private INsoPostService			postService;
	
	@Autowired
	private INsoCommentService 		commentService;
	
	@Autowired
	private ITpyCategoryService categoryService;
	
	@Autowired
	private ITpyFavouriteService favouriteService;

	@Autowired
	private ILoginService loginService;

	@Autowired
	private IRegisterService registerService;
	
	@Override
	public ResponseEntity<?> doService(ServiceDTO dto) {
		try {
			switch (dto.getSvClass()) {
			
				case DefSer.AUT_USER_SERVICE: {
					return userService.doService(dto);
				}
				
				case DefSer.AUT_ROLE_SERVICE: {
					return roleService.doService(dto);
				}
				
				case DefSer.AUT_DETAILS_SERVICE: {
					return detailsService.doService(dto);
				}
				
				case DefSer.NSO_POST_SERVICE: {
					return postService.doService(dto);
				}
				
				case DefSer.NSO_COMMENT_SERVICE: {
					return commentService.doService(dto);
				}
				
				case DefSer.TPY_CATEGORY_SERVICE: {
					return categoryService.doService(dto);
				}
				
				case DefSer.TPY_FAVOURITE_SERVICE: {
					return favouriteService.doService(dto);
				}

				case DefSer.LOGIN_SERVICE: {
					return loginService.callLogin(dto);
				}

				case DefSer.REGISTER_SERVICE: {
					return registerService.callRegister(dto);
				}

				default:
					throw new IllegalStateException("Unexpected value: " + dto.getSvClass());
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
}
