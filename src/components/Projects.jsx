import React, { useState, useEffect } from 'react';
import monitor from '../assets/monitor.svg';
import githubBlue from '../assets/github-blue.svg';

const Projects = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch('../projects.json')
      .then((response) => response.json())
      .then((obj) => {
        // console.log(obj.projects);
        setProject(obj.projects);
      });
  }, []);

  return (
    <div id="projects" className="paddCont">
      <p className="textCenter mrg20">PROYECTOS</p>
      <div className=" grid_projects">
        <div className="grid">
          {project.map((obj) => (
            <div className="grid__item" key={obj.id}>
              <div className="card">
                <img src={obj.image} alt={obj.title} className="card__img" />
                <div className="card__content">
                  <h1 className="card__header">{obj.title}</h1>
                  <p className="card__text">{obj.description}</p>
                  <div className="flex around">
                    <a
                      href={obj.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        className="card__btn"
                        type="button"
                      >
                        Website
                        <span>
                          <img src={monitor} alt="" />
                        </span>
                      </button>
                    </a>
                    <a
                      href={obj.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        className="card__btn"
                        type="button"
                      >
                        Repositorio
                        <span>
                          <img src={githubBlue} alt="" />
                        </span>
                      </button>
                    </a>
                  </div>
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
