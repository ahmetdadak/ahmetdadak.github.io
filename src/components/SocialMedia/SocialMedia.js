import React from "react";

import SocialMediaElements from "./SocialMediaElements/SocialMediaElements"
import './SocialMedia.css'
const SocialMedia = (props) => {
  return (
    <div className="SocialMedia" style={{marginTop: props.marginTop}}>
        <SocialMediaElements size={32}/>
    </div>
  );
};

export default SocialMedia;
