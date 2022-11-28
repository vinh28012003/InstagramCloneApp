package com.vinhtran.instagramclone.Service;

import com.vinhtran.instagramclone.Entity.Post;
import com.vinhtran.instagramclone.Repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PostService {
    @Autowired
    PostRepo postRepo;

    @Autowired
    UserServices userServices;

    public Post savePostData(Post post) {
        post.setUserName(userServices.getUserData(post.getUserId()).getUserName());
        return postRepo.save(post);
    }

    public ArrayList<Post> retrivePostFromDB() {
        return postRepo.findAll();
    }
}
