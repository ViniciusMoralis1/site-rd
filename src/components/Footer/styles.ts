import styled from 'styled-components';

import rdSmallLogo from '../../assets/rd-small.png';

interface BrandLogoProps {
  imageUrl: any;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: space-between;
  align-items: center;
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

// export const UniversLogo = styled.div`
//   background-image: url(${universLogo});
//   background-repeat: no-repeat;
//   height: 40px;
//   width: 75px;
// `

export const RdSmallLogo = styled.div`
  background-image: url(${rdSmallLogo});
  background-repeat: no-repeat;
  height: 40px;
  width: 75px;
`

export const BrandLogo = styled.div<BrandLogoProps>`
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-repeat: no-repeat;
  height: 40px;
  width: 90px;
`