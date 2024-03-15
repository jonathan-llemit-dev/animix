import React, { useState } from "react";

export default function Form({ animeList, onSetAnimeList }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !genre || !rating || !summary) return;

    const newAnime = { title, genre, rating, summary };
    onSetAnimeList(newAnime);

    setTitle("");
    setGenre("");
    setRating(0);
    setSummary("");
  }

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
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>

        <div>
          <label for="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
        </div>

        <div>
          <label for="summary">Summary:</label>
          <input
            type="text"
            id="summary"
            name="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
      </form>
    </main>
  );
}
