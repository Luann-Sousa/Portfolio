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
`;

export const SubTitle = styled.p`
  width: 126px;
  left: 180px;

  font-family: " DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  color: #828282;

  margin-top: 10px;
`;
export const CardIcon = styled.div`
  cursor: pointer;
  /* width: 350px;
  height: 240px;
  left: 150px;

  background: #212121;
  border: 1px solid #333333;
  box-sizing: border-box;

  padding: 24px; */
`;
export const ImageLeft = styled.img`
  width: 50px;
  height: 50px;
`;
export const CardService = styled.div`
  width: 100px;
  height: 100px;
  left: 150px;

  background: #212121;
  border: 1px solid #333333;
  border-bottom: 2px solid ${({ theme }) => theme.colors.green_light};
  box-sizing: border-box;

  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const BorderFooter = styled.div`
  background-color: red;
  width: 100%;
`;
