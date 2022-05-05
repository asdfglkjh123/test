// project imports
import Staking from '../../../assets/images/StakingLogo.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const StakingLogo = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center">
                <img height={250} width="100%" src={Staking} alt="shares banner" />
            </Grid>
        </>
    );
};

export default StakingLogo;
