import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal } from "modal.js";

export default class ProfilePage extends Component {
  sendGiftForm() {
    const [openModal, setOpenModal] = useState(false);
    <button
      className="openModalBtn"
      OnClick={() => {
        setOpenModal(true);
      }}
    >
      Send Gift
    </button>;
    {
      openModal && <Modal />;
    }
  }
  render() {
    return (
      <div>
        <h3>Profile Pic goes here</h3>
        <button onClick={sendGiftFrom()}>Send Gift</button>
      </div>
    );
  }
}
