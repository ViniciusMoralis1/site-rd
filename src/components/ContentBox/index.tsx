import React, { useState } from 'react';
import Popup from '../../components/Popup';

import { Content, Box, Image, TextContainer, Button, Container, InfoContainer, ButtonClose } from './styles';

const ContentBox: React.FC = () => {
  const [ showMore, setShowMore ] = useState(false);
  const [ showPopup, setShowPopup ] = useState(false);

  const showMoreScrollDown = () => {
    setShowMore(!showMore);
  };

  const showMorePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
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
            <Button color={"#FE9481"} onClick={showMoreScrollDown} >{!showMore ? "Leia mais..." : "Fechar info"}</Button>
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
            <Button color={"#FCDA92"} onClick={showMorePopup} >Leia mais...</Button>
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
      </Content>

      {showMore && (
        <Container>
          <ButtonClose color={"#FE9481"} onClick={showMoreScrollDown} >Fechar</ButtonClose>
          <InfoContainer>
            <h1>Site responsivo Desktop</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut magna et ex faucibus mollis et nec dolor. Praesent massa nisl, convallis eget accumsan quis, tristique a sapien. Aenean dictum non erat et luctus. Mauris diam nisi, ullamcorper ut lacinia nec, cursus in erat. Integer vitae lacinia neque. Nullam tellus sem, commodo eget sapien sed, molestie maximus arcu. Donec a ex id est porta faucibus eget ornare velit. Fusce hendrerit ultricies urna, eget finibus tellus eleifend a. Aenean cursus arcu id congue dignissim.</h2>
            <h2>Morbi sollicitudin dignissim tristique. Donec in venenatis ante. In ante velit, ultricies nec ligula at, ornare convallis erat. Fusce nibh ante, rhoncus sed elit sit amet, feugiat pellentesque lorem. Duis tellus felis, tempus in lacinia a, dictum in lorem. Morbi condimentum ultrices nunc, eget imperdiet sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum et metus sit amet lorem consectetur suscipit. Ut nisi libero, pellentesque eu feugiat ac, dictum ut massa.</h2>
          </InfoContainer>
        </Container>
      )}

      {showPopup && (
        <Popup setTrigger={setShowPopup} />
      )}
    </>
  );
};

export default ContentBox;