import { Component } from 'react';
import getImages from './Api/Api';
import { Toaster } from 'react-hot-toast';
import Loader from './LoadMore/Loader';
import { SearchBar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonMore from './LoadMore/ButtonL';

export class App extends Component {
  state = {
    textSearch: '',
    page: 1,
    images: [],
    error: '',
    statud: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { textSearch, page } = this.state;
    if (prevState.textSearch !== textSearch) {
      this.setState({ status: 'pending' });

      getImages(textSearch, page)
        .then(data => data.hits)
        .then(response => {
          this.setState({ images: response, status: 'resolved' });
        });
    }
    if (prevState.page !== page && page !== 1) {
      this.setState({ status: 'pending' });

      getImages(textSearch, page)
        .then(data => data.hits)
        .then(response => {
          this.setState({
            images: [...prevState.images, ...response],
            status: 'resolved',
          });
        });
    }
  }

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };

  hendleMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const images = this.state.images;
    // if (this.state.status === 'resolved') {
    //   return <ImageGallery response={images} />;
    // }

    return (
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <SearchBar onSearch={this.handleSubmit} />
        {this.state.status === 'pending' && <Loader />}
        <ImageGallery response={images} />
        {this.state.status === 'resolved' && (
          <ButtonMore loadMoreClick={this.hendleMore}></ButtonMore>
        )}
        ;
      </>
    );
  }
}
