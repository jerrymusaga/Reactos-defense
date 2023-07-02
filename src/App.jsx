import { useEffect } from "react"
import Alert from "./components/Alert"
import ArtWorks from "./components/ArtWorks"
import { isWalletConnected } from "./components/Blockchain.Services"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Loading from "./components/Loading"
import MintNFT from "./components/MintNFT"
import NFTDetail from "./components/NFTDetail"
import ReactionsModal from "./components/ReactionsModal"
import Transactions from "./components/Transactions"
import UpdateNFT from "./components/UpdateNFT"

const App = () => {
  useEffect(async () => {
    await isWalletConnected()
  }, [])
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
      <UpdateNFT />
      <Loading />
      <Alert />

    </div>
  )
}

export default App
