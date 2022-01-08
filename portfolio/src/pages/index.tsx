import React from "react";
import { Header } from "../components/Header";
import { HeaderSection } from "../components/SectionHeader";
import { SectionAbout } from "../components/SectionAbout";
import { SectionContact } from "../components/SectionContact";
import { SectionService } from "../components/SectionService";
import { SectionProjects } from "../components/SectionProjects";
import { SectionSkills } from "../components/SectionSkills";
import { SectionFooter } from "../components/SectionFoooter";

export default function App() {
  return (
    <>
      <div className="App">
        <Header />
        <HeaderSection />
        <SectionAbout />
        <SectionContact />
        <SectionProjects />
        <SectionService />
        <SectionSkills />
      </div>
      <SectionFooter />
    </>
  );
}
