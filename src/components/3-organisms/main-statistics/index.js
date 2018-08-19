import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Pannel = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.span`
  font-weight: 400;
  width: 0;
  flex-grow: 1;
`;

const Data = styled.span`
  color: gray;
  width: 0;
  flex-grow: 1;
`;

const MainStatistics = ({ datas }) => (
  <Container>
    <Title>Statistics</Title>
    {datas.map(data => (
      <Pannel key={data.label}>
        <Label>{data.label}</Label>
        <Data>{data.value}</Data>
      </Pannel>
    ))}
  </Container>
);

export default MainStatistics;
