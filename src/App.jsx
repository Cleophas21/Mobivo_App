import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import Wrapper from './components/Wrapper'
import Services from './components/Services'
import About from './components/AboutUs'
import Products from './components/Products'
import Card from './components/Card'
import Testimonial from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Stats from './components/Stats'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
function App() {
  

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <>
          <Header />
      <Hero />

      <Wrapper className="absolute top-125 left-0 right-0 mx-auto w-3/4">
          <Stats />
      </Wrapper>
      <Wrapper>
          <Section />
      </Wrapper>

      <Wrapper>
        <Services />
      </Wrapper>

      <Wrapper>
        <About />
      </Wrapper>

      <Wrapper>
        <Products />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'> 
          <Card productName="Oppo" cost="50,000" image="two.jpg"/>
          <Card productName="Oppo" cost="50,000" image="two.jpg"/>
          <Card productName="Oppo" cost="50,000" image="two.jpg"/>
          <Card productName="Oppo" cost="50,000" image="two.jpg"/>
          <Card productName="Oppo" cost="50,000" image="two.jpg"/>
          <Card productName="Oppo" cost="50,000" image="two.jpg"/>
        </div>
        
      </Wrapper>
      
      <Wrapper>
        <Testimonial />
      </Wrapper>

      <Wrapper className="bg-blue-500">
        <Contact />
      </Wrapper>

       <Wrapper className="bg-blue-900">
        <Footer />
      </Wrapper>
        
         </>}/>

         <Route path='/signup' element={<Signup/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
