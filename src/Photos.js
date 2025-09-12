import React from "react";
import "./Dictionary.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <section className="row">
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
        </section>
      </div>
    );
  } else {
    return null;
  }
}
