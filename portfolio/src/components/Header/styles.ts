import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.colors.onyx}`};
  background-color: ${(props) => props.theme.colors.lightBlue};
  font-family: ${(props) => props.theme.fonts[0]};
`;
export const Title = styled.p``;
