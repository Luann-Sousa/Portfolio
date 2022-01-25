import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 100px;

  @media (max-width: 700px) {
    width: 68rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 100px;
  }
`;
export const Title = styled.h2`
  margin-top: 100px;
  margin-bottom: 30px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  text-align: center;

  @media (max-width: 700px) {
    margin-top: 100px;
    margin-bottom: 30px;

    font-family: "DM Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 42px;
    text-align: center;
  }
`;
export const TextAbout = styled.p`
  font-family: "DM Sans";
  font-size: 18px;
  line-height: 32px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray_50};

  @media (max-width: 700px) {
    font-family: "DM Sans";
    font-size: 18px;
    line-height: 36px;
    text-align: left;

    color: ${({ theme }) => theme.colors.gray_50};
  }
`;
