// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import StakingLogo from './StakingLogo';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const StakingInfo = () => {
    const theme = useTheme();

    return (
        <>
            <MainCard
                sx={{ height: 'auto', width: '102.7%', borderRadius: 0, backgroundColor: theme.palette.grey[900], border: 0 }}
                content={false}
            >
                <CardContent>
                    <Grid container>
                        <Grid container mt={5} justifyContent="center">
                            <Grid item>
                                <Typography textAlign="center" variant="h6" color={theme.palette.grey[50]}>
                                    Staking Rewards
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
                            <Grid item lg={3} xs="auto" md={4} sm={4} sx={{ mt: 10 }}>
                                <StakingLogo />
                            </Grid>
                            <Grid item lg={3.5} xs={10} md={4} sm={6} sx={{ mt: 10 }}>
                                <Card
                                    sx={{
                                        borderLeft: 1,
                                        borderRight: 1,
                                        borderBottom: 3,
                                        height: '100%',
                                        width: '100%',
                                        borderColor: theme.palette.success.light,
                                        borderRadius: 5,
                                        boxShadow: '0px 10px 20px green'
                                    }}
                                >
                                    <Grid container sx={{ height: 330, my: 1, display: 'flex', justifyContent: 'center' }}>
                                        <Grid item xs={12} sx={{ height: 50, backgroundColor: theme.palette.grey[900] }} lg={12}>
                                            <Typography variant="h2" sx={{ mt: 3 }} color={theme.palette.grey[50]} textAlign="center">
                                                Staking Calculator
                                            </Typography>
                                        </Grid>
                                        <Grid item sx={{ height: 40, backgroundColor: theme.palette.grey[900], my: 1 }} lg={4}>
                                            <Typography variant="h4" textAlign="center">
                                                STAX Amount:
                                            </Typography>
                                        </Grid>
                                        <Grid item sx={{ height: 40, backgroundColor: theme.palette.grey[900], my: 0 }} lg={3}>
                                            <TextField
                                                sx={{ borderBottom: 2, borderColor: theme.palette.success.dark }}
                                                inputProps={{ style: { color: 'white' } }}
                                                id="standard-basic"
                                                variant="standard"
                                                color="success"
                                            />
                                        </Grid>
                                        <Grid item sx={{ height: 40, backgroundColor: theme.palette.grey[900], my: 1 }} lg={4}>
                                            <Typography variant="h4" textAlign="center">
                                                SHARES (sSTX) Balance:
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default StakingInfo;
