import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";
import Phonetics from "./Phonetics";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [phonetics, setPhonetics] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePhoneticsResponse(response) {
    if (response.data[0] && response.data[0].phonetics.length > 0) {
      const phoneticWithAudio = response.data[0].phonetics.find(
        (p) => p.audio && p.audio !== ""
      );
      setPhonetics(phoneticWithAudio || response.data[0].phonetics[0]);
    }
  }

  function handleImagesResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "10fa90a2o832483bf734tfe8a27fcdad";
    // API link documentation https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => setResults("Could not fetch definition."));
    let apiImagesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios
      .get(apiImagesUrl)
      .then(handleImagesResponse)
      .catch(() => setPhotos(null));
    let apiPhoneticsUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios
      .get(apiPhoneticsUrl)
      .then(handlePhoneticsResponse)
      .catch(() => setPhonetics(null));
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="centered-text-input"
          autoFocus={true}
          onChange={handleKeyword}
        />
      </form>
      <div className="hint">Suggest words: sunset, book, wine...</div>

      <Phonetics phonetics={phonetics} />
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
