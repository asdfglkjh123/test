// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, CardContent, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const TopTitle = () => {
    const theme = useTheme();

    return (
        <>
            <MainCard
                sx={{ height: 'auto', width: 'auto', maxWidth: 600, backgroundColor: theme.palette.grey[900], border: 0 }}
                content={false}
            >
                <CardContent>
                    <Grid container>
                        <Grid container alignContent="center" justifyContent="left">
                            <Grid item>
                                <Typography variant="h1">Store of Value</Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignContent="center" justifyContent="left">
                            <Grid item xs={10} md={12} sm={12} sx={{ mt: 5 }}>
                                <Typography variant="h2">Flexible Ecosystem & Hybrid-Rewards</Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignContent="center" justifyContent="left">
                            <Grid item lg={8} xs={12} md={10} sm={10} sx={{ mt: 5 }}>
                                <Typography color={theme.palette.grey[500]} variant="h5">
                                    STAX is a Decentralized Staking Protocol operating on Binance Smart Chain (BSC). The protocol is
                                    designed to store value and provide hybrid-rewards with no barriers to entry. No authorization is
                                    required to use the the ecosystem. Please read the whitepaper to fully understand STAX Protocol.
                                </Typography>
                            </Grid>
                            <Grid container sx={{ my: 3 }} alignContent="center" justifyContent="left">
                                <Grid>
                                    <Button size="large" variant="outlined" color="success">
                                        Learn More
                                    </Button>
                                </Grid>
                                <Grid sx={{ mx: 3 }}>
                                    <Button size="large" variant="contained" color="success">
                                        Buy STAX
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default TopTitle;
