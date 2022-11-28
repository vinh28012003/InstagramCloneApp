package com.vinhtran.instagramclone.Controller;

import com.vinhtran.instagramclone.Entity.Post;
import com.vinhtran.instagramclone.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/post")
public class PostController {
    @Autowired
    PostService postService;

    @PostMapping("")
    private Post submitUserPost(@RequestBody Post post) {
        return postService.savePostData(post);
    }

    @GetMapping("")
    private ArrayList<Post> getAllPost() {
        return postService.retrivePostFromDB();
    }
}
