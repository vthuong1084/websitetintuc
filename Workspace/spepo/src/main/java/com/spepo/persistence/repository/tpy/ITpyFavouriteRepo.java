package com.spepo.persistence.repository.tpy;

import com.spepo.persistence.db.tpy.TaTpyFavourite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITpyFavouriteRepo extends JpaRepository<TaTpyFavourite, Integer> {
}
