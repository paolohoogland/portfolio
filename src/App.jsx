import './App.css'

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Intro />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>  
        <section id="projects">
          <Projects />
        </section>
      </main>
    </>
  )
}

export default App