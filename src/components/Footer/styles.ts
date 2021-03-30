import styled from 'styled-components';
import fourbioLogo from '../../assets/4bio.png';
import drogaRaiaLogo from '../../assets/drogaraia.png';
import drogasilLogo from '../../assets/drogasil.png';
import farmasilLogo from '../../assets/farmasil.png';
import universLogo from '../../assets/univers.png';
import rdSmallLogo from '../../assets/rd-small.png';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: space-between;
`

export const FooterText = styled.h2`
  font-weight: 400;
  font-size: 12px;
  color: #868686;
`

export const ContainerBrands = styled.div`
  display: flex;
  flex-direction: row;
  width: 470px;
  justify-content: space-between;
  margin-right: 280px;
`

export const FourbioLogo = styled.div`
  background-image: url(${fourbioLogo});
  background-repeat: no-repeat;
  height: 40px;
  width: 70px;
`

export const DrogaRaiaLogo = styled.div`
  background-image: url(${drogaRaiaLogo});
  background-repeat: no-repeat;
  height: 40px;
  width: 75px;
`
export const DrogasilLogo = styled.div`
  background-image: url(${drogasilLogo});
  background-repeat: no-repeat;
  height: 40px;
  width: 90px;
`

export const FarmasilLogo = styled.div`
  background-image: url(${farmasilLogo});
  background-repeat: no-repeat;
  height: 40px;
  width: 80px;
`

export const UniversLogo = styled.div`
  background-image: url(${universLogo});
  background-repeat: no-repeat;
  height: 40px;
  width: 75px;
`

export const RdSmallLogo = styled.div`
  background-image: url(${rdSmallLogo});
  background-repeat: no-repeat;
  height: 40px;
  width: 75px;
`