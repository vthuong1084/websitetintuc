package com.spepo.persistence.db.aut;

import javax.persistence.*;

import com.spepo.def.DefEnt;
import com.spepo.def.DefSer;
import com.spepo.persistence.db.main.BaseDB;

@Entity
@Table(name = DefEnt.TA_AUT_DETAILS)
public class TaAutDetails extends BaseDB {
    @Column(name = "I_ID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "I_AUT_USER")
    private Integer userId;

    @Column(name = "T_Info_01")
    private String inf01;

    @Column(name = "T_Info_02")
    private String inf02;

    @Column(name = "T_Info_03")
    private String inf03;

    public void setInf01(String inf01){
        this.inf01 = inf01;
    }

    public String getInf01(){
        return inf01;
    }

    public void setInf02(String inf02){
        this.inf02 = inf02;
    }

    public String getInf02(){
        return inf02;
    }
    public void setInf03(String inf03){
        this.inf03 = inf03;
    }

    public String getInf03(){
        return inf03;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }


}
