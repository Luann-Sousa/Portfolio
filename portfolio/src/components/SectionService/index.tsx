import React from "react";
import {
  Container,
  Title,
  CardWrapper,
  CardService,
  SubTitle,
  CardIcon,
  ImageLeft,
  BorderFooter,
} from "./styles";
import ImageIconLeft from "../../assets/image-left.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
export const SectionService = () => {
  return (
    <Container>
      <Title>Serviços</Title>

      <CardWrapper>
        <CardService>
          <CardIcon>
            <BsPhone color="green" size={28} />
          </CardIcon>
          <SubTitle>Desenvolvimento Mobile</SubTitle>
        </CardService>

        <CardService>
          <CardIcon>
            <CgIfDesign color="green" size={28} />
          </CardIcon>
          <SubTitle>UI Designer</SubTitle>
        </CardService>

        <CardService>
          <CardIcon>
            <FiChevronLeft color="green" size={28} />
            <FiChevronRight color="green" size={28} />
          </CardIcon>
          <SubTitle>Criaçao de sites responsivos</SubTitle>
        </CardService>
      </CardWrapper>
    </Container>
  );
};
