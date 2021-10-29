import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { pageContents } from '../../data/dataStore';

const FAQ = () => {
  return (
    <Container>
      <Hero titleText={pageContents.FAQ.title} image={pageContents.FAQ.image} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod omnis officia, asperiores ex saepe reiciendis quam. Laboriosam doloribus numquam suscipit ipsam, quo corrupti accusamus cumque hic quam incidunt natus.</p>
    </Container>
  );
};

export default FAQ;