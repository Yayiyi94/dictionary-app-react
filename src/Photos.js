import React from "react";
import "./Dictionary.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (image, index) {
            return (
              <div className="col-4" key={index}>
                <a href={image.url} target="_blank" rel="noreferrer">
                  <img
                    src={image.src.landscape}
                    className="img-fluid"
                    alt="dictionary visual"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
