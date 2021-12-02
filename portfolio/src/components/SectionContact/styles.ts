import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 100px;
`;
export const ContainerIcon = styled.div`
  width: 62px;
  height: 62px;

  border-radius: 30px;

  background-color: ${({ theme }) => theme.colors.gray_150};

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImagageUser = styled.img`
  width: 62px;
  height: 62px;

  border-radius: 30px;
`;
export const WrappeerContact = styled.div`
  width: 150px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;

  color: #f9f9f9;
`;
export const SubTitle = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  color: #828282;
`;
