import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Gallery from "./components/Gallery"

function App() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar/>
      <Hero/>
      <Gallery/>
    </main>
  )
}

export default App