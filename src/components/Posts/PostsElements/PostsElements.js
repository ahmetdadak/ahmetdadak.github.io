import React from "react";
import { Link } from "react-router-dom";
import "./PostsElements.css";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
function createMarkup(htmlBody) {
  return { __html: htmlBody };
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
const PostsElements = ({
  marginTop = "5vh",
  marginBottom = "5vh",
  id,
  title,
  body,
  imageUrl,
  date,
  minRead,
  slug,
}) => {
  return (
    <div style={{ marginTop: marginTop, marginBottom: marginBottom }}>
      <div className="ListView">
        <div>
          <Link
            to={`/blog/${id}`}
            className="PostsElementsLink"
            style={{ textDecoration: "none" }}
          >
            <h3 className="PostsElementsTitle">{title}</h3>
          </Link>
          <div className="PostsElementsInfo">
            <div className="PostsElementsDate">
              {new Date(date).toLocaleDateString()}
            </div>
            <div className="PostsElementsInfoSep">&middot;</div>
            <div className="PostsElementsMinRead">{minRead} min read</div>
          </div>
        </div>
        <div className="ImageContainer">
          <img className="ListViewImage" src={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default PostsElements;
