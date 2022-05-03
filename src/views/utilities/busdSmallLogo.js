// project imports
import BUSD from '../../assets/images/busdlogo.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const BusdSmallLogo = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center">
                <img width={26} src={BUSD} alt="shares banner" />
            </Grid>
        </>
    );
};

export default BusdSmallLogo;
