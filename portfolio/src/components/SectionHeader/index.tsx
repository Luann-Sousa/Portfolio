import {
  Container,
  WrapperSection,
  Title,
  SubTitle,
  WrapperButtons,
  ButtonDownload,
  TitleButtonDownload,
  ButtonContact,
  TitleButtonContact,
} from "./styles";

export const HeaderSection = () => {
  return (
    <Container>
      <WrapperSection>
        <Title>Olá, eu sou o Weverson Luan Sousa:) </Title>
        <SubTitle>Desenvolvedor FullStack & UI Designer</SubTitle>

        <WrapperButtons>
          <ButtonDownload>
            <TitleButtonDownload>Download CV</TitleButtonDownload>
          </ButtonDownload>

          <ButtonContact>
            <TitleButtonContact>Entrar em contato</TitleButtonContact>
          </ButtonContact>
        </WrapperButtons>
      </WrapperSection>
    </Container>
  );
};
