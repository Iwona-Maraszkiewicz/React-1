import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {infoContents} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} image={infoContents.image} />
    <p>{infoContents.text}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.node,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default Info;
