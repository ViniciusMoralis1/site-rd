import styled from 'styled-components';
import logo from '../../assets/rd.png';

export const Container = styled.div`
  height: 120px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  margin-top: 6px;
`;

export const HeaderImage = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  height: 90px;
  width: 170px;
`;

export const Selections = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
  width: 420px;
`;

export const Tech = styled.h1`
  font-weight: 300;
  font-size: 22px;
  color: #007f56;
  text-transform: uppercase;
  letter-spacing: -2px;
`;