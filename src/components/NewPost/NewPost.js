import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import NewPostEditor from "./NewPostEditor/NewPostEditor";
import "./NewPost.css";

const NewPost = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    }
    console.log(password, process.env.REACT_APP_ADMIN_PASSWORD);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1 className="NewPost">New Post</h1>
        {isAuthenticated ? (
          <NewPostEditor />
        ) : (
          <div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              class="form-control"
              placeholder="Password"
              required
            />
            <button
              style={{ margin: "10px 0" }}
              type="button"
              class="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPost;
