import {
  Container,
  WrapperSection,
  Title,
  SubTitle,
  WrapperButtons,
  SectionFisrt,
  ButtonDownload,
  TitleButtonDownload,
  ButtonContact,
  TitleButtonContact,
  WrapperImage,
  ImageFirst,
} from "./styles";

export const HeaderSection = () => {
  return (
    <Container>
      <WrapperSection>
        <SectionFisrt>
          <Title>Olá, eu sou o Weverson Luan Sousa :) </Title>
          <SubTitle>Desenvolvedor FullStack & UI Designer</SubTitle>

          <WrapperButtons>
            <ButtonDownload>
              <TitleButtonDownload>Download CV</TitleButtonDownload>
            </ButtonDownload>

            <ButtonContact>
              <TitleButtonContact>Entrar em contato</TitleButtonContact>
            </ButtonContact>
          </WrapperButtons>
        </SectionFisrt>

        <WrapperImage>
          <ImageFirst src="/images/test.png" />
        </WrapperImage>
      </WrapperSection>
    </Container>
  );
};
