import { Header } from "../components/Header";
import { HeaderSection } from "../components/SectionHeader";
import { SectionAbout } from "../components/SectionAbout";
import { SectionContact } from "../components/SectionContact";
import { SectionService } from "../components/SectionService";
export default function App() {
  return (
    <>
      <Header />
      <HeaderSection />
      <SectionAbout />
      <SectionContact />
      <SectionService />
    </>
  );
}
