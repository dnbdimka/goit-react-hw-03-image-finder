import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./searchBar/SearchBar";
import ImageGallery from "./imageGallery/ImageGallery";
import Modal from "./modal/Modal";

class App extends Component {
  state = {
    searchQuery: "",
    isModalOpen: false,
    bigImg: "",
  };

  onSubmitSearch = (searchInput) => {
    this.setState({ searchQuery: searchInput });
  };

  toggleModal = (bigImg) => {
    this.setState((prev) => ({ isModalOpen: !prev.isModalOpen, bigImg }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmitSearch} />
        <ImageGallery
          searchQuery={this.state.searchQuery}
          toggleModal={this.toggleModal}
        />
        <ToastContainer theme="colored" autoClose={3000} />
        {this.state.isModalOpen && (
          <Modal image={this.state.bigImg} toggleModal={this.toggleModal} />
        )}
      </>
    );
  }
}

export default App;
