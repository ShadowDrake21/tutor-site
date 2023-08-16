import Header from './components/Header/Header'
import NavBar from './components/Header/NavBar'
import About from './components/AboutComponent/About'
import Services from './components/ServicesComponent/Services'
import Price from './components/PriceComponent/Price'
import Reviews from './components/ReviewsComponent/Reviews'
import Contacts from './components/ContactsComponent/Contacts'
import Footer from './components/FooterComponent/Footer'

import photo from './assets/about__photo.jpg'
import { text } from './assets/changeData'

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
