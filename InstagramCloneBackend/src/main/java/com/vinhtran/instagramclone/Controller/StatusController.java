package com.vinhtran.instagramclone.Controller;

import com.vinhtran.instagramclone.Entity.Status;
import com.vinhtran.instagramclone.Service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/status")
public class StatusController {

    @Autowired
    StatusService statusService;

    @PostMapping("")
    private Status submitStatus(@RequestBody Status status) {
        return statusService.saveDataIntoDB(status);
    }

    @GetMapping("")
    private ArrayList<Status> getAllStatus() {
        return statusService.getStatusData();
    }
}
