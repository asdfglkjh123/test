// project imports
import BUSD from '../../assets/images/busdlogo.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const XsBusdLogo = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center" sx={{ ml: 0.4, mt: 0.2 }}>
                <img width={16} src={BUSD} alt="shares banner" />
            </Grid>
        </>
    );
};

export default XsBusdLogo;
