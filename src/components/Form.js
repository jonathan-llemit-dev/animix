import React from "react";

export default function Form() {
  return (
    <main className="menu">
      <div className="menu-title">
        <h2>Add New Anime</h2>
        <p>
          Anyone can contribute to our community, submit a new list of anime.
        </p>
        <form>
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" />

          <label for="genre">Genre:</label>
          <input type="text" id="genre" name="genre" />

          <label for="rating">Rating:</label>
          <input type="text" id="rating" name="rating" />

          <label for="summary">Summary:</label>
          <input type="text" id="summary" name="summary" />
        </form>
      </div>
    </main>
  );
}
