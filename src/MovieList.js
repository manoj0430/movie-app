import React from "react";
import MovieCard from "./Moviecard";

class MovieList extends React.Component {
  render() {
    const { movies, addStars, decStars, favorite, addCart } = this.props;
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            movies={movie}
            addStars={addStars}
            decStars={decStars}
            favorite={favorite}
            addCart={addCart}
            key={index}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
