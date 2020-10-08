import React from "react"
import Project from "../components/project"

export default function Projects() {
  return (
    <div id="projects">
      <Project
        title='Coriander Planner'
        date='August 2020'
        content='A webapp to plan your meals ahead in a calendar, find recipe ideas and
                share your recipes. This product is an MVP designed, implemented and
                shipped to production in 10 days by 4 developers, as our final student
                project at Le Wagon. It uses Ruby On Rails and the MVC architecture.'
        link='http://www.corianderplanner.com/'
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
        image='coriander-planner.png'
      />
    </div>
  )
}
