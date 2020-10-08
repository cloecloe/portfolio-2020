import React from 'react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="container flex flex-col items-center justify-center mt-8"
    >
      <h1 className="text-center">
        Interested in a collaboration or learning more?
      </h1>
      <h2 className="my-8">Reach out!</h2>
      <a href="mailto:cloe.furlan@yahoo.fr">cloe.furlan@yahoo.fr</a>
      <div className="icons">
        <a href="https://www.linkedin.com/in/cloe-f/">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/cloecloe">
          <i class="fab fa-github-square"></i>
        </a>
      </div>
    </section>
  )
}
