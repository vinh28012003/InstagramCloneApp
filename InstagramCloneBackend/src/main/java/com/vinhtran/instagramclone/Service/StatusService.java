package com.vinhtran.instagramclone.Service;


import com.vinhtran.instagramclone.Entity.Status;
import com.vinhtran.instagramclone.Repository.StatusRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class StatusService {

    @Autowired
    StatusRepo statusRepo;

    @Autowired
    UserServices userServices;

    public Status saveDataIntoDB(Status status) {
        status.setUserName(userServices.getUserData(status.getUserId()).getUserName());
        return statusRepo.save(status);
    }
    public ArrayList<Status> getStatusData() {
        return statusRepo.findAll();
    }


}
