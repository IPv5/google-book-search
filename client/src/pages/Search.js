import React, { useState, useEffect } from "react";
import Navbar from "../components/Nav";
import Searchbar from "../components/Searchbar";
import Results from "../components/Results";

function Search() {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
    console.log(formObject);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject) {
      console.log(`Searching for ${formObject.search}`);
    }
  }

  return (
    <>
      <Navbar />
      <Searchbar
        onChange={handleInputChange}
        onClick={handleFormSubmit}
        name="search"
        placeholder="Enter title or author here..."
      />
      <Results />
    </>
  );
}

export default Search;
