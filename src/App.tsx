import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import BackGround from './components/BackGround';

function App() {
  return (
    <>
      <BackGround />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </>
  );
}


export default App;

