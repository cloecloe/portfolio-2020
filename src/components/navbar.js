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
        <a className="my-1 hidden md:flex md:items-center" href="#header" onClick={() => scrollTo('#header')}>
          <img src="../images/logocloe.png" alt="logo Cloe"/>
        </a>
        <div className="right-content flex">
          <a className="px-4 py-2 flex items-center" href="#about" onClick={() => scrollTo('#about')}>
            About
          </a>
          <a className="px-4 py-2 flex items-center" href="#technologies" onClick={() => scrollTo('#technologies')}>
            Technologies
          </a>
          <a className="px-4 py-2 flex items-center" href="#projects" onClick={() => scrollTo('#projects')}>
            Projects
          </a>
          <a className="px-4 py-2 hidden md:flex md:items-center" href="#contact" onClick={() => scrollTo('#contact')}>
            Contact
          </a>
          <a className="ml-1 block md:hidden contact" href="#contact" onClick={() => scrollTo('#contact')}>
            <i class="far fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
