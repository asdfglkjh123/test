// project imports
import Metamask from '../../../assets/metamasklogo.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const MetamaskLogo = () => {
    useTheme();
    return (
        <>
            <Grid item sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                <img width={220} src={Metamask} alt="shares banner" />
            </Grid>
        </>
    );
};

export default MetamaskLogo;
