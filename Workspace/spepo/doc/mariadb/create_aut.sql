-- --------------------------------------------------------------------------
-- -------------------------- AUT------------------------------------------------

DROP TABLE IF EXISTS `TA_AUT_DETAIL`;  COMMENT 'THÔNG TIN CHI TIẾT CỦA NGƯỜI DÙNG',
DROP TABLE IF EXISTS `TA_AUT_ROLE`;    COMMENT 'PHÂN QUYỀN',
DROP TABLE IF EXISTS `TA_AUT_USER`;    COMMENT 'TÀI KHOẢN',

CREATE TABLE `TA_AUT_ROLE` (
           `I_ID`     int(11) NOT NULL AUTO_INCREMENT,
           `T_Name`   varchar(100) DEFAULT NULL,
           `I_Status` int(2) NOT NULL,

           `D_Date_New`     datetime    DEFAULT NULL COMMENT 'dt new',
           `D_Date_Mod`     datetime    DEFAULT NULL COMMENT 'dt mod',
           `I_Aut_User_New` int(11)     DEFAULT NULL COMMENT 'id user new ',
           `I_Aut_User_Mod` int(11)     DEFAULT NULL COMMENT 'id user mod ',

           PRIMARY KEY (`I_ID`)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

CREATE TABLE `TA_AUT_DETAILS` (
          `I_ID` 		  int(11) NOT NULL AUTO_INCREMENT,
          `I_AUT_USER`    int(11) DEFAULT NULL,

          T_Info_01 varchar(255) DEFAULT NULL,
          T_Info_02 varchar(255) DEFAULT NULL,
          T_Info_03 varchar(255) DEFAULT NULL,

          `D_Date_New`      datetime    DEFAULT NULL COMMENT 'dt new',
          `D_Date_Mod`      datetime    DEFAULT NULL COMMENT 'dt mod',
          `I_Aut_User_New`  int(11)     DEFAULT NULL COMMENT 'id user new ',
          `I_Aut_User_Mod`  int(11)     DEFAULT NULL COMMENT 'id user mod ',

          PRIMARY KEY (`I_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `TA_AUT_USER` (
           `I_ID` 	    int(11) NOT NULL AUTO_INCREMENT,
           `I_Status`   int(11) DEFAULT null COMMENT 'tình trạng',
           `I_Role`     int(11) DEFAULT NULL COMMENT 'loại role',

           `T_Name`     varchar(100)  DEFAULT NULL,
           `T_Pass`     varchar(255)  DEFAULT NULL,

           `T_Avatar`   varchar(100)  DEFAULT NULL COMMENT 'ảnh',
           `D_Birthday` datetime      DEFAULT NULL,
           `T_Email`    varchar(100)  DEFAULT NULL COMMENT 'email',
           `T_Tel`      varchar(100)  DEFAULT NULL COMMENT 'tel',

           `D_Date_New`      datetime    DEFAULT NULL COMMENT 'dt new',
           `D_Date_Mod`      datetime    DEFAULT NULL COMMENT 'dt mod',
           `I_Aut_User_New`  int(11)     DEFAULT NULL COMMENT 'id user new ',
           `I_Aut_User_Mod`  int(11)     DEFAULT NULL COMMENT 'id user mod ',

           PRIMARY KEY (`I_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

ALTER TABLE `TA_AUT_USER`       ADD CONSTRAINT fk_user_role     FOREIGN KEY (`I_Role`)      REFERENCES `TA_AUT_ROLE`(`I_ID`);
ALTER TABLE `TA_AUT_DETAILS`    ADD CONSTRAINT fk_detail_user   FOREIGN KEY (`I_AUT_USER`)  REFERENCES `TA_AUT_USER`(`I_ID`);
