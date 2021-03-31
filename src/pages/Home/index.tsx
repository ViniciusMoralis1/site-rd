import React from 'react';
import ContentBox from '../../components/ContentBox';

import { Container, ContainerText, Colors } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ContainerText>
        <h1>
          Crie este site <span>responsivo</span> com <span>REACT</span><br/>
          utilizando <span>styled-components</span>
        </h1>

        <h2>
          A fonte utilizada é a Open Sans de 300 a 800.<br/>
          exemplo: "Open Sans", Helvetica, sans-serif, arial;<br/>
          Já as cores são:<br/>
          <Colors color={"#007f56"} />#007f56, <Colors color={"#868686"} />#868686, <Colors color={"#FE9481"} />#FE9481, <Colors color={"#FCDA92"} />#FCDA92 e <Colors color={"#9C8CB9"} />#9C8CB9
        </h2>
      </ContainerText>

      <ContentBox />
    </Container>
  );
};

export default Home;