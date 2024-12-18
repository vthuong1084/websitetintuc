package com.spepo.business.service.main.interf;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;

public interface IFileService {
    String saveFile(String uploadDir, String fileName, MultipartFile multipartFile);
}
