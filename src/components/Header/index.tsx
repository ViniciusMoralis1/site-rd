import React from 'react';
import { Container, HeaderImage, Selections, Tech } from './styles';

const Header: React.FC = () => {
  return (
      <Container>
        <HeaderImage/>

        <Selections>
          <Tech>html5</Tech>
          <Tech>css3</Tech>
          <Tech>javascript</Tech>
          <Tech>react</Tech>
          <Tech>redux</Tech>
        </Selections>

      </Container>
  );
};

export default Header;