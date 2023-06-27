import ArtWorks from "./components/ArtWorks"
import Header from "./components/Header"
import Hero from "./components/Hero"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <ArtWorks />
    </div>
  )
}

export default App
