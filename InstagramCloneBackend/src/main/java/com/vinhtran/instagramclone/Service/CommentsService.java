package com.vinhtran.instagramclone.Service;

import com.vinhtran.instagramclone.Entity.Comments;
import com.vinhtran.instagramclone.Repository.CommentsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CommentsService {

    @Autowired
    UserServices userServices;
    @Autowired
    CommentsRepo commentsRepo;
    public Comments saveCommentsToDB(Comments comment) {
        comment.setUserName(userServices.getUserData(comment.getUserId()).getUserName());
        return commentsRepo.save(comment);
    }

    public ArrayList<Comments> getAllCommentsForPost(String postId) {
        return commentsRepo.findAllByPostId(postId);
    }
}
