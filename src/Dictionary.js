import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "10fa90a2o832483bf734tfe8a27fcdad";
    // API link documentation https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
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
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
