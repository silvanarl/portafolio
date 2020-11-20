import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch('../../public/projects.json')
      .then((response) => response.json())
      .then((obj) => {
        setProject(obj.projects);
      });
  }, []);

  return (
    <div id="projects" className="paddCont">
      <p className="textCenter mrg20">PROYECTOS</p>
      <div className=" grid_projects">
        <div className="grid">
          {/* flex projectsDiv (clases) */}
          {project.map((obj) => (
            <div className="grid__item" key={obj.id}>
              {/* column project hvr-bob */}
              <div className="card">
                <img src={obj.image} alt={obj.title} className="card__img" />
                <div className="card__content">
                  {/* infoProject column */}
                  <h1 className="card__header">{obj.title}</h1>
                  {/* titleProject spanBySkill */}
                  <p className="card__text">{obj.description}</p>
                  <a
                    href={obj.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="card__btn" type="button">Demo</button>
                    {/* buttonDemo */}
                  </a>
                  <a
                    href={obj.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <input type="button" className="card__btn" value="Repo" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
