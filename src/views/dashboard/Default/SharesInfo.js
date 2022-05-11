// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Link } from 'react-router-dom';
// assets
import BajajAreaChartCard from './BajajAreaChartCard';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const SharesInfo = () => {
    const theme = useTheme();

    return (
        <>
            <MainCard
                sx={{ height: 'auto', width: '100%', backgroundColor: theme.palette.grey[900], border: 0, borderRadius: 0 }}
                content={false}
            >
                <CardContent>
                    <Grid container justifyContent="center" sx={{ mt: 10, backgroundColor: theme.palette.grey[900] }}>
                        <Grid container sx={{ my: 5 }} alignContent="center" justifyContent="center">
                            <Grid item lg={4} xs={12} md={4.4} sm={7} sx={{ borderLeft: 2, borderColor: theme.palette.success.main }}>
                                <Typography color={theme.palette.grey[50]} textAlign="left" sx={{ ml: 3 }} variant="h6">
                                    STAX
                                </Typography>
                                <Typography color={theme.palette.success.main} textAlign="left" sx={{ ml: 3 }} variant="h6">
                                    Shares
                                </Typography>
                                <Typography variant="h4" sx={{ color: theme.palette.grey[50], mt: 2.5, ml: 3 }}>
                                    STAX Protocol provides additional boost token (sSTX) allowing hybrid-benefits such as more staking
                                    rewards and rewards and HIGH-YIELD BUSD rewards`. Each sSTX increases the initial APY by 5% and is
                                    limited to 108%. No tokens are available at the launch but users mint them on each purchase. The maximum
                                    total supply is 100,000. The initial sSTX price is 20 BUSD and increases by 0.01 BUSD per token sale.
                                </Typography>
                                <Button sx={{ ml: 3, mt: 2 }} size="large" variant="outlined" color="success">
                                    Learn more
                                </Button>
                                <Button
                                    component={Link}
                                    to="/test/shares"
                                    sx={{ ml: 3, mt: 2 }}
                                    size="large"
                                    variant="contained"
                                    color="success"
                                >
                                    Buy SHARES
                                </Button>
                            </Grid>
                            <Grid item lg={5} xs={12} md={5} sm={7} sx={{ mt: 10 }}>
                                <BajajAreaChartCard />
                                <Typography>sSTX Price Chart</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={10} sx={{ mt: 5 }} alignContent="center" justifyContent="center">
                        <Grid item lg={3} xs={12} sm={5} md={3}>
                            <Card
                                sx={{
                                    border: 0,
                                    borderBottom: 5,
                                    borderRadius: 0,
                                    borderColor: theme.palette.success.dark,
                                    backgroundColor: theme.palette.grey[900]
                                }}
                                variant="outlined"
                            >
                                <CardContent xs={12}>
                                    <Typography color={theme.palette.grey[50]} variant="h3" textAlign="center">
                                        BUSD Dividends
                                    </Typography>
                                    <Typography color={theme.palette.grey[50]} variant="h3" textAlign="center">
                                        70%
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={3} xs={12} sm={5} md={3}>
                            <Card
                                sx={{
                                    border: 0,
                                    borderBottom: 5,
                                    borderRadius: 0,
                                    borderColor: theme.palette.success.dark,
                                    backgroundColor: theme.palette.grey[900]
                                }}
                                variant="outlined"
                            >
                                <CardContent xs={12}>
                                    <Typography color={theme.palette.grey[50]} variant="h3" textAlign="center">
                                        STAX Auto-LP
                                    </Typography>
                                    <Typography color={theme.palette.grey[50]} variant="h3" textAlign="center">
                                        10%
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={3} xs={12} sm={5} md={3}>
                            <Card
                                sx={{
                                    border: 0,
                                    borderBottom: 5,
                                    borderRadius: 0,
                                    borderColor: theme.palette.success.dark,
                                    backgroundColor: theme.palette.grey[900]
                                }}
                                variant="outlined"
                            >
                                <CardContent xs={12}>
                                    <Typography color={theme.palette.grey[50]} variant="h3" textAlign="center">
                                        Governance
                                    </Typography>
                                    <Typography color={theme.palette.grey[50]} variant="h3" textAlign="center">
                                        16%
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={3} xs={12} sm={5} md={3}>
                            <Card
                                sx={{
                                    border: 0,
                                    borderBottom: 5,
                                    borderRadius: 0,
                                    borderColor: theme.palette.success.dark,
                                    backgroundColor: theme.palette.grey[900]
                                }}
                                variant="outlined"
                            >
                                <CardContent xs={12}>
                                    <Typography color={theme.palette.grey[50]} variant="h3" textAlign="center">
                                        Team Fund
                                    </Typography>
                                    <Typography color={theme.palette.grey[50]} variant="h3" textAlign="center">
                                        4%
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default SharesInfo;
