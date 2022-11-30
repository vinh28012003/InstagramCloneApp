package com.vinhtran.instagramclone.Controller;


import com.vinhtran.instagramclone.Entity.Comments;
import com.vinhtran.instagramclone.Service.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/comments")
public class CommentsController {

    @Autowired
    CommentsService commentsService;

    @PostMapping("")
    private Comments saveComment(@RequestBody Comments comment) {
        return commentsService.saveCommentsToDB(comment);
    }

    @GetMapping("/{postId}")
    private ArrayList<Comments> getCommentsForPost(@PathVariable("postId") String postId) {
        return commentsService.getAllCommentsForPost(postId);
    }
}
