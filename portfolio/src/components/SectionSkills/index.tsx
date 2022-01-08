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
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiMysql,
  SiNodedotjs,
} from "react-icons/si";
import { FaHtml5, FaReact } from "react-icons/fa";
export const SectionSkills = () => {
  return (
    <Container>
      <Title>Minhas Skills</Title>

      <CardWrapper>
        <CardService>
          <FaHtml5 size={50} color="#2bcf0a" />
        </CardService>

        <CardService>
          <IoLogoCss3 size={50} color="#2bcf0a" />
        </CardService>

        <CardService>
          <SiJavascript size={50} color="#2bcf0a" />
        </CardService>

        <CardService>
          <SiTypescript size={50} color="#2bcf0a" />
        </CardService>

        <CardService>
          <FaReact size={50} color="#2bcf0a" />
        </CardService>

        <CardService>
          <SiNextdotjs size={50} color="#2bcf0a" />
        </CardService>

        <CardService>
          <SiMysql size={50} color="#2bcf0a" />
        </CardService>

        <CardService>
          <SiNodedotjs size={50} color="#2bcf0a" />
        </CardService>
      </CardWrapper>
    </Container>
  );
};
