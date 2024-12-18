package com.spepo.business.service.common;

import com.spepo.presentation.dto.aut.AutUserDTO;

public class Authorize {

    public static boolean canAuthorize(AutUserDTO userDTO) {
        if (userDTO.getRole() == 2) {
            return true;
        }

        return false;
    }
}
