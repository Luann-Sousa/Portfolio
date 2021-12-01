import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: 143px;
`;

export const WrapperSection = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionFisrt = styled.div``;
export const Title = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;

  width: 300px;
`;

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
  width: 100%;

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

  :hover {
    background-color: ${({ theme }) => theme.colors.green_light_300};
  }
`;
export const TitleButtonDownload = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
`;

export const ButtonContact = styled.button`
  width: 143px;
  height: 42px;
  left: 150px;
  top: 382px;

  background: #1a1a1a;
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
  color: ${({ theme }) => theme.colors.white_200};
`;

export const WrapperImage = styled.div``;
export const ImageFirst = styled.img`
  width: 100%;
  height: 100%;
`;
