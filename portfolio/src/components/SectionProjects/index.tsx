import {
  Container,
  Title,
  CardWrapper,
  CardProject,
  CardImageProject,
  TitleProject,
  SubTitleProject,
} from "./styles";

export const SectionProjects = () => {
  return (
    <Container>
      <Title>Projetos</Title>

      <CardWrapper>
        <CardProject>
          <CardImageProject></CardImageProject>
          <TitleProject>$Wsfinances</TitleProject>
          <SubTitleProject>
            Tecnologias React-Native, JavaScript e Typescript
          </SubTitleProject>
        </CardProject>

        <CardProject>
          <CardImageProject></CardImageProject>
          <TitleProject>RentX</TitleProject>
          <SubTitleProject>
            Tecnologias React-Native, JavaScript e Typescript
          </SubTitleProject>
        </CardProject>

        <CardProject>
          <CardImageProject></CardImageProject>
          <TitleProject>Wchat</TitleProject>
          <SubTitleProject>
            Tecnologias React-Native, JavaScript e Typescript
          </SubTitleProject>
        </CardProject>
      </CardWrapper>
    </Container>
  );
};
