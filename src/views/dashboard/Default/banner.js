// project imports
import BigStaxLogo from '../../../assets/BigStaxLogo.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const BannerComp = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center" alignContent="center">
                <img height="100%" width="100%" src={BigStaxLogo} alt="shares banner" />
            </Grid>
        </>
    );
};

export default BannerComp;
