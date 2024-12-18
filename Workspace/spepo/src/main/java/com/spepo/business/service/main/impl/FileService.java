package com.spepo.business.service.main.impl;

import com.spepo.business.service.main.interf.IFileService;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.http.ResponseEntity;
import org.springframework.core.io.Resource;

@Service
public class FileService implements IFileService {
    @Override
    public String saveFile(String uploadDir, String fileName, MultipartFile multipartFile) {
        Path uploadPath = Paths.get(uploadDir);

        try {
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }
            Path filePath = uploadPath.resolve(fileName);

            // Kiểm tra xem tên file đã tồn tại chưa
            if (Files.exists(filePath)) {
                String newFileName = generateUniqueFileName(fileName);
                filePath = uploadPath.resolve(newFileName);
            }

            try (InputStream inputStream = multipartFile.getInputStream()) {
                Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
                System.out.println("File saved successfully at: " + filePath);
                String path = "/images/" + filePath.getFileName(); // Đây có thể là đường dẫn URL đến file
                return path;
            }
        } catch (IOException e) {
            System.err.println("Could not save file: " + fileName);
            e.printStackTrace();
            return null;
        }
    }
    private String generateUniqueFileName(String fileName) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss");
        String timestamp = now.format(formatter);

        int lastIndex = fileName.lastIndexOf('.');
        String name = fileName.substring(0, lastIndex); // Lấy phần tên file trước phần mở rộng
        String extension = fileName.substring(lastIndex); // Lấy phần mở rộng của file

        return name + "_" + timestamp + extension;
    }


}