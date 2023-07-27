import Header from './components/Header'
import NavBar from './components/NavBar'
import About from './components/About'

import photo from './assets/about__photo.jpg'
import { text } from './assets/changeData'

function App() {
  return (
    <div>
      <NavBar />
      <Header link="reviews" />
      <About texts={text} photo={photo} />
    </div>
  )
}

export default App
