
package com.vinhtran.instagramclone.Controller;



import com.vinhtran.instagramclone.Entity.Users;
import com.vinhtran.instagramclone.Service.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserServices userServices;

    @PostMapping("")
    private  boolean submitUser(@RequestBody Users users) {
        userServices.saveUserData(users);
        return true;
    }

    @GetMapping("/{userId}")
    private Users getUserDetails(@PathVariable("userId") String userId) {

        return userServices.getUserData(userId);
    }
}

