// project imports
import BUSD from '../../assets/images/busdlogo.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const BusdLogo = () => {
    useTheme();
    return (
        <>
            <Grid item justifyContent="center" alignContent="center">
                <Grid item lg={11} sx={{ mx: 1.5 }}>
                    <img width={60} src={BUSD} alt="shares banner" />
                </Grid>
            </Grid>
        </>
    );
};

export default BusdLogo;
