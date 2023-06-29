import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, getGlobalState, useGlobalState} = createGlobalState({
    modal: 'scale-0',
    nftDetailModal: 'scale-0',
    reactionModal: 'scale-0',
    updateNFTModal: 'scale-0',
    loading: {show: false, msg: ''}
});

const setLoadingMsg = (msg) => {
    const loading = getGlobalState('loading')
    setGlobalState('loading', {...loading, msg})
}

export {setGlobalState, getGlobalState, useGlobalState, setLoadingMsg}
