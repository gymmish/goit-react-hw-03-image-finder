import { Component } from 'react';
import getImages from './Api/Api';
import { Toaster } from 'react-hot-toast';
import { SearchBar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    textSearch: '',
    page: 1,
    images: [],
    // loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { textSearch, page } = this.state;
    // this.setState({ loading: true });
    getImages(textSearch, page)
      .then(data => data.hits)
      .then(response => {
        this.setState({ images: response });
      });
    // .finally({ loading: false });
  }

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };

  render() {
    const images = this.state.images;
    return (
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <SearchBar onSearch={this.handleSubmit} />
        {/* {this.state.loading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )} */}
        <ImageGallery response={images} />
      </>
    );
  }
}
