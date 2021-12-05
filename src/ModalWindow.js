import React from "react";
import Modal from "react-modal";
import { Outlet } from "react-router-dom";

export default function modalWindow({ show, setShow }) {
  const customStyles = {
    content: {
      backgroundColor: "#908D9D",
      border: "none",
      margin: "0px",
    },
  };

  return (
    <Modal
      style={customStyles}
      isOpen={show}
      onRequestClose={setShow}
      overlayClassName="Overlay"
    >
      <Outlet />
    </Modal>
  );
}
