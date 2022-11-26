package com.vinhtran.instagramclone.Service;

import com.vinhtran.instagramclone.Entity.Users;
import com.vinhtran.instagramclone.Repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices {
    @Autowired
    UsersRepo  userRepo;

    public Users saveUserData (Users user) {
        userRepo.save(user);
        return new Users();
    }

    public Users getUserData(String userId) {

        return userRepo.findByUserId(userId);
    }
}
