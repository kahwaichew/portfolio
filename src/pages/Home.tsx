import Hero from '../components/Hero';
import SelectedWork from '../components/SelectedWork';
import Process from '../components/Process';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Research from '../components/Research';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle();

  return (
    <>
      <Hero />
      <SelectedWork />
      <Process />
      <Skills />
      <Projects />
      <Research />
    </>
  );
}
