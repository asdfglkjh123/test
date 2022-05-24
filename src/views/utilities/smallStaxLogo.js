// project imports
import Stax from '../../assets/StaxLogoOnly.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SmallStaxLogo = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center" alignContent="center">
                <img width={23} src={Stax} alt="shares banner" />
            </Grid>
        </>
    );
};

export default SmallStaxLogo;
