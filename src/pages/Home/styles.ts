import styled from 'styled-components';

interface ColorsProps {
  color: string;
}

interface ImageProps {
  width: number;
  imageUrl: string;
}

export const Container = styled.div`
  display: flex;
  height: 800px;
  flex-direction: column;
`;

export const ContainerText = styled.div`
  place-content: center;
  margin-bottom: 24px;

  h1 {
    text-align: center;
    font-weight: 300;
    font-size: 48px;
    color: #007f56;
    margin-bottom: 48px;
  };

  h1 > span {
    font-weight: 800;
  };

  h2 {
    font-size: 28px;
    font-weight: 300;
    text-align: center;
  }
`;

export const Colors = styled.div<ColorsProps>`
  display: inline-block;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.color};
  margin-bottom: 6px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-right: 280px;
`;

export const Box = styled.div<ColorsProps>`
  display: flex;
  width: 380px;
  height: 400px; //280px colorido + 180px branco
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 24px 0 24px;

  h2 {
    font-size: 30px;
    font-weight: 300;
    color: #FFF;
    margin-bottom: 32px;
  };
`;

export const Image = styled.div<ImageProps>`
  margin: 24px 0 42px 48px;
  height: 125px;
  width: ${(props) => props.width}px;
  background: ${(props) => `url(${props.imageUrl})`} no-repeat;
`;

export const TextContainer = styled.div`
  width: 100%;
  background-color: #FFF;
  height: 140px;

  h2 {
    color: #868686;
    font-size: 17px;
    text-align: justify;
    margin: 8px 0 0 8px;
  };

  h2 > span {
    font-weight: 700;
  };
`;

export const Button = styled.button<ColorsProps>`
  color: #FFF;
  font-size: 18px;
  background-color: ${(props) => props.color};
  padding: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: filter .5s;

  &:hover{
    /* background-color: ${(props) => `rgba(${props.color}, .2)`}; */
    filter: brightness(90%);
  };

`;