import styled from 'styled-components';

interface ColorsProps {
  color: string;
};

export const Container = styled.div`
  align-self: center;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F5F5F5;
  max-width: 700px;
`;

export const TextContainer = styled.div`
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
  align-self: flex-end;
  font-size: 18px;
  background-color: ${(props) => props.color};
  padding: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: filter .5s;
  margin: 12px 6px 16px 0;

  &:hover {
    filter: brightness(108%);
  };

  &:active {
    filter: opacity(80%);
  };
`;