import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import Wrapper from './components/Wrapper'
import Services from './components/Services'
import About from './components/AboutUs'
function App() {
  

  return (
    <>
      <Header />
      <Hero />
      <Wrapper>
          <Section />
      </Wrapper>

      <Wrapper>
        <Services />
      </Wrapper>

      <Wrapper>
        <About />
      </Wrapper>
      
    </>
  )
}

export default App
