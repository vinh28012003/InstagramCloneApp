package com.vinhtran.instagramclone.Repository;

import com.vinhtran.instagramclone.Entity.Comments;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface CommentsRepo extends CrudRepository<Comments, Integer> {

    Comments save(Comments comment);
    ArrayList<Comments> findAllByPostId(String id);
}
