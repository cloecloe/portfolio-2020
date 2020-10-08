import React from "react"
import Button from "../components/button"
import Navbar from "../components/navbar"

export default function Header() {
  return (
    <div id="header">
      <Navbar />

      <div id="banner">
        <div className="content container py-40 flex flex-col items-center md:items-start">
          <h3>Hi, I am Cloé</h3>
          <h1 className="mb-10 mt-2 md:max-w-2xl text-center md:text-left">
            From recruiter, to web developer
          </h1>
          <Button textContent="Discover my story" link="#about" />
        </div>
        {/* <div className="geometric-elements">
          <div className="geometric-element pink circle element-1"></div>
          <div className="geometric-element blue triangle element-2"></div>
          <div className="geometric-element pink triangle"></div>
          <div className="geometric-element blue circle"></div>
          <div className="geometric-element purple circle"></div>
          <div className="geometric-element purple triangle"></div>
        </div> */}
      </div>
    </div>
  )
}
