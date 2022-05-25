// project imports
import SHARES from '../../assets/sSTXLogo.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const BigSharesLogo = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center" sx={{ mr: 1, mt: 1 }}>
                <img width={50} src={SHARES} alt="shares banner" />
            </Grid>
        </>
    );
};

export default BigSharesLogo;
