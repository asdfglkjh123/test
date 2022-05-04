// material-ui
import { useTheme } from '@mui/material/styles';
import { CardContent, Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import BscLogo from './bsclogo';
import MetamaskLogo from './metamasklogo';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const Socials = () => {
    const theme = useTheme();

    return (
        <>
            <MainCard
                sx={{
                    height: 'auto',
                    width: '100%',
                    border: 0,
                    borderRadius: 0,
                    backgroundColor: theme.palette.grey[900]
                }}
                content={false}
            >
                <CardContent>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item lg={5} md="auto" sx={{ mt: 13, backgroundColor: theme.palette.grey[900] }}>
                            <BscLogo />
                        </Grid>
                        <Grid item lg={1.52} md="auto" sx={{ backgroundColor: theme.palette.grey[900], my: 6 }}>
                            <MetamaskLogo />
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default Socials;
