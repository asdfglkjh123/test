// project imports
import Metamask from '../../../assets/metamasklogo.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const MetamaskLogo = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center" alignContent="center">
                <img height={200} src={Metamask} alt="shares banner" />
            </Grid>
        </>
    );
};

export default MetamaskLogo;
