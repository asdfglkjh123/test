// project imports
import Stax from '../../assets/StaxLogoOnly.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const XsStaxLogo = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center" alignContent="center" sx={{ ml: 0.5, mt: 0.2 }}>
                <img width={16} src={Stax} alt="shares banner" />
            </Grid>
        </>
    );
};

export default XsStaxLogo;
