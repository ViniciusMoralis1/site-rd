import React from 'react';

import { Container, TextContainer, Button } from './styles';

interface PopupProps {
  setTrigger: any;
};

const Popup: React.FC<PopupProps> = ({setTrigger}) => {
  return (
    <Container>
      <Button color={"#FCDA92"} onClick={() => {setTrigger(false)}} >Fechar</Button>
      <TextContainer>
        <h1>Site responsivo Tablet</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut magna et ex faucibus mollis et nec dolor. Praesent massa nisl, convallis eget accumsan quis, tristique a sapien. Aenean dictum non erat et luctus. Mauris diam nisi, ullamcorper ut lacinia nec, cursus in erat. Integer vitae lacinia neque. Nullam tellus sem, commodo eget sapien sed, molestie maximus arcu. Donec a ex id est porta faucibus eget ornare velit. Fusce hendrerit ultricies urna, eget finibus tellus eleifend a. Aenean cursus arcu id congue dignissim. Donec vel sapien arcu. Nunc congue, mauris cursus sagittis mollis, felis nulla pretium tellus, eu scelerisque tellus lorem vel justo. Curabitur hendrerit lectus vitae tempus egestas. Phasellus ipsum ligula, cursus nec tellus non, vulputate finibus justo. Mauris ornare ante nec aliquam pellentesque. Aliquam auctor ac erat vitae bibendum.</h2>
      </TextContainer>
    </Container>
  );
};

export default Popup;