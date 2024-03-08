import React from "react";

class MovieCard extends React.Component {
  addStars = () => {
    // console.log("this:", this);

    // this.setState({
    //     stars: this.state.stars + 0.5
    // });
    if (this.state.stars >= 5) {
      return;
    }

    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });
  };

  decStars = () => {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        stars: this.state.stars - 0.5,
      };
    });
  };
  handleFav = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };

  handleCart = () => {
    this.setState({
      cart: !this.state.cart,
    });
  };

  render() {
    const { movies, addStars, decStars, favorite, addCart } = this.props;
    const { title, plot, price, rating, poster, stars, fav, cart } =
      this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Poster" src={poster} />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs.{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                  alt="decrease"
                  onClick={() => {
                    decStars(movies);
                  }}
                />
                <img
                  className="stars"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt="Stars"
                />
                <img
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/32/32563.png"
                  alt="increase"
                  onClick={() => {
                    addStars(movies);
                  }}
                />
                <span>{stars}</span>
              </div>

              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => {
                  favorite(movies);
                }}
              >
                {fav ? "Un-Favourite" : "Favourite"}
              </button>

              <button
                className={cart ? "removecart-btn" : "cart-btn"}
                onClick={() => {
                  addCart(movies);
                }}
              >
                {cart ? "Remove" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
