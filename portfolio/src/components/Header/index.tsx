import {
  Container,
  Navigation,
  Title,
  Link,
  WrapperLogo,
  WrapperLinkNavigation,
  Ul,
  Li,
} from "./styles";
export const Header = () => {
  return (
    <Container>
      <Navigation>
        <WrapperLogo>
          <Title>
            <Link href="https://br.linkedin.com/"> Weverson Luann </Link>
          </Title>
        </WrapperLogo>

        <WrapperLinkNavigation>
          <Ul>
            <Li>
              <Link href="/"> Sobre min </Link>
            </Li>
            <Li>
              <Link href="/"> Projetos </Link>
            </Li>
            <Li>
              <Link href="/"> Serviços </Link>
            </Li>
            <Li>
              <Link href="/"> Minhas skills </Link>
            </Li>
          </Ul>
        </WrapperLinkNavigation>
      </Navigation>
    </Container>
  );
};
