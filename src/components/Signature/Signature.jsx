import React from 'react';
import PropTypes from 'prop-types';

import styles from './signature.scss';

const Signature = ({ name }) => (
  <h1 className={styles.signature}>
    Name: { name }
  </h1>
);

Signature.propTypes = {
  name: PropTypes.string,
};

export default Signature;
