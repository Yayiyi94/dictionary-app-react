import React from "react";
import "./Dictionary.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="container-Meaning">
      <div className="Meaning row">
        <section className="col-6">
          <h3 className="text-capitalize">{props.meaning.partOfSpeech}</h3>{" "}
          <h5>{props.meaning.definition}</h5>{" "}
          <Example example={props.meaning.example} />
          <Synonyms synonyms={props.meaning.synonyms} />
        </section>
      </div>
    </div>
  );
}
