import Header from './components/Header'
import NavBar from './components/NavBar'
import About from './components/About'
import Services from './components/Services'

import photo from './assets/about__photo.jpg'
import { text } from './assets/changeData'
import Price from './components/Price'
import Reviews from './components/Reviews'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />
      <Header link="reviews" />
      <About texts={text} photo={photo} />
      <Services />
      <Price />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
