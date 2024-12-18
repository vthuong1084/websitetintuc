package com.spepo.persistence.repository.nso;

import com.spepo.persistence.db.nso.TaNsoComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface INsoCommentRepo extends JpaRepository<TaNsoComment, Integer> {
    List<TaNsoComment> findByPostId(int id);

}
