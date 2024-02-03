import './App.scss'

import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax';

const App = () => {
  return (
    <div className='App'>
      <section>
        <Navbar />
        <Hero />
        </section>
      <section><Parallax type="services" /></section>
      <section>Services</section>
      <section><Parallax type="portfolio" /></section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  )
};

export default App;
