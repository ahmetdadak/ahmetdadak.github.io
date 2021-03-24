import React from "react";
import "./PostElements.css";
import {DEFAULT_IMG_URL} from "../../../utils/config"
function createMarkup(text) {
  return {__html: text};
}
const PostElements = ({ marginTop = "5vh", marginBottom = "5vh", post }) => {
  return (
    <div style={{ marginTop: marginTop, marginBottom: marginBottom }}>
      {post ? (
        <div>
          <div className="PostElementTitle">{post.title}</div>
          <div className="PostElementsInfo">
            <div className="PostElementsDate">
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="PostElementsInfoSep">&middot;</div>
            <div className="PostElementsMinRead">{post.minRead} min read</div>
          </div>
          <div style={{ marginTop: marginTop }}></div>
          <img src={post.imageUrl ? post.imageUrl : DEFAULT_IMG_URL} style={{ width: "100%", height: "480px" }} />
          <div style={{ marginTop: marginTop }}></div>
          <div className="PostElementsBody" dangerouslySetInnerHTML={createMarkup(post.  body)} />

        </div>
      ) : (
        <div>Problem Occured</div>
      )}
    </div>
  );
};

export default PostElements;
