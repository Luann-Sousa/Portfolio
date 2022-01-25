import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  @media (max-width: 700px) {
    width: 68rem;
  }
`;
export const Navigation = styled.nav`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const WrapperLogo = styled.div``;
export const Title = styled.h1`
  font-family: "DM Sans";
  cursor: pointer;

  @media (max-width: 700px) {
    font-family: "DM Sans";
    font-style: normal;
    font-size: 28px;
    line-height: 23px;
  }
`;
export const Link = styled.a`
  font-family: "DM Sans";
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white_200};

  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.green_light};
    text-decoration: underline;
  }
`;
export const WrapperLinkNavigation = styled.div``;
export const Ul = styled.ul`
  font-family: "DM Sans";
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;

  padding: 8px;
  margin: 10px;
`;
export const Li = styled.li`
  font-family: "DM Sans";
  font-style: normal;
  font-size: 18px;
  line-height: 23px;

  margin: 20px;

  @media (max-width: 700px) {
    font-family: "DM Sans";
    font-style: normal;
    font-size: 28px;
    line-height: 23px;

    margin: 20px;
  }
`;
