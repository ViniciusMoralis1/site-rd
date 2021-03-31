import React, { useState } from 'react';
import Popup from '../../components/Popup';

import { Content, Box, Image, TextContainer, Button } from './styles';

const ContentBox: React.FC = () => {
  const [ showMore, setShowMore ] = useState(false);
  const [ showPopup, setShowPopup ] = useState(false);

  const showMoreScrollDown = () => {
    setShowMore(!showMore);
    console.log(showMore);
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
              <Button color={"#FE9481"} >Leia mais...</Button>
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
              <Button color={"#FCDA92"} >Leia mais...</Button>
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
              <Button color={"#9C8CB9"} >alterar tema</Button>
            </TextContainer>
          </Box>
        </Content>
      )}

      {showPopup && (
        <Popup setTrigger={setShowPopup} />
      )}
    </>
  );
};

export default ContentBox;