import React from "react";
import PostsElements from "./PostsElements/PostsElements";
import './Posts.css'

const Posts = ({posts, marginTop}) => {
  return (
    <div style={{marginTop: marginTop}}>

      {Object.keys(posts).map((post) => <PostsElements id={posts[post]._id} title={posts[post].title} body={posts[post].body} imageUrl={posts[post].imageUrl}  date={posts[post].date} minRead={posts[post].minRead} slug={posts[post].slug}/>)}

    </div>
  );
};

export default Posts;
