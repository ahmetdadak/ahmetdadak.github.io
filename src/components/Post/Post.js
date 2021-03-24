import React, { useState, useEffect } from "react";
import PostElements from "./PostElements/PostElements";
import "./Post.css";
import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router-dom";
import Author from "../Author/Author";
import Spinner from "../Spinner/Spinner";

const Post = () => {
  const [post, setPost] = useState({});
  const [fetching, setFetching] = useState(false);
  const params = useParams();

  // print params to console
  console.log(params);
  useEffect(() => {
    setFetching(true);
    fetch(process.env.REACT_APP_BASE_URL + `/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setFetching(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setFetching(false);
      });
  }, []);
  return (
    <div>
      <NavBar />
      <div className="container" style={{ marginBottom: "8vh" }}>
        {fetching ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div>
            <PostElements post={post} />
            <Author />
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
