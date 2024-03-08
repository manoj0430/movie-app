import { Component } from "react";

import Styles from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    const { cartCount } = this.props;
    return (
      <div className={Styles.navbarContainer}>
        <div className={Styles.title}>Movie-App</div>
        <div className={Styles.cartContainer}>
          <img
            alt="cart icon"
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            className={Styles.cartIcon}
          />
          <span className={Styles.cartCount}> {cartCount}</span>
        </div>
      </div>
    );
  }
}

export default Navbar;
