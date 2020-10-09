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
          <Link className="my-1" to="#header">
            <img src="../images/logocloe.png" alt="logo Cloe"/>
          </Link>
          <div className="right-content flex">
            <Link className="mr-6 flex items-center" to="#about">
              About
            </Link>
            <Link className="mr-6 flex items-center" to="#technologies">
              Technologies
            </Link>
            <Link className="mr-6 flex items-center" to="#projects">
              Projects
            </Link>
            <Link className="mr-6 hidden md:flex md:items-center" to="#contact">
              Contact
            </Link>
            <Link className="mr-6 block md:hidden contact" to="#contact">
              <i class="far fa-envelope"></i>
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Navbar;
