import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TopArea = styled.div`
  height: 6rem;
`;

const BelowArea = styled.div`
  min-height: calc(100% - 6rem);
  display: flex;
`;

const LeftArea = styled.div`
  width: 8rem;
`;

const CenterArea = styled.div`
  width: 0;
  flex-grow: 1;
`;

const RightArea = styled.div`
  width: 20rem;
`;

const MainTemplate = ({ top, left, center, right }) => (
  <Container>
    <TopArea>{top()}</TopArea>
    <BelowArea>
      <LeftArea>{left()}</LeftArea>
      <CenterArea>{center()}</CenterArea>
      <RightArea>{right()}</RightArea>
    </BelowArea>
  </Container>
);

export default MainTemplate;
