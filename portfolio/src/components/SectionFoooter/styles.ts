import styled from "styled-components";

export const ContainerFooter = styled.div``;

export const Title = styled.p`
  /* font-family: " DM Sans"; */
  font-style: normal;
  font-size: 17px;
  color: #f9f9f9;
`;

export const TitleSpan = styled.span`
  /* font-family: " DM Sans"; */
  font-style: normal;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.green_light};
`;

export const Footer = styled.div`
  width: 100%;
  height: 40px;

  background-color: #333333;

  display: flex;
  align-items: center;
  justify-content: center;
`;
