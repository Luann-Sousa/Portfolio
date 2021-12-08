import { Header } from "../components/Header";
import { HeaderSection } from "../components/SectionHeader";
import { SectionAbout } from "../components/SectionAbout";
import { SectionContact } from "../components/SectionContact";
import { SectionProjects } from "../components/SectionProjects";
export default function App() {
  return (
    <>
      <Header />
      <HeaderSection />
      <SectionAbout />
      <SectionContact />
      <SectionProjects />
    </>
  );
}
