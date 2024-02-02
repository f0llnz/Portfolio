import './App.scss'

import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'

const App = () => {
  return (
    <div className='App'>
      <section>
        <Navbar />
        <Hero />
        </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  )
};

export default App;
