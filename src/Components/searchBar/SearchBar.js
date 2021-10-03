import React, { Component } from "react";
import { toast } from "react-toastify";
import { SearchbarHeader } from "./SearchBarStyled";

class Searchbar extends Component {
  state = { searchQuery: "" };

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchQuery.trim("") === "") {
      toast.error("Enter search query");
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <SearchbarHeader>
        <form onSubmit={this.handelSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            value={this.state.searchQuery}
            name="searchQuery"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
