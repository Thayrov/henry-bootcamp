import React from 'react';
import styled from 'styled-components';

const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;
const Buttons = styled.button`
  width: auto;
  height: 50px;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    color: white;
    background-color: red;
  }
`;

export default class Botones extends React.Component {
  render() {
    const {alerts} = this.props;
    return (
      <DivButtons>
        <Buttons onClick={() => window.alert(alerts.m1)}>Módulo 1</Buttons>
        <Buttons onClick={() => window.alert(alerts.m2)}>Módulo 2</Buttons>
      </DivButtons>
    );
  }
}

// Esto lo exportamos para los tests
export {DivButtons, Buttons};
