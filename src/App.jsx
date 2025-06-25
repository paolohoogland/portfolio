import './App.css'

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'

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
      </main>
    </>
  )
}

export default App