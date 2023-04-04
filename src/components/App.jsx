import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { Component } from 'react';
import getImagesApi from 'servises/imageApi';
export class App extends Component {
  state = {
    page: 1,
    showModal: false,
    images: [],
    loading: false,
    searchName: '',
    imageURL: {
      url: '',
      alt: '',
    },
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  showModalImage = e => {
    this.setState({
      imageURL: {
        url: e.target.dataset.url,
        alt: e.target.alt,
      },
    });
    this.toggleModal();
  };
  handleFormSubmit = q => {
    this.setState({ images: [] });
    this.setState({ searchName: q });
    this.setState({ page: 1 });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });

      try {
        const dataImages = await getImagesApi(
          this.state.searchName,
          this.state.page
        );
        if (dataImages.data.hits.length === 0) {
          throw new Error('No images');
        }
        if (this.state.images.length === 0) {
          this.setState({
            images: [...dataImages.data.hits],
          });
        } else {
          this.setState({
            images: [...prevState.images, ...dataImages.data.hits],
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  render() {
    const { showModal, images, loading, imageURL } = this.state;
    return (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar handleFormSubmit={this.handleFormSubmit} />
        <ImageGallery
          images={images}
          showModalImage={this.showModalImage}
          changePage={this.changePage}
        />
        {loading && <Loader />}

        {showModal && <Modal onClose={this.toggleModal} image={imageURL} />}
      </div>
    );
  }
}
