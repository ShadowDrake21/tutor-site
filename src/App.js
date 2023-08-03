import Header from './components/Header'
import NavBar from './components/NavBar'
import About from './components/About'
import Services from './components/Services'

import photo from './assets/about__photo.jpg'
import { text } from './assets/changeData'
import Price from './components/Price'
import Reviews from './components/Reviews'

function App() {
  return (
    <div>
      <NavBar />
      <Header link="reviews" />
      <About texts={text} photo={photo} />
      <Services />
      <Price />
      <Reviews />
    </div>
  )
}

export default App
