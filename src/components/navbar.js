import React from 'react'
import { Link } from "gatsby"

export default function Navbar() {
  //   state = {
  //   navOpacity: 1
  // };

  // componentDidMount() {
  //   document.addEventListener("scroll", () => {
  //     const opacity = window.scrollY < 600 ? 1 : 0.8;

  //     this.setState({ navOpacity: opacity });
  //   });
  // }

  return (
    <section id="navbar" className="fixed bg-white w-full z-10 opacity-75">
      <div className="container flex justify-center md:justify-between items-center py-2">
        <Link className="my-1 hidden md:flex md:items-center" to="#header">
          <img src="../images/logocloe.png" alt="logo Cloe"/>
        </Link>
        <div className="right-content flex">
          <Link className="mr-6 flex items-center" to="#about">
            About
          </Link>
          {/* <Link
              className="mr-6 flex items-center"
              id="codelink"
              to="#about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => {
                setTimeout(() => {
                  window.scrollBy(0, 2)
                }, 1050)
              }}
            >code</Link> */}
          <Link className="mr-6 flex items-center" to="#technologies">
            Technologies
          </Link>
          <Link className="mr-6 flex items-center" to="#projects">
            Projects
          </Link>
          <Link className="hidden md:flex md:items-center" to="#contact">
            Contact
          </Link>
          <Link className="block md:hidden contact" to="#contact">
            <i class="far fa-envelope"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}
