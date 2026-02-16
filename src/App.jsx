import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <Expertise />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App