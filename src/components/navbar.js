import React from 'react'
import { Link } from "gatsby"

class Navbar extends React.Component {
  //   state = {
  //   navOpacity: 1
  // };

  // componentDidMount() {
  //   document.addEventListener("scroll", () => {
  //     const opacity = window.scrollY < 600 ? 1 : 0.8;

  //     this.setState({ navOpacity: opacity });
  //   });
  // }
  render() {
    return (
      <section id="navbar" className="fixed bg-white w-full z-10 opacity-75">
        <div className="flex justify-between items-center py-2 container">
          <Link className="pr-6 my-1" to="#header">
            <img src="../images/logocloe.png" alt="logo Cloe"/>
          </Link>
          <div className="right-content flex">
            <Link className="pr-6" to="#about">
              About
            </Link>
            <Link className="pr-6" to="#technologies">
              Technologies
            </Link>
            <Link className="pr-6" to="#projects">
              Projects
            </Link>
            <Link className="pr-6" to="#contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Navbar;
