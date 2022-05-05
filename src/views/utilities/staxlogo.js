// project imports
import Stax from '../../assets/StaxLogoOnly.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const StaxLogo = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center" alignContent="center" sx={{ height: 100 }}>
                <img height={80} width="height" src={Stax} alt="shares banner" />
            </Grid>
        </>
    );
};

export default StaxLogo;
