package com.vinhtran.instagramclone.Repository;

import com.vinhtran.instagramclone.Entity.Post;
import com.vinhtran.instagramclone.Entity.Status;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface PostRepo extends CrudRepository<Post, Integer> {

    Post save(Post post);
    ArrayList<Post> findAll();
}
