import { Component } from 'react';
import getImages from './Api/Api';
import { SearchBar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    textSearch: '',
    page: 1,
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { textSearch, page } = this.state;

    getImages(textSearch, page)
      .then(data => data.hits)
      .then(response => {
        this.setState({ images: response });
      });
  }

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };

  render() {
    const images = this.state.images;
    return (
      <>
        <SearchBar onSearch={this.handleSubmit} />
        <ImageGallery response={images} />
      </>
    );
  }
}
