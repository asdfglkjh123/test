// project imports
import Bsc from '../../../assets/bsclogo.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const BscLogo = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center" alignContent="center">
                <img width={400} src={Bsc} alt="shares banner" />
            </Grid>
        </>
    );
};

export default BscLogo;
