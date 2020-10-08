import React from 'react'
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <section id="navbar" className="fixed bg-white opacity-75 w-full z-10">
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
