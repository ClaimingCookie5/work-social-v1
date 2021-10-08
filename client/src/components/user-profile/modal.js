import React from "react";

export default function Modal() {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button> X </button>
        <div className="title">
          <h1>Send Gift</h1>
        </div>
        <div className="email">
          <p>Email</p>
        </div>
        <div className="message">
          <p>Enter message here</p>
        </div>
        <div className="footer"></div>
        <button>Send Gift</button>
      </div>
    </div>
  );
}

export default Modal;
