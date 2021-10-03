import React, { Component } from "react";

class ImageGalleryItem extends Component {
  onImgClick = (e) => {
    this.props.toggleModal(e.target.getAttribute("image"));
  };

  render() {
    return (
      <>
        {this.props.galleryList.map((image) => (
          <li key={image.id} className="ImageGalleryItem">
            <img
              src={image.smallImg}
              alt=""
              className="ImageGalleryItem-image"
              onClick={this.onImgClick}
              image={image.bigImg}
            />
          </li>
        ))}
      </>
    );
  }
}

export default ImageGalleryItem;
