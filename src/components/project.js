import React from "react"
import { Link } from "gatsby"

export default function Project(props) {
  let iconsList = props.icons.map((icon) =>
    <img
      key={icon.toString()}
      className="icon"
      src={"../images/icons/" + icon}
      alt={icon.split(".")[0]}
    />
  );
  // const reverse = props.reverse ? 'reverse' : ''

  return (
    <div
      id="project"
      className="project container flex flex-col md:flex-row items-center py-32"
    >
      <div className="content-side w-full md:w-2/3 md:mr-5">
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <p className="my-6">
          {props.content}
        </p>
        <div className="flex">
          <Link
            target="_blank"
            className="flex pr-1"
            to={props.linkSite}
          >
            <h4 className="mb-4">View website</h4>
            <i class="fas fa-external-link-alt ml-2"></i>
          </Link>
          <Link
            target="_blank"
            className="flex"
            to={props.linkgit}
          >
            <h4 className="mb-4">   /   View source code</h4>
            <i class="far fa-file-code text-xl ml-2"></i>
          </Link>
        </div>
        <div className="icons flex flex-wrap">
          {iconsList}
        </div>
      </div>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="image-side w-1/3"
        to={props.link}
      >
        <img
          src={"../images/" + props.image}
          alt="screenshot of Coriander Planner website"
          className="mx-3 my-5 md:mx-0 md:my-0"
        />
      </Link>
    </div>
  )
}
