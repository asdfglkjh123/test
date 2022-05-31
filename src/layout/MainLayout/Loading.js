import { Grid, Typography } from '@mui/material';
import BannerComp from 'views/dashboard/Default/banner';

const Loading = () => (
    <Grid item container sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', width: '100%', height: '100%' }}>
        <BannerComp />
        <Typography>Loading... Please wait</Typography>
    </Grid>
);

export default Loading;
