import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WatchNowWindow from '../WatchNowWindow';
import ViewInfoWindow from '../ViewInfoWindow';
import styles from './MovieItem.scss';

const MovieItem = ({ film, fetchTrailer, setMoviesCondition, onClick }) => {
  const [isInfoOpen, setInfo] = useState(false);
  const { id, poster, title, genres, rating } = film;

  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <img className={styles.poster} src={poster} alt="poster" />
        <button
          className={styles.link}
          onClick={(e) => {
            e.preventDefault();
            setMoviesCondition('Trending');
            onClick(`/details/${id}`);
          }}
        >
          <div className={styles.info}>
            <h3 className={styles.title}>
              {title}
            </h3>
            <p className={styles.rating}>{rating}</p>
            <p className={styles.genres}>{genres}</p>
          </div>
        </button>
      </div>
      <WatchNowWindow
        name="watch"
        film={film}
        switchViewInfo={() => setInfo(!isInfoOpen)}
        fetchTrailer={fetchTrailer}
      />
      { isInfoOpen
        ? (
          <ViewInfoWindow
            film={film}
            switchViewInfo={() => setInfo(!isInfoOpen)}
            fetchTrailer={fetchTrailer}
          />
        )
        : null }
    </div>
  );
}


MovieItem.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    poster: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
  fetchTrailer: PropTypes.func.isRequired,
  setMoviesCondition: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieItem;
