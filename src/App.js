import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import {movies} from "./moviesData";
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  handleIncStars = (movie) => {
    const { movies } = this.state;

    let mid = movies.indexOf(movie);
    if (movies[mid].stars >= 5) {
      return;
    }

    movies[mid].stars += 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleDecStars = (movie) => {
    const { movies } = this.state;

    let mid = movies.indexOf(movie);
    if (movies[mid].stars <= 0) {
      return;
    }

    movies[mid].stars -= 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    let mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies,
    });
  };

  handleToggleCart = (movie) => {
    let { movies, cartCount } = this.state;
    let mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;

    if(movies[mid].cart){
      cartCount+=1;
    }else{
      cartCount-=1;
    }
    this.setState({
      movies, cartCount
    });

    console.log(cartCount);
  };

  render() {
    const { movies,cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList movies={movies}
            addStars={this.handleIncStars}
            decStars={this.handleDecStars}
            favorite={this.handleToggleFav}
            addCart={this.handleToggleCart} />
      </>
    );
  }
}

export default App;
