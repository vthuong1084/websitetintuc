-- --------------------------------------------------------------------------
-- ------------------------TPY--------------------------------------------------

DROP TABLE IF EXISTS `TA_TPY_CATEGORY`;
DROP TABLE IF EXISTS `TA_TPY_FAVORITE`;


CREATE TABLE `TA_TPY_CATEGORY` (
       `I_ID` 	int(11)         NOT NULL AUTO_INCREMENT,
       `T_Name` varchar(100)    NOT NULL,
       `T_Code` varchar(50)     DEFAULT NULL,

       `D_Date_New`     datetime    DEFAULT NULL COMMENT 'dt new',
       `D_Date_Mod`     datetime    DEFAULT NULL COMMENT 'dt mod',
       `I_Aut_User_New` int(11)     DEFAULT NULL COMMENT 'id user new ',
       `I_Aut_User_Mod` int(11)     DEFAULT NULL COMMENT '1id user mod ',

       PRIMARY KEY (`I_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `TA_TPY_FAVOURITE` (
    `I_ID`   int(11) NOT NULL AUTO_INCREMENT,
    `I_Post` int(11) NOT NULL,
    `T_Type` int(11) DEFAULT NULL,

    `D_Date_New`     datetime   DEFAULT NULL COMMENT 'dt new',
    `D_Date_Mod`     datetime   DEFAULT NULL COMMENT 'dt mod',
    `I_Aut_User_New` int(11)    DEFAULT NULL COMMENT 'id user new ',
    `I_Aut_User_Mod` int(11)    DEFAULT NULL COMMENT 'id user mod ',
    PRIMARY KEY (`I_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



ALTER TABLE `TA_TPY_FAVOURITE`  ADD CONSTRAINT fk_favorite_post FOREIGN KEY (`I_Post`)         REFERENCES `TA_NSO_POST`(`I_ID`);
ALTER TABLE `TA_TPY_FAVOURITE`  ADD CONSTRAINT fk_favorite_user FOREIGN KEY (`I_Aut_User_New`) REFERENCES `TA_AUT_USER`(`I_ID`);
ALTER TABLE `TA_TPY_CATEGORY`   ADD CONSTRAINT fk_category_user FOREIGN KEY (`I_Aut_User_New`) REFERENCES `TA_AUT_USER`(`I_ID`);


