import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  /* width: 400px; */
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  width: calc(100% - 18px * 2);
  left: 50%;
  transform: translate(-50%, 50%);
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;
const CardTop = styled.div`
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;
const CardAva = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  /* line-height: 27px; */
`;
const CardAmount = styled.span`
  font-size: ${(props) => (props.fontSize ? "22px" : "18px")};
  font-weight: bold;

  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.33%,
    #fc2872 119.91%
  );
  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(
        86.88deg,
        #2cccff 1.38%,
        #20e3b2 64.33%,
        #ff6651 119.91%
      );
    `};

  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;
const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg src="https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1024x768"></CardImg>
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <CardAva src="https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1024x768"></CardAva>
            <UserName>@zndrson</UserName>
          </CardUser>
          <CardMeta>
            <img src="/icon-heart.svg" alt="" />
            <span>256</span>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount secondary={props.secondary} fontSize>
            12,000 PSL
          </CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default card;
