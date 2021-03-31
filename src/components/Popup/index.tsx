import React from 'react';

import { Container, Box, Image, TextContainer, Button } from './styles';

const Popup: React.FC = () => {
  return (
    <Container>
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
            <Button color={"#FE9481"} onClick={() => {}} >Leia mais...</Button>
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
            <Button color={"#FCDA92"} onClick={() => {}} >Leia mais...</Button>
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
            <Button color={"#9C8CB9"} onClick={() => {}} >alterar tema</Button>
          </TextContainer>
        </Box>
    </Container>
  );
};

export default Popup;