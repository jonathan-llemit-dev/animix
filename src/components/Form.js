import React, { useState } from "react";

export default function Form({ animeList, onSetAnimeList, onToggleForm }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState([]);
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !genre || !rating || !summary) return;

    const arrayGenre = genre.split(",").map((genre) => genre.trim());

    const newAnime = {
      name: title,
      genres: arrayGenre,
      photoName: "poster/naruto.jpg",
      rating: rating,
      summary: summary,
    };
    onSetAnimeList(newAnime);

    setTitle("");
    setGenre([]);
    setRating(0);
    setSummary("");
    onToggleForm();
  }

  const handleInputGenre = (e) => {
    const value = e.target.value;
    // Check if the value contains only letters
    if (/^[a-zA-Z ,]*$/.test(value) || value === "") {
      setGenre(value);
    }
  };

  const handleInputRating = (e) => {
    const value = e.target.value;
    // Check if the value contains only letters
    if (/^[0-9]*$/.test(value) || value === 0) {
      setRating(value);
    }
  };

  return (
    <main className="menu">
      <div className="menu-title">
        <h2>Add New Anime</h2>
        <p>
          Anyone can contribute to our community, submit a new list of anime.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label for="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={genre}
            onChange={handleInputGenre}
          />
        </div>

        <div>
          <label for="rating">Rating:</label>
          <input
            type="text"
            id="rating"
            name="rating"
            value={rating}
            onChange={handleInputRating}
          />
        </div>

        <div>
          <label for="summary">Summary:</label>
          <textarea
            rows="4"
            cols="50"
            id="summary"
            name="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Enter summary..."
          ></textarea>
        </div>
        <button className="btn-add">Add</button>
      </form>
    </main>
  );
}
