import React from 'react';
import { Container, FooterText, ContainerBrands, RdSmallLogo, BrandLogo } from './styles';

import fourbioLogo from '../../assets/4bio.png';
import drogaRaiaLogo from '../../assets/drogaraia.png';
import drogasilLogo from '../../assets/drogasil.png';
import farmasilLogo from '../../assets/farmasil.png';
import universLogo from '../../assets/univers.png';

export default function Footer(){
  return(
    <Container>
      <FooterText>
        RD 2021. Todos os direitos reservados
      </FooterText>

      <ContainerBrands>
        <BrandLogo imageUrl={drogaRaiaLogo} />
        <BrandLogo imageUrl={drogasilLogo} />
        <BrandLogo imageUrl={farmasilLogo} />
        <BrandLogo imageUrl={universLogo} />
        <BrandLogo imageUrl={fourbioLogo} />
      </ContainerBrands>

      <RdSmallLogo/>
    </Container>
  )
}