import React from "react";
import "./Dictionary.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ol className="Synonyms list-group">
        <h6>Synonyms:</h6>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ol>
    );
  }
  return (
    <div className="Synonyms list-group">
      <h6>No synonyms avaible</h6>
    </div>
  );
}
