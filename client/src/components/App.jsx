import React from 'react';
import PhotoCarousel from './PhotoCarousel.jsx';
import ModalCarousel from './ModalCarousel.jsx';
import styles from '../css/app.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      // date: [],
      // description: [],
      // names: [],
      // icons: [],
      // stars: [],
      // friends: [],
      show: false,
      showCarousel: true,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  getData() {
    axios.get("/photosForRestaurant")
      .then((data) => {
        console.log(data.data.rows);
        this.setState({ photos: data.data.rows })
      })
      .catch((error) => {
        console.log("Error gettings photos from the database: ", error);
      })
      .finally(() => {
        console.log('GET photos request sent!')
      })
  }

  getPhotos() {
    axios.get("/photosForRestaurant")
      .then((data) => {
        let length = Object.keys(data.data.rows).length;
        let photos = [];
        let date = [];
        let description = [];
        for (let i = 0; i < length; i++) {
          photos.push(data.data.rows[i].url);
          date.push(data.data.rows[i].date);
          description.push(data.data.rows[i].description);
        }
        this.setState({
          photos: photos,
          date: date,
          description: description
        })
        this.setState({
          photos: data.data.rows
        })
      })
      .catch((error) => {
        console.log("Error gettings photos from the database: ", error);
      })
      .finally(() => {
        console.log('GET photos request sent!')
      })
  }
  getUsers() {
    axios.get("/users")
      .then((data) => {
        let length = Object.keys(data.data.rows).length;
        let names = [];
        let icons = [];
        let stars = [];
        let friends = [];
        for (let i = 0; i < length; i++) {
          names.push(data.data.rows[i].name);
          icons.push(data.data.rows[i].icon);
          stars.push(data.data.rows[i].stars);
          friends.push(data.data.rows[i].friends);
        }
        this.setState({
          names: names,
          icons: icons,
          stars: stars,
          friends: friends
        })
      })
      .catch((error) => {
        console.log("Error gettings users from the database: ", error);
      })
      .finally(() => {
        console.log('GET users request sent!')
      })
  }

  showModal() {
    this.setState({
      show: true,
      showCarousel: false,
    });
  }

  hideModal() {
    this.setState({
      show: false,
      showCarousel: true,
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {

    const { photos, show, showCarousel } = this.state;
    const showHideClassName = showCarousel ? `${styles.displayAll}` : `${styles.displayFade}`;
    return (
      <div id="app">
        <div className={styles.container}>
          <ModalCarousel
            photos={photos}
            show={show}
            handleClose={this.hideModal} />
        </div>

        <div className={showHideClassName}>
          <PhotoCarousel
            photos={photos}
            showCarousel={showCarousel} />

          <div className={styles.button}>
            <button type="button" onClick={this.showModal} >
              See All {photos.length - 1}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
