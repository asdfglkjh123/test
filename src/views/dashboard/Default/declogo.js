// project imports
import Decentralized from '../../../assets/images/decentralized.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const DecLogo = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center" alignContent="center" sx={{ height: 350 }}>
                <img height="100%" width="100%" src={Decentralized} alt="shares banner" />
            </Grid>
        </>
    );
};

export default DecLogo;
