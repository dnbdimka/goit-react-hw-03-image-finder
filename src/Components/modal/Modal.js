import React, { Component } from "react";
import { ModalStyle } from "./ModalStyled";

const bodyRef = document.querySelector("body");

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.onHandleEscape);
    bodyRef.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onHandleEscape);
    bodyRef.style.overflow = "auto";
  }

  onHandleEscape = (e) => e.code === "Escape" && this.props.toggleModal();

  onOverlayClick = (e) =>
    e.target === e.currentTarget && this.props.toggleModal();
  render() {
    return (
      <>
        <ModalStyle onClick={this.onOverlayClick}>
          <div className="Modal">
            <img src={this.props.image} alt="" />
          </div>
        </ModalStyle>
      </>
    );
  }
}

export default Modal;
