-- --------------------------------------------------------------------------
-- ------------------------NSO--------------------------------------------------

DROP TABLE IF EXISTS `TA_NSO_POST`;
DROP TABLE IF EXISTS `TA_NSO_COMMENT`;

CREATE TABLE `TA_NSO_POST` (
       `I_ID` 		int(11) NOT NULL AUTO_INCREMENT,
       `T_Title`    varchar(1000) DEFAULT NULL,

       `I_Status_01` int(11) DEFAULT NULL COMMENT 'status by admin: accept or reject',
       `I_Status_02` int(11) DEFAULT NULL COMMENT 'status by user: public or private',

       `T_Code` 	varchar(100)    DEFAULT NULL,
       `I_Category` int(2)          DEFAULT NULL COMMENT 'type of post like: event, news, evaluation',

       `D_Date_Publ` datetime       DEFAULT NULL COMMENT 'dt đăng',
       `T_Author`    varchar(50)    DEFAULT NULL COMMENT 'tác giả',

       T_Short_Description  text DEFAULT NULL,
       `T_Thumbnail` 		text DEFAULT NULL,

       `T_Content_01` 		text DEFAULT NULL,
       `T_Content_02` 		text DEFAULT NULL,
       `T_Content_03` 		text DEFAULT NULL,
       `T_Content_04`		text DEFAULT NULL,
       `T_Content_05`		text DEFAULT NULL,
       `T_Content_06`	 	text DEFAULT NULL,
       `T_Content_07`	 	text DEFAULT NULL,
       `T_Content_08`	 	text DEFAULT NULL,
       `T_Content_09`	 	text DEFAULT NULL,
       `T_Content_10` 		text DEFAULT NULL COMMENT 'T_Comment use in adm mode',

       `D_Date_New`     datetime    DEFAULT NULL COMMENT 'dt new',
       `D_Date_Mod`     datetime    DEFAULT NULL COMMENT 'dt mod',
       `I_Aut_User_New` int(2)      DEFAULT NULL COMMENT 'id user new ',
       `I_Aut_User_Mod` int(2)      DEFAULT NULL COMMENT 'id user mod ',

       PRIMARY KEY (`I_ID`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `TA_NSO_COMMENT` (
      `I_ID` 		int(11) NOT NULL AUTO_INCREMENT,
      `I_Post`  	int(11) DEFAULT null COMMENT 'bài post',

      `T_Message`   text DEFAULT null COMMENT 'nội dung',

      `D_Date_New` datetime DEFAULT NULL COMMENT 'dt new',
      `D_Date_Mod` datetime DEFAULT NULL COMMENT 'dt mod',
      `I_Aut_User_New` int(11) DEFAULT NULL COMMENT 'id user new ',
      `I_Aut_User_Mod` int(11) DEFAULT NULL COMMENT 'id user mod ',

      PRIMARY KEY (`I_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `TA_NSO_COMMENT`    ADD CONSTRAINT fk_comment_post  FOREIGN KEY (`I_Post`)          REFERENCES `TA_NSO_POST`(`I_ID`);
ALTER TABLE `TA_NSO_COMMENT`    ADD CONSTRAINT fk_comment_user  FOREIGN KEY (`I_Aut_User_New`)  REFERENCES `TA_AUT_USER`(`I_ID`);
ALTER TABLE `TA_NSO_POST`       ADD CONSTRAINT fk_post_user     FOREIGN KEY (`I_Aut_User_New`)  REFERENCES `TA_AUT_USER`(`I_ID`);
ALTER TABLE `TA_NSO_POST`       ADD CONSTRAINT fk_post_category FOREIGN KEY (`I_Category`)      REFERENCES `TA_TPY_CATEGORY`(`I_ID`);
