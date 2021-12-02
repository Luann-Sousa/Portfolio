import {
  Container,
  WrappeerContact,
  ContainerIcon,
  ImagageUser,
  Title,
  SubTitle,
} from "./styles";
import { FiInstagram } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
export const SectionContact = () => {
  return (
    <Container>
      <WrappeerContact>
        <ContainerIcon>
          <ImagageUser src="https://lh3.googleusercontent.com/ogw/ADea4I4tlRy4YzliZL91Ro0GJgzGByiPxeqe7T06U6V3=s83-c-mo" />
        </ContainerIcon>
        <Title>Meu Nome</Title>
        <SubTitle>Weverson Luan</SubTitle>
      </WrappeerContact>

      <WrappeerContact>
        <ContainerIcon>
          <AiOutlineMail size={32} color="#00DF5E" />
        </ContainerIcon>
        <Title>E-mail</Title>
        <SubTitle>progrmadorwl@gmail.com</SubTitle>
      </WrappeerContact>

      <WrappeerContact>
        <ContainerIcon>
          <FiInstagram size={32} color="#00DF5E" />
        </ContainerIcon>
        <Title>Instagram</Title>
        <SubTitle>@WTECH</SubTitle>
      </WrappeerContact>

      <WrappeerContact>
        <ContainerIcon>
          <FiPhone size={32} color="#00DF5E" />
        </ContainerIcon>
        <Title>Telefone</Title>
        <SubTitle>(31) 9 8213-2421 </SubTitle>
      </WrappeerContact>
    </Container>
  );
};
