import React, { Component } from "react";

class ImageGalleryItem extends Component {
  onImgClick = (e) => {
    this.props.toggleModal(this.props.image.bigImg);
  };

  render() {
    const { smallImg } = this.props.image;
    return (
      <li className="ImageGalleryItem">
        <img
          src={smallImg}
          alt=""
          className="ImageGalleryItem-image"
          onClick={this.onImgClick}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
