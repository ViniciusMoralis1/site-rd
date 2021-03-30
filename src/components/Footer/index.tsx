import React from 'react';

import { Container, FooterText, ContainerBrands, FourbioLogo, DrogaRaiaLogo, DrogasilLogo, FarmasilLogo, UniversLogo, RdSmallLogo } from './styles';

export default function Footer(){
  return(
    <Container>
      <FooterText>
        RD 2021. Todos os direitos reservados
      </FooterText>

      <ContainerBrands>
        <DrogaRaiaLogo/>
        <DrogasilLogo/>
        <FarmasilLogo/>
        <UniversLogo/>
        <FourbioLogo/>
      </ContainerBrands>

      <RdSmallLogo/>
    </Container>
  )
}