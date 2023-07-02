import Web3 from "web3";
import {setGlobalState, getGlobalState, setAlert} from '../store'
import abi from '../abis/ReactosNFTMarketplace.json';

const {ethereum} = window ;
window.web3 = new Web3(ethereum)
window.web3 = new Web3(window.web3.currentProvider)

const getContract = async () => {
    const connectedAccount = getGlobalState('connectedAccount');
    if(connectedAccount){
        const web3 = window.web3;
        const networkID = await web3.eth.net.getId();
        const networkData = abi.networks(networkID);

        if(networkData){
            const contract = new web3.eth.Contract(abi.abi, networkData.address)
            return contract;
        }else{
            return null
        }
    }else{
        return getGlobalState('contract')
    }
}

const connectWallet = async () => {
    try{
        if(!ethereum) return alert('Please install MetaMask')
        const accounts = await ethereum.request({method: 'eth_requestAccounts'})
        setGlobalState('connectedAccount', accounts[0].toLowerCase())
    }catch(error){
        reportError(error)
    }
}

const reportError = (error) => {
    setAlert(JSON.stringify(error), 'red')
    throw new Error('No Ethereum Object')
}

const isWalletConnected = async () => {
    try{
        if(!ethereum) return alert('Please install MetaMask')
        const accounts = await ethereum.request({method: 'eth_requestAccounts'})
        window.ethereum.on('chainChanged', async (chainId) => {
            window.location.reload()
        })
        window.ethereum.on('accountsChanged', async () => {
            setGlobalState('connectedAccount', accounts[0].toLowerCase())
            await isWalletConnected()
        })
        if(accounts.length){
            setGlobalState('connectedAccount', accounts[0].toLowerCase())
        }else{
            alert("Please connect a wallet")
            console.log("No Account Found")
        }
    }catch(error){
        reportError(error)
    }
}




export {isWalletConnected, connectWallet}