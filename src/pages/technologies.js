import React from 'react'

export default function Technologies(props) {
  const iconsBackEnd = props.iconsBackEnd.map(icon => (
    <div className="icon" key={icon.toString()}>
      <img src={"../images/icons/" + icon} alt={icon.split(".")[0]} />
      {icon.split(".")[0][0].toUpperCase() + icon.split(".")[0].slice(1)}
    </div>
  ))

  const iconsApi = props.iconsApi.map(icon => (
    <div className="icon" key={icon.toString()}>
      <img src={"../images/icons/" + icon} alt={icon.split(".")[0]} />
      {icon.split(".")[0][0].toUpperCase() + icon.split(".")[0].slice(1)}
    </div>
  ))

  return (
    <div id="technologies">
      <div className="container flex flex-col items-center justify-center md:items-start md:justify-start py-32">
        <h1 className="mb-20">Technologies</h1>

        <div className="type w-full md:w-2/3 py-6">
          <h2 className="back-end">Back-end</h2>
          <div className="icons flex w-full flex-wrap my-8">{iconsBackEnd}</div>
        </div>

        <div className="type w-full md:w-2/3 py-6 my-32">
          <h2 className="front-end">Front-end</h2>
          <div className="icons flex w-full flex-wrap my-8">
            <div className="icon">
              <img src="../images/icons/javascript.png" alt="javascript logo" />
              <p>Javascript</p>
            </div>
            <div className="icon">
              <img src="../images/icons/html.png" alt="html logo" />
              <p>HTML 5</p>
            </div>
            <div className="icon">
              <img src="../images/icons/css.png" alt="css logo" />
              <p>CSS3</p>
            </div>
            <div className="icon">
              <img src="../images/icons/sass.png" alt="sass logo" />
              <p>SASS</p>
            </div>
            <div className="icon">
              <img src="../images/icons/bootstrap.png" alt="bootstrap logo" />
              <p>Bootstrap</p>
            </div>
            <div className="icon">
              <img src="../images/icons/tailwind.png" alt="tailwind logo" />
              <p>TailwindCSS</p>
            </div>
            <div className="icon">
              <img src="../images/icons/elementui.png" alt="elementui logo" />
              <p>Element UI</p>
            </div>
            {/* <div className="icon">
              <img src="../images/icons/vuejs.png" alt="vuejs logo" />
              <p>VueJS</p>
            </div> */}
            <div className="icon">
              <img src="../images/icons/react.png" alt="react logo" />
              <p>React</p>
            </div>
            <div className="icon">
              <img src="../images/icons/figma.png" alt="figma logo" />
              <p>Figma</p>
            </div>
            <div className="icon">
              <img src="../images/icons/eslint.png" alt="eslint logo" />
              <p>esLint</p>
            </div>
          </div>
        </div>

        <div className="type w-full md:w-2/3 py-6">
          <h2 className="other-tools">Other tools and API</h2>
          <div className="icons flex w-full flex-wrap my-8">{iconsApi}</div>
        </div>
      </div>
    </div>
  )
}
