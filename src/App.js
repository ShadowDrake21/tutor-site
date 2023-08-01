import Header from './components/Header'
import NavBar from './components/NavBar'
import About from './components/About'
import Services from './components/Services'

import photo from './assets/about__photo.jpg'
import { text } from './assets/changeData'

function App() {
  return (
    <div>
      <NavBar />
      <Header link="reviews" />
      <About texts={text} photo={photo} />
      <Services />
    </div>
  )
}

export default App
