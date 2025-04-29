import React from 'react';
import './Editor.css';

const Editor = () => (
  <section className="editor">
    <h2 className="editor-title">Intuitive Resume Editor</h2>
    <p className="editor-subtitle">
      Our slider-style editor makes resume creation simple and efficient.
    </p>

    <div className="editor-image-wrapper">
      <img
        src="https://via.placeholder.com/1200x600?text=Resume+Editor+Preview"
        alt="Resume editor preview"
        className="editor-image"
      />
    </div>

    <button className="editor-btn">Try the Editor Now</button>
  </section>
);

export default Editor;
