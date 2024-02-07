import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class ThirdMovie extends Component {
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
    fetch('https://www.omdbapi.com/?apikey=44e53ec0&s=mercenaries')
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
      <div>
        <h4>New Releases</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.movies.map((movie, index) => (
            <Col xs={12} md={4} key={index}>
              <img className="img-fluid" src={movie.src} alt={`New Releases ${index + 1}`} />
            </Col>
          ))}
        </div>
      </div>
    );
  }
}

export default ThirdMovie;
