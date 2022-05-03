// project imports
import Twitter from '../../../assets/twitterlogo.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TwitterLogo = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center" alignContent="center">
                <img height={200} src={Twitter} alt="shares banner" />
            </Grid>
        </>
    );
};

export default TwitterLogo;
