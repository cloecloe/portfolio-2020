import React from 'react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="container flex flex-col items-center justify-center mt-8 p-3"
    >
      <h1 className="text-center flex flex-wrap">
        Interested in a collaboration or learning more?
      </h1>
      <h2 className="my-6">Reach out!</h2>
      <a href="mailto:cloe.furlan@yahoo.fr" className="my-3">cloe.furlan@yahoo.fr</a>
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
