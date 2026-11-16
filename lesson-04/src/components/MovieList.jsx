import MovieCard from "./MovieCard.jsx";
import "./MovieList.css";
import { useState } from "react";

function MovieList({ title, movies }) {
  const [visibleCount, setVisibleCount] = useState(4);

function handleShowMore() {
  if (visibleCount === 4) {
    setVisibleCount(7);
  } else {
    setVisibleCount(4);
  }
}
  return (
    <section className="movie-list">
      <h2 className="movie-list__title">{title}</h2>
      {movies.length === 0 && (
        <p className="movie-list__empty">לא נמצאו סרטים</p>
      )}
      <div className="movie-list__grid">
        {movies.slice(0, visibleCount).map((movie, index) => (
          <div
            key={movie.id}
            className={index >= 4 ? "movie-list__animated" : ""}
          >
          <MovieCard
            title={movie.title}
            year={movie.year}
            duration={movie.duration}
            genre={movie.genre}
            rating={movie.rating}
            poster={movie.poster}
            available={movie.available}
          />
          </div>
        ))}
      </div>
          {movies.length > 4 && (
      <button className="movie-list__show-more" onClick={handleShowMore}>
        {visibleCount === 4 ? "הצג עוד" : "הצג פחות"}
      </button>
    )}
    </section>
  );
}

export default MovieList;