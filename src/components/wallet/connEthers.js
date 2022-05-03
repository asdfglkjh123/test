import { ethers, providers } from 'ethers';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useWeb3React } from '@web3-react/core';

const ButtonConnector = () => {
    const [errorMessagae, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const updateEthers = () => {
        const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(tempProvider);

        const tempSigner = tempProvider.getSigner();
        setSigner(tempSigner);
    };

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        updateEthers();
    };

    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' }).then((result) => {
                accountChangedHandler(result[0]);
            });
        } else {
            setErrorMessage('Need to install MetaMask');
        }
    };

    return (
        <div>
            <Button onClick={connectWalletHandler} size="large" variant="outlined" color="success" boxShadow={23}>
                Connect Wallet
            </Button>
        </div>
    );
};
export default ButtonConnector;
