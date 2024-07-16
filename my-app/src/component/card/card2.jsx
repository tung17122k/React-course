import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  /* width: 400px; */
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
  }
  .card-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
  .card-content {
    position: absolute;
    width: calc(100% - 18px * 2);
    left: 50%;
    transform: translate(-50%, 50%);
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
  }
  .card-top {
    display: flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  .user-name {
    font-weight: 300;
    font-size: 16px;
    color: #333;
  }
  .card-ava {
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-meta {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .card-amount {
    font-size: ${(props) => (props.fontSize ? "22px" : "18px")};
    font-weight: bold;
    background: linear-gradient(
      86.88deg,
      #7d6aff 1.38%,
      #ffb86c 64.33%,
      #fc2872 119.91%
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .card-title {
    color: ${(props) => props.theme.colors.blue};
    font-size: 18px;
    font-weight: 500;
  }
`;
//  const CardImage = styled.div`
//   height: 400px;
//   width: 100%;
//   border-radius: 8px;
// `;
// const CardImg = styled.img`
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: inherit;
// `;

// const CardContent = styled.div`
//   position: absolute;
//   width: calc(100% - 18px * 2);
//   left: 50%;
//   transform: translate(-50%, 50%);
//   bottom: 0;
//   background-color: white;
//   z-index: 10;
//   border-radius: 20px;
//   padding: 20px;
// `;
// const CardTop = styled.div`
//   display: flex;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 30px;
// `;

// const CardUser = styled.div`
//   display: flex;
//   align-items: center;
//   column-gap: 12px;
// `;
// const UserName = styled.span`
//   font-weight: 300;
//   font-size: 16px;
//   color: #333;
// `;
// const CardAva = styled.img`
//   width: 30px;
//   height: 30px;
//   border-radius: 100rem;
//   object-fit: cover;
//   flex-shrink: 0;
// `;
// const CardFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const CardTitle = styled.h3`
//   color: ${(props) => props.theme.colors.blue};
//   font-size: 18px;
//   font-weight: 500;
/* line-height: 27px; */
// `;
// const CardAmount = styled.span`
//   font-size: ${(props) => (props.fontSize ? "22px" : "18px")};
//   font-weight: bold;

//   background: linear-gradient(
//     86.88deg,
//     #7d6aff 1.38%,
//     #ffb86c 64.33%,
//     #fc2872 119.91%
//   );
//   ${(props) =>
//     props.secondary &&
//     css`
//       background: linear-gradient(
//         86.88deg,
//         #2cccff 1.38%,
//         #20e3b2 64.33%,
//         #ff6651 119.91%
//       );
//     `};

//   color: transparent;
//   -webkit-background-clip: text;
//   background-clip: text;
// `;
// const CardMeta = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;
// `;

const card2 = (props) => {
  return (
    <StyledCard>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1024x768"
          className="card-img"
        ></img>
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              src="https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1024x768"
              className="card-ava"
            ></img>
            <span className="user-name">@zndrson</span>
          </div>
          <div className="card-meta">
            <img src="/icon-heart.svg" alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount">12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default card2;
