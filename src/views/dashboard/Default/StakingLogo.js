// project imports
import Staking from '../../../assets/images/StakingLogo.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const StakingLogo = () => {
    useTheme();
    return (
        <>
            <Grid justifyContent="center" sx={{ mt: 10 }}>
                <img height={250} width={250} src={Staking} alt="shares banner" />
            </Grid>
        </>
    );
};

export default StakingLogo;
