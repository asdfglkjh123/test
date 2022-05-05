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
                        <Grid item lg={10} md="auto" xs={12} sx={{ mt: 5, backgroundColor: theme.palette.grey[900] }}>
                            <BscLogo />
                        </Grid>
                        <Grid
                            item
                            lg={1.52}
                            md="auto"
                            xs={6}
                            sx={{ justifyContent: 'center', backgroundColor: theme.palette.grey[900], mt: 6 }}
                        >
                            <MetamaskLogo />
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default Socials;
