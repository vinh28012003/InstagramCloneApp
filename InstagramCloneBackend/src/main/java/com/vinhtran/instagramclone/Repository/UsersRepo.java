package com.vinhtran.instagramclone.Repository;


import com.vinhtran.instagramclone.Entity.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepo extends CrudRepository<Users, Integer> {

    Users save(Users user);
    Users findByUserId(String userId);

}
