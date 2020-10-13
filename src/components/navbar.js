import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';

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
        <button className="my-1 hidden md:flex md:items-center" onClick={() => scrollTo('#header')}>
          <img src="../images/logocloe.png" alt="logo Cloe"/>
        </button>
        <div className="right-content flex">
          <button className="px-4 py-2 flex items-center" onClick={() => scrollTo('#about')}>
            About
          </button>
          <button className="px-4 py-2 flex items-center" onClick={() => scrollTo('#technologies')}>
            Technologies
          </button>
          <button className="px-4 py-2 flex items-center" onClick={() => scrollTo('#projects')}>
            Projects
          </button>
          <button className="px-4 py-2 hidden md:flex md:items-center" onClick={() => scrollTo('#contact')}>
            Contact
          </button>
          <button className="ml-1 block md:hidden contact" onClick={() => scrollTo('#contact')}>
            <i class="far fa-envelope"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
