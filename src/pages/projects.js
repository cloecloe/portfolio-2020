import React from "react"
import Project from "../components/project"

export default function Projects() {
  return (
    <div id="projects">
      {/* <div className="container pt-32">
        <h1>Projects</h1>
      </div> */}
      <Project
        title="Coriander Planner"
        date="August 2020"
        content="A webapp to plan your meals ahead in a calendar, find recipe ideas and
                share your recipes. This product is an MVP designed, implemented and
                shipped to production in 10 days by 4 developers, as our final student
                project at Le Wagon. It uses Ruby On Rails and the MVC architecture."
        link="http://www.corianderplanner.com/"
        icons={[
          "ruby.png",
          "javascript.png",
          "html.png",
          "css.png",
          "bootstrap.png",
          "cloudinary.jpg",
          "activerecord.jpg",
          "heroku.png",
          "figma.png",
        ]}
        image="coriander-planner.png"
      />
      {/* <Project
        title="CIVI Communauté"
        date="Septembre 2020"
        content="The CIVI is a platform for connecting all those with a vested interest in immunization related topics.
This platform has been built in the Laravel (PHP) framework. I was hired to work on the front end of the project."
        link="http://www.civicommunaute.com/"
        icons={[
          "laravel.png",
          "javascript.png",
          "html.png",
          "sass.png",
          "tailwind.png",
          "elementui.png",
          "eslint.png",
          "babel.png",
          "npm.png",
          "docker.webp",
        ]}
        image="civi.png"
      /> */}
    </div>
  )
}
