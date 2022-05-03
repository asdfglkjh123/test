import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// project imports
import SSTXCard from './SharesCard';
// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => {
    useTheme();
    return (
        <Grid container sx={{ justifyContent: 'center', display: 'flex' }}>
            <Grid item lg={12}>
                <SSTXCard />
            </Grid>
        </Grid>
    );
};

export default Typography;
