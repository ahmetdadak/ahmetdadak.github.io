import React, { useState, useEffect } from "react";
import PostElements from "./PostElements/PostElements";
import "./Post.css";
import NavBar from "../NavBar/NavBar";
import { Redirect, useParams } from "react-router-dom";
import Author from "../Author/Author";
import Spinner from "../Spinner/Spinner";
import NotFoundPageElement from "../NotFoundPage/NotFoundPageElement/NotFoundPageElement";

const Post = () => {
  const [post, setPost] = useState({});
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  // print params to console
  useEffect(() => {
    setFetching(true);
    fetch(process.env.REACT_APP_BASE_URL + `/${params.id}`)
      .then((response) => {
        if (response.status >= 400 && response.status < 600) {
          setError(true)
        }
        return response.json()
      })
      .then((data) => {
        setPost(data);
        setFetching(false);
      })


  }, []);
  return (
    <div>
      <NavBar />
      <div className="container" style={{ marginBottom: "8vh" }}>
        {fetching ?
          <div>
            <Spinner />
          </div>
         : error ?
            <NotFoundPageElement/>:
          <div>
            <PostElements post={post} />
            <Author />
          </div>
        }
      </div>
    </div>
  );
};

export default Post;
