package com.spepo.persistence.repository.tpy;

import com.spepo.persistence.db.tpy.TaTpyCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITpyCategoryRepo extends JpaRepository<TaTpyCategory, Integer> {
}
