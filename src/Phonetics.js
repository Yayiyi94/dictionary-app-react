import React from "react";
import "./Dictionary.css";

export default function Phonetics(props) {
  function playAudio() {
    if (props.phonetics && props.phonetics.audio) {
      const audio = new Audio(props.phonetics.audio);
      audio.play().catch((err) => {
        console.error("Tha audio is not avaible:", err);
      });
    }
  }

  let hasAudio = props.phonetics && props.phonetics.audio;

  return (
    <div className="Phonetics">
      <button
        className={`sound-button ${hasAudio ? "" : "disabled"}`}
        onClick={hasAudio ? playAudio : undefined}
        disabled={!hasAudio}
      >
        {hasAudio ? "🔊" : "🔇"}
      </button>
    </div>
  );
}
