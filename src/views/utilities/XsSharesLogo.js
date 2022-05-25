// project imports
import SHARES from '../../assets/sSTXLogo.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const XsSharesLogo = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center" sx={{ ml: 0.5, mt: 0.2 }}>
                <img width={15} src={SHARES} alt="shares banner" />
            </Grid>
        </>
    );
};

export default XsSharesLogo;
