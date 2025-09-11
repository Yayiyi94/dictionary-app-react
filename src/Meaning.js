import React from "react";
import "./Dictionary.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <h5>{props.meaning.definition}</h5>
      <p>Example: {props.meaning.example}</p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
