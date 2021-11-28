import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: 143px;
`;

export const WrapperSection = styled.div``;

export const Title = styled.p``;

export const SubTitle = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.gray_50};

  margin-top: 20px;
`;

export const WrapperButtons = styled.div`
  width: 28%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 47px;
`;

export const ButtonDownload = styled.button`
  width: 143px;
  height: 42px;
  left: 150px;
  top: 382px;

  background-color: ${({ theme }) => theme.colors.green_light};
  border: 1px ${({ theme }) => theme.colors.green_light};

  cursor: pointer;
`;
export const TitleButtonDownload = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
`;

export const ButtonContact = styled.button`
  width: 157px;
  height: 42px;
  left: 308px;
  top: 382px;

  background: #171717;
  border: 1px solid #333333;
  box-sizing: border-box;

  cursor: pointer;
`;
export const TitleButtonContact = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
`;
