

import Nav from './components/navbar'
import './App.css'
import Home from './components/Home'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import {Route, Routes} from "react-router-dom"
export default function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <p className="App-intro">“Knowledge is power” - Francis Bacon1</p>
      <div className="container"></div>

      <div className="add-cars"></div>
    </>
  )
}
