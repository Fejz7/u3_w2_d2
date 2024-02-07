import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class MainMovie extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://www.omdbapi.com/?apikey=44e53ec0&s=the%20matrix')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore');
        }
      })
      .then((data) => {
        const movies = data.Search.slice(0, 3).map(item => ({ src: item.Poster }));
        this.setState({
          movies: movies,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <h2 className="mb-4">TV Shows</h2>
          <div className="btn-group" role="group">
            <div className="dropdown ms-4 mt-1">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: '#221f1f' }}
              >
                Genres
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Comedy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Drama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Thriller
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h4>Trending Now</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.movies.map((movie, index) => (
            <Col xs={12} md={4} key={index}>
              <img className="img-fluid" src={movie.src} alt={`Trending ${index + 1}`} />
            </Col>
          ))}
        </div>

       

        <h4></h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          
        </div>
      </div>
    );
  }
}

export default MainMovie;
