import React, { Component } from "react";
import draftToHtml from "draftjs-to-html";
import { DEFAULT_IMG_URL } from "../../../utils/config";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

const LINE_PER_MINUTE = 15;

class NewPostEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      imageUrl: "",
      editorState: EditorState.createEmpty(),
    };
  }

  handleSubmit = () => {
    const convertedData = convertToRaw(
      this.state.editorState.getCurrentContent()
    );
    const date = new Date();
    const minRead = Math.ceil(convertedData.blocks.length / LINE_PER_MINUTE);
    const data = {
      slug: convertToSlug(this.state.title),
      title: this.state.title,
      imageUrl: this.state.imageUrl,
      body: draftToHtml(convertedData),
      minRead: minRead,
      date: date,
    };

    fetch(process.env.REACT_APP_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Successful");
      })
      .catch((error) => {
        alert(error);
      });
  };
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    console.log(
      draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    );

    return (
      <div style={{ margin: "10px 0" }}>
        <div style={{ margin: "10px 0" }}>
          <input
            onChange={(e) => this.setState({ title: e.target.value })}
            class="form-control"
            placeholder="Title"
            required
          />
        </div>
        <div style={{ margin: "10px 0" }}>
          <input
            onChange={(e) => this.setState({ imageUrl: e.target.value })}
            class="form-control"
            placeholder="Image Url"
            required
          />
        </div>
        <img
          src={this.state.imageUrl ? this.state.imageUrl : DEFAULT_IMG_URL}
          style={{ width: "100%", height: "480px" }}
        />
        <div style={{ margin: "10px 0" }}></div>
        <Editor
          editorStyle={{ border: "1px solid", minHeight: "40vh" }}
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <button
          style={{ margin: "10px 0" }}
          type="button"
          class="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}
export default NewPostEditor;
