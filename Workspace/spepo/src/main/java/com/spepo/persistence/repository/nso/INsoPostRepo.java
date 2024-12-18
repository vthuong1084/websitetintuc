package com.spepo.persistence.repository.nso;

import com.spepo.persistence.db.nso.TaNsoPost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface INsoPostRepo extends JpaRepository<TaNsoPost, Integer> {
    List<TaNsoPost> findByCategory(String category);
    TaNsoPost findByStatus01(Integer stat01);
    TaNsoPost findByAuthor(String author);
    List<TaNsoPost> findAllByCategory(Integer category);
}
