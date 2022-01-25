import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 100px;

  @media (max-width: 700px) {
    width: 70rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 100px;
  }
`;
export const Title = styled.p`
  margin-top: 100px;
  margin-bottom: 30px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  text-align: center;
`;

export const CardWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 60rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CardProject = styled.div`
  width: 350px;
  height: 240px;
  left: 150px;

  background: #212121;
  border: 1px solid #333333;
  box-sizing: border-box;

  padding: 24px;

  @media (max-width: 700px) {
    margin-left: 15px;
  }
`;

export const CardImageProject = styled.div`
  width: 300px;
  height: 130px;
  left: 175px;
  top: 1259px;

  background: #171717;
  border: 1px solid #333333;
  box-sizing: border-box;

  @media (max-width: 700px) {
    width: 300px;
    height: 130px;

    top: 1259px;

    background: #171717;
    border: 1px solid #333333;
    box-sizing: border-box;
  }
`;

export const TitleProject = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  color: #ffffff;
  margin-top: 10px;
`;

export const SubTitleProject = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  color: #828282;
`;
