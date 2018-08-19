import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width: calc(100% - 4rem);
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 4rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

const MainHeader = () => (
  <Header>
    <Title>World Cup Statistics</Title>
  </Header>
);

export default MainHeader;
