import React from "react";
import Card from "./card";
import styled from "styled-components";

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 30px;
  padding: 30px;
`;

const cardList = (props) => {
  return <StyledCardList>{props.children}</StyledCardList>;
};

export default cardList;
