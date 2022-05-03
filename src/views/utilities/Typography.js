import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// project imports
import { gridSpacing } from 'store/constant';
import StakingCard from './StakingCard';
// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => {
    useTheme();
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item lg={12}>
                <StakingCard />
            </Grid>
        </Grid>
    );
};

export default Typography;
