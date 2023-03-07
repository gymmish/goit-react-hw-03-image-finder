import { Component } from 'react';
import getImages from './Api/Api';
import { Toaster } from 'react-hot-toast';
import Loader from './LoadMore/Loader';
import { SearchBar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonMore from './LoadMore/ButtonL';

export class App extends Component {
  state = {
    textSearch: '',
    page: 1,
    images: [],
    error: '',
    statud: 'idle',
    modalImg: null,
    isOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { textSearch, page } = this.state;
    if (prevState.textSearch !== textSearch) {
      this.setState({ status: 'pending' });

      getImages(textSearch, page)
        .then(data => data.hits)
        .then(response => {
          this.setState({ images: response, status: 'resolved' });
        })
        .catch(error => console.log(error));
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
        })
        .catch(error => console.log(error));
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

  modalImg = (id, img, tags) => {
    this.setState({ modalImg: { id: id, img: img, tags: tags } });
    this.toggleModal();
  };

  toggleModal = () => {
    const isOpen = this.props.isOpen;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { images, modalImg, status, isOpen } = this.state;

    return (
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <SearchBar onSearch={this.handleSubmit} />
        {status === 'pending' && <Loader />}
        <ImageGallery
          response={images}
          onImageClick={this.modalImg}
          toggleModal={this.toggleModal}
        />
        {status === 'resolved' && (
          <ButtonMore loadMoreClick={this.hendleMore}></ButtonMore>
        )}
        {isOpen && <Modal modalImg={modalImg} onClose={this.toggleModal} />}
      </>
    );
  }
}

// if (this.state.status === 'resolved') {
//   return <ImageGallery response={images} />;
// }
