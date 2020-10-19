import React from "react"
import Project from "../components/project"

export default function Projects() {
  return (
    <div id="projects">
      {/* <div className="container pt-32">
        <h1>Projects</h1>
      </div> */}
      <Project
        classes="project container flex flex-col md:flex-row items-center py-32"
        title="Coriander Planner"
        date="August 2020"
        content="A webapp to plan your meals ahead in a calendar, find recipe ideas and
                share your recipes. This product is an MVP designed, implemented and
                shipped to production in 10 days by 4 developers, as our final student
                project at Le Wagon. It uses Ruby On Rails and the MVC architecture."
        linkSite="http://www.corianderplanner.com/"
        linkgit="https://github.com/cloecloe/meal-planning"
        icons={[
          "ruby.png",
          "javascript.png",
          "html.png",
          "css.png",
          "bootstrap.png",
          "cloudinary.jpg",
          "algolia.png",
          "activerecord.jpg",
          "heroku.png",
          "figma.png",
        ]}
        image="coriander-planner.png"
      />
      {/* <Project
        classes="project container flex flex-col md:flex-row-reverse items-center py-32"
        title="CIVI Communauté"
        date="Septembre/October 2020"
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
