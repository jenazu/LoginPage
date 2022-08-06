import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <h1>
        Welcom You <br />
        Back
      </h1>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 70px;
    font-weight: 900;
    color: #343434;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default Main;
