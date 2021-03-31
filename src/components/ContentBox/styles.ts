import styled from 'styled-components';

interface ColorsProps {
  color: string;
};

interface ImageProps {
  width: number;
  imageUrl: string;
};

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin: 24px 0 24px 0;
`;

export const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F5F5F5;
  max-width: 1240px;
`;

export const Box = styled.div<ColorsProps>`
  display: flex;
  width: 380px;
  height: 400px;
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
    margin: 8px 0 0 8px;
  };

  h2 > span {
    font-weight: 700;
  };
`;

export const InfoContainer = styled.div`
  width: 100%;
  background-color: #FFF;
  padding: 16px 32px;
  text-align: center;

  h2 {
    color: #868686;
    font-weight: 400;
    font-size: 17px;
    margin: 12px 0 12px 0;
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
  margin: 12px 0 0 68%;

  &:hover {
    filter: brightness(108%);
  };

  &:active {
    filter: opacity(80%);
  };
`;

export const ButtonClose = styled(Button)<ColorsProps>`
  align-self: flex-end;
  margin: 12px 6px 16px 0;
`;