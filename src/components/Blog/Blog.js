import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Posts from "../Posts/Posts";
import "./Blog.css";
import Spinner from "../Spinner/Spinner";
const Blog = () => {
  const [posts, setPosts] = useState({});
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch(process.env.REACT_APP_BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setFetching(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setFetching(false);
      });
  }, []);
  return (
    <div style={{marginBottom:"8vh"}}>
      <NavBar />
      <div className="container">
        <div className="AllPosts">Welcome to My Blog</div>
        {fetching ? <div><Spinner/></div> : <Posts posts={posts} marginTop={"8vh"} />}
      </div>
    </div>
  );
};

export default Blog;
