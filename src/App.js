import "./App.css";
import Header from "./Header";
import AddPost from "./AddPost";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("Guest");
  const [posts, setPosts] = useState([]);

  //  Effect Hook
  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  function login(firstName) {
    setName(firstName);
  }



  return (
    <div className="App">
      <Header title={name} />
      <AddPost posts={posts} setPosts={setPosts}/>
      <p>Welcome to my Blog</p>
      <button
        onClick={() => {
          login("James");
          console.log("btn clicked");
        }}
      >
        {" "}
        Log in
      </button>
      <ul>
        {posts.length? posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        )):"Loading"}
      </ul>
    </div>
  );
}

export default App;
