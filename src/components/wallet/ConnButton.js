import { useWeb3React } from '@web3-react/core';
import { injected } from './connectors';
import { Button } from '@mui/material';

const ConnButton = () => {
    const { activate } = useWeb3React();
    const connect = async () => {
        try {
            await activate(injected);
        } catch (ex) {
            console.log(ex);
        }
    };
    return (
        <div>
            <Button onClick={connect} size="large" variant="contained" color="success">
                Connect
            </Button>
        </div>
    );
};

export default ConnButton;
