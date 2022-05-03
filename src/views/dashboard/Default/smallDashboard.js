import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import { ggetTotalSTAXSupply, sharesTotalSupply } from 'components/wallet/sharesABI';
import BigNumber from 'bignumber.js';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const SmallDashboard = () => {
    const theme = useTheme();
    const [totalSupply, setTotalSupply] = useState(0);
    const [sharesSupply, setSharesSupply] = useState(0);
    const totalSupplyToNumber = new BigNumber(totalSupply);
    const totalSupplyFormat = totalSupplyToNumber.decimalPlaces(2);
    const totalSupplyFormatted = totalSupplyFormat.toLocaleString(undefined);
    const fetchTotalSupply = async () => {
        ggetTotalSTAXSupply()
            .then((balance) => {
                setTotalSupply(balance);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const fetchSharesSupply = async () => {
        sharesTotalSupply()
            .then((balance) => {
                setSharesSupply(balance);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        async function load1() {
            fetchTotalSupply();
            fetchSharesSupply();
        }
        load1();
    }, []);

    return (
        <>
            <MainCard sx={{ height: 'auto', width: 'auto', backgroundColor: theme.palette.grey[900], border: 0 }} content={false}>
                <CardContent>
                    <Grid container>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Typography textAlign="center" variant="h6">
                                    Decentralized Staking Protocol
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ my: 3 }} justifyContent="center">
                            <Grid item lg={8} xs={11} md={12} sm={12} sx={{ mt: 0 }}>
                                <Typography textAlign="center" color={theme.palette.grey[500]} variant="h5">
                                    STAX Protocol is designed to provide hybrid staking rewards in BUSD & STAX - native token. You may think
                                    of STAX as Store of Value.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ my: 3 }} justifyContent="center">
                            <Grid item lg={8} xs={12} md={12} sm={12} sx={{ mt: 3 }}>
                                <Typography textAlign="center" color={theme.palette.grey[500]} variant="h5">
                                    Overview of STAX numbers.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={10} justifyContent="center">
                            <Grid item lg={4} xs={12} sm={8} md={8}>
                                <Card
                                    sx={{
                                        border: 0,
                                        borderBottom: 5,
                                        borderRadius: 0,
                                        borderColor: theme.palette.success.dark
                                    }}
                                    variant="outlined"
                                >
                                    <CardContent xs={12} lg={12}>
                                        <Typography variant="h3" textAlign="center">
                                            Circulating STAX Supply
                                        </Typography>
                                        <Typography variant="h3" textAlign="center">
                                            {totalSupplyFormatted}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item lg={4} xs={12} sm={8} md={8}>
                                <Card
                                    sx={{
                                        border: 0,
                                        borderBottom: 5,
                                        borderRadius: 0,
                                        borderColor: theme.palette.success.dark
                                    }}
                                    variant="outlined"
                                >
                                    <CardContent xs={12} lg={12}>
                                        <Typography variant="h3" textAlign="center">
                                            Total Shares Sold
                                        </Typography>
                                        <Typography variant="h3" textAlign="center">
                                            {sharesSupply} / 100,000 sSTX
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item lg={4} xs={12} sm={8} md={8}>
                                <Card
                                    sx={{
                                        border: 0,
                                        borderBottom: 5,
                                        borderRadius: 0,
                                        borderColor: theme.palette.success.dark
                                    }}
                                    variant="outlined"
                                >
                                    <CardContent xs={12} lg={12}>
                                        <Typography variant="h3" textAlign="center">
                                            STAX Holders
                                        </Typography>
                                        <Typography variant="h3" textAlign="center">
                                            N/A
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default SmallDashboard;
