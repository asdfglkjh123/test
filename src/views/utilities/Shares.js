import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SharesCard from './SharesCard';
// project imports
// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => {
    useTheme();
    return (
        <Grid container sx={{ justifyContent: 'center', display: 'flex' }}>
            <Grid item lg={12}>
                <SharesCard />
            </Grid>
        </Grid>
    );
};

export default Typography;
