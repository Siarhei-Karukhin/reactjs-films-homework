import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from '../../components/MovieList';
import Modal from '../../components/Modal';
import Preloader from '../../components/Preloader';
import FilterTabs from '../../components/FilterTabs';

import styles from './MoviesSection.scss';

class MoviesSection extends Component {
  componentDidMount() {
    const { condition, fetchMovies } = this.props;
    fetchMovies(condition);
  }

  fetchByCategory = async (category) => {
    const { setMoviesCondition } = this.props;
    await setMoviesCondition(category);
    const { condition, genres, fetchMovies } = this.props;
    fetchMovies(condition, genres);
  };

  render() {
    const {
      condition,
      movies,
      isLoading,
      error,
      genres,

      trailer,
      trailerIsLoading,
      trailerError,
      isModalOpened,

      fetchTrailer,
      removeTrailerInfo,
    } = this.props;

    if (error) {
      return (
        <div className={styles.container}>{`Error! ${error.message}`}</div>
      );
    }

    if (isLoading) {
      return (
        <div className={styles.container}>
          <FilterTabs
            name="Tabs"
            genres={genres}
            fetchByCategory={this.fetchByCategory}
            condition={condition}
          />
          <Preloader />
        </div>
      );
    }

    return (
      <section className={styles.container}>
        <FilterTabs
          name="Tabs"
          genres={genres}
          fetchByCategory={this.fetchByCategory}
          condition={condition}
        />
        <MovieList movies={movies} fetchTrailer={fetchTrailer} />

        {isModalOpened ? (
          <Modal
            trailer={trailer}
            removeTrailerInfo={removeTrailerInfo}
            trailerIsLoading={trailerIsLoading}
            trailerError={trailerError}
          />
        )
        : null }
      </section>
    );
  }
}

MoviesSection.propTypes = {
  condition: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,

  trailer: PropTypes.shape({}),
  trailerIsLoading: PropTypes.bool.isRequired,
  trailerError: PropTypes.shape({}),
  isModalOpened: PropTypes.bool.isRequired,

  setMoviesCondition: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func.isRequired,

  fetchTrailer: PropTypes.func.isRequired,
  removeTrailerInfo: PropTypes.func.isRequired,
};

MoviesSection.defaultProps = {
  error: null,
  trailer: null,
  trailerError: null,
};

export default MoviesSection;