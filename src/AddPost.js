import { useState } from "react";

function AddPost(props) {
    const [postTitle,setPostTitle]=useState("");
  function onAddPost(e) {
    e.preventDefault();
    const newPostId = Math.floor(Math.random() * 1000000); // Generate a random ID
    const newPostArr = [{ id: newPostId, title: postTitle }, ...props.posts];
    props.setPosts(newPostArr);
  }
  return (
    <form onSubmit={onAddPost}>
      <input type="text" id="post_title" value={postTitle} onChange={(e)=> setPostTitle(e.target.value)} />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default AddPost;
