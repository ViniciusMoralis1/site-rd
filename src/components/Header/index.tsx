import React from 'react';
import { Container, HeaderImage, Selections, Tech } from './styles';

export default function Header(){
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
}