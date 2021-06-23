import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {faqContents} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={faqContents.title} image={faqContents.image} />
    <p>{faqContents.text}</p>
  </Container>
);

Faq.propTypes = {
  title: PropTypes.node,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default Faq;
