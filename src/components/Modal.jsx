import React from 'react';
import ReactDOM from 'react-dom';

const ProjectModal = ({ isShowing, hide, title }) => (isShowing ? ReactDOM.createPortal(
  <div>
      {console.log(title)}
    <div className="modal-overlay" />
    <div className="project-modal-wrapper">
      <div className="project-modal flex column">
        <div>
          <button className="button-modal-complete" type="button" onClick={hide}>x</button>
          <span className="project-modal-title">{title}</span>
          <span className="buy-span-x">¡Tu compra se realizó con éxito!</span>
        </div>
      </div>
    </div>
  </div>, document.getElementById('modal-root'),
) : null);

export default ProjectModal;
