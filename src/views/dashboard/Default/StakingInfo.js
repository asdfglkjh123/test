// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Button, Typography } from '@mui/material';
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
                        <Grid container mt={2} justifyContent="center">
                            <Grid item>
                                <Typography textAlign="center" variant="h6" color={theme.palette.grey[50]}>
                                    Staking Rewards
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
                            <Grid item lg={5} xs={12} md={5} sm={8} sx={{ mt: 4 }}>
                                <Grid container sx={{ height: 330, my: 1, display: 'flex', justifyContent: 'center' }}>
                                    <Grid
                                        item
                                        lg={4}
                                        xs={12}
                                        md={4.4}
                                        sm={7}
                                        sx={{ borderRight: 2, borderColor: theme.palette.success.main }}
                                    >
                                        <Typography color={theme.palette.grey[50]} textAlign="right" sx={{ mr: 3 }} variant="h6">
                                            STAX
                                        </Typography>
                                        <Typography color={theme.palette.success.main} textAlign="right" sx={{ mr: 3 }} variant="h6">
                                            STAKING
                                        </Typography>
                                        <Typography variant="h4" textAlign="right" sx={{ color: theme.palette.grey[50], mt: 2.5, mr: 3 }}>
                                            STAX is designed to store value and provide high rewards in the form of more STAX. Each stake
                                            may receive different `Rewards rate` depending on the sSTX balance of a user at the moment of
                                            opening the stake. The minimum APR is 9.125% and increases by 4.56% per 1 sSTX (limited to
                                            100,375%)
                                        </Typography>
                                        <Grid container sx={{ display: 'flex', justifyContent: 'right' }}>
                                            <Button sx={{ mr: 3, mt: 2 }} size="large" variant="outlined" color="success">
                                                Learn more
                                            </Button>
                                            <Button sx={{ mr: 3, mt: 2 }} size="large" variant="contained" color="success">
                                                STAKE
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={3} xs="auto" md={4} sm={4} sx={{ mt: 15 }}>
                                <StakingLogo />
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default StakingInfo;
