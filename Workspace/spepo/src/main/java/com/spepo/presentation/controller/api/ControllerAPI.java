package com.spepo.presentation.controller.api;
import com.spepo.business.service.main.interf.IFileService;
import org.springframework.util.StringUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.spepo.business.service.main.interf.IService;
import com.spepo.presentation.dto.main.ServiceDTO;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://localhost:3000")
@RestController()
@RequestMapping(value = "/api")
public class ControllerAPI {
	
	@Autowired
	private IService service;

	@Autowired
	private IFileService fileService;

//	API = {SVClass: "", SVName: "", userID: , entID: }
	@PostMapping()
	public ResponseEntity<?> getAPI(@RequestBody ServiceDTO dto){
		return service.doService(dto);
	}
	@PostMapping("/savefile")
	public ResponseEntity<String> getFile( @RequestParam("file") MultipartFile file) {
			String uploadDir = "D:/VKU_SE2B/HKI-N2/DoAnCoSo2/SPEPO/Workspace/spepo_ui/public/images";
			String fileName = StringUtils.cleanPath(file.getOriginalFilename());
			String path = fileService.saveFile(uploadDir, fileName,file);
	    	return ResponseEntity.ok(path);
	}

}
