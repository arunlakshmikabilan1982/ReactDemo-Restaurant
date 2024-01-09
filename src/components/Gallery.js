import React from "react";
import { Heading } from "./Heading";
import { Underline } from "./Underline";

export default function Gallery(props) {
  return (
    <div>
      <div className="MainBox" id="Gallery">
        <Heading title="Gallery" description="some Photos from our resturant" />
      </div>

      <div className="Gallery">
        {props.images.map((image) => (
          <div className="GalleryImage">
            <img src={image} alt="This is the a gallery" />
          </div>
        ))}
      </div>
      <div className="MainBox">
        <Underline />
      </div>
    </div>
  );
}
