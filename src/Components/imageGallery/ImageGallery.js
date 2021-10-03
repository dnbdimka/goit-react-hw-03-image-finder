import React, { Component } from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import {
  Button,
  LoaderContainer,
  SearchGalleryList,
} from "./ImageGalleryStyled";
import { getGallery } from "../../services/galleryAPI";
import { toast } from "react-toastify";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
// import Modal from "../modal/Modal";

class ImageGallery extends Component {
  state = {
    page: 1,
    gallery: [],
    isLoading: false,
    totalPage: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery === this.props.searchQuery) {
      return;
    }
    this.setState({ page: 1, isLoading: true, gallery: [] });
    const data = await getGallery(1, this.props.searchQuery.trim(""));
    const galleryList = data.normalizeData;
    this.setState({
      gallery: [...galleryList],
      isLoading: false,
      total: data.total,
      totalPage: Math.ceil(data.total / 12),
    });
    if (this.state.gallery.length === 0) {
      toast.error("Please enter valid search query");
      this.setState({
        totalPage: 1,
      });
      return;
    }
  }

  onLoadMoreClick = async () => {
    this.setState({ isLoading: true });
    const data = await getGallery(
      this.state.page + 1,
      this.props.searchQuery.trim("")
    );
    const galleryList = data.normalizeData;

    this.setState({
      page: this.state.page + 1,
      gallery: [...this.state.gallery, ...galleryList],
      isLoading: false,
    });

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <>
        <SearchGalleryList>
          <ImageGalleryItem
            galleryList={this.state.gallery}
            toggleModal={this.props.toggleModal}
          />
        </SearchGalleryList>
        {this.state.isLoading && (
          <LoaderContainer>
            <Loader type="Oval" color="#3f51b5" height={40} width={40} />
          </LoaderContainer>
        )}
        {this.state.page !== this.state.totalPage && !this.state.isLoading && (
          <Button
            type="button"
            onClick={this.onLoadMoreClick}
            className="Button"
          >
            Load More
          </Button>
        )}
      </>
    );
  }
}

export default ImageGallery;
