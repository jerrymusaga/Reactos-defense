import ArtWorks from "./components/ArtWorks"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MintNFT from "./components/MintNFT"
import NFTDetail from "./components/NFTDetail"
import ReactionsModal from "./components/ReactionsModal"
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
      <Footer />
      <MintNFT />
      <NFTDetail />
      <ReactionsModal />
    </div>
  )
}

export default App
