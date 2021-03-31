import React from 'react';

import { Container, ContainerText, Colors, Content, Box, Image, TextContainer } from './styles';

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

      <Content>
        <Box color={"#FE9481"}>
          <div>
            <Image width={238} imageUrl={"/img/desktop.png"}/>
            <h2>Site Responsivo DESKTOP</h2>
          </div>
          <TextContainer>
            <h2>
              Quando pressionado o botão <span>Leia mais...</span> o<br/>
              restante da informação deverá aparecer em<br/>
              scroll down.
            </h2>
          </TextContainer>
        </Box>
        <Box color={"#FCDA92"}>
          <div>
            <Image width={238} imageUrl={"/img/tablet.png"}/>
            <h2>Site Responsivo TABLET</h2>
          </div>
          <TextContainer>
            <h2>
              Quando pressionado o botão <span>Leia mais...</span><br/>
              informação deverá aparecer completa em um<br/>
              popup na tela.
            </h2>
          </TextContainer>
        </Box>
        <Box color={"#9C8CB9"}>
          <div>
            <Image width={238} imageUrl={"/img/mobile.png"}/>
            <h2>Site Responsivo MOBILE</h2>
          </div>
          <TextContainer>
            <h2>
              Quando pressionado o botão <span>alterar tema</span><br/>
              modifique o tema do site para blackfriday a seu<br/>
              gosto.
            </h2>
          </TextContainer>
        </Box>
      </Content>
    </Container>
  );
};

export default Home;