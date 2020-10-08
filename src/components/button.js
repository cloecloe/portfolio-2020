import React from 'react'
import { Link } from "gatsby"

export default function Button(props) {
  return (
    <Link id="button" to={props.link} rel="noopener noreferrer">
      <span>{props.textContent}</span>
    </Link>
  )
}
