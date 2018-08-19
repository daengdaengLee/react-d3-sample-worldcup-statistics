import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  height: 2rem;
  border: 0 none;
  outline: 0 none;
  background-color: ${props => (props.selected ? 'red' : 'pink')};
  margin-bottom: 0.4rem;
  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;

const MainAttributes = ({ buttons, selected, onClick }) => (
  <Nav>
    {buttons.map(button => (
      <Button
        key={button}
        selected={button === selected}
        onClick={e => onClick({ ...e, __buttonName: button })}
      >
        {button}
      </Button>
    ))}
  </Nav>
);

export default MainAttributes;
