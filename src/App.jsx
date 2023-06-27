import ArtWorks from "./components/ArtWorks"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Transactions from "./components/Transactions"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <ArtWorks />
      <Transactions />
    </div>
  )
}

export default App
