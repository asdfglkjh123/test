import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
// material-ui
import { Box, Card, Grid, Typography, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import EChartsReact from 'echarts-for-react';
// project imports
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LayersIcon from '@mui/icons-material/Layers';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import {
    ggetTotalSTAXSupply,
    getStaxPrice,
    ggetBUSDBalance,
    ggetStaxBalance,
    ggetOwnBalance,
    getsSTXPrice,
    sharesTotalSupply,
    stakeHas
} from 'components/wallet/sharesABI';
import BigNumber from 'bignumber.js';
import XsStaxLogo from './xsStaxLogo';
import XsSharesLogo from './XsSharesLogo';
import XsBusdLogo from './XsBusdLogo';
import Web3 from 'web3';

const ShadowBox = ({ shadow }) => (
    <Card sx={{ mb: 3, boxShadow: shadow }}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 4.5,
                bgcolor: 'primary.light',
                color: 'grey.800'
            }}
        >
            <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
        </Box>
    </Card>
);

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};

const UtilitiesShadow = () => {
    const theme = useTheme();
    const [totalStaxSuply, setTotalStaxSupply] = React.useState(0);
    const supplyNumber = new BigNumber(totalStaxSuply);
    const TotalSupplyFormatted = supplyNumber.decimalPlaces(2);
    const TotalSupply = TotalSupplyFormatted.toLocaleString(undefined);
    const [staxPrice, setStaxPrice] = useState([], [], []);
    const [stakingAndSupplyStats, setStakingAndSupplyStats] = useState(true);
    const [marketStats, setMarketStats] = useState(false);
    const [sharesStats, setSharesStats] = useState(false);
    const [myStats, setMyStats] = useState(false);
    const [busdValue, setBusdValue] = React.useState(0);
    const busdValueF = Web3.utils.toWei(busdValue.toString(), 'ether');
    const busdValueFormatted = Web3.utils.toBN(busdValueF);
    const [busdBalance, setBusdBalance] = React.useState();
    const busdBalanceNumber = new BigNumber(busdBalance);
    const busdBalanceFormat = busdBalanceNumber.decimalPlaces(2);
    const busdBalanceFinal = busdBalanceFormat.toLocaleString(undefined);
    const [staxBalance, setStaxBalance] = React.useState();
    const staxBalanceNumber = new BigNumber(staxBalance);
    const staxBalanceFormat = staxBalanceNumber.decimalPlaces(2);
    const staxBalanceFinal = staxBalanceFormat.toLocaleString(undefined);
    const [stakesList, setStakesList] = useState([[], []]);
    const [sSTXPrice, setsSTXPrice] = useState(0);
    const [sharesBalance, setSharesBalance] = useState(0);
    const [staked, stakedd] = stakesList;
    const stakedTotalN = new BigNumber(staked);
    const stakedTotalF = stakedTotalN.decimalPlaces(2);
    const stakedTotalFinal = stakedTotalF.toLocaleString(undefined);
    const [totalsharesSupply, setTotalSharesSupply] = useState(0);
    const handleCloseAllStats = () => {
        setStakingAndSupplyStats(false);
        setMarketStats(false);
        setSharesStats(false);
        setMyStats(false);
    };
    const handleStakingAndSupplyStats = () => setStakingAndSupplyStats(true);
    const handleMarketStats = () => setMarketStats(true);
    const handleSharesStats = () => setSharesStats(true);
    const handleMyStats = () => setMyStats(true);
    const fetchStaxTotalSupply = async () => {
        ggetTotalSTAXSupply()
            .then((result) => {
                setTotalStaxSupply(result);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const fetchStakesBalance = async () => {
        stakeHas(true)
            .then((balancee) => {
                setStakesList(balancee);
                console.log(balancee);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const fetchStaxPrice = async () => {
        getStaxPrice()
            .then((result) => {
                setStaxPrice(result);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const fetchSharesSupply = async () => {
        sharesTotalSupply()
            .then((totalsharesSupply) => {
                setTotalSharesSupply(totalsharesSupply);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const fetchBusdBalance = async () => {
        ggetBUSDBalance()
            .then((busdBalance) => {
                setBusdBalance(busdBalance);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const fetchStaxBalance = async () => {
        ggetStaxBalance()
            .then((staxBalance) => {
                setStaxBalance(staxBalance);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const fetchSharesBalance = async () => {
        ggetOwnBalance()
            .then((balance) => {
                setSharesBalance(balance);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const fetchsSTXPrice = async () => {
        getsSTXPrice()
            .then((sSTXPrice) => {
                setsSTXPrice(sSTXPrice);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        async function load2() {
            fetchStaxTotalSupply();
            fetchStaxPrice();
            fetchSharesBalance();
            fetchSharesSupply();
            fetchStakesBalance();
            fetchStaxBalance();
            fetchBusdBalance();
            fetchsSTXPrice();
        }
        load2();
    }, []);
    const option = {
        tooltip: {},
        legend: {
            orient: 'horizontal',
            left: 'center',
            data: ['Circ. Supply (excl. PCS)', 'PCS', 'Locked', 'Total Staked'],
            textStyle: {
                color: theme.palette.success.main
            }
        },
        series: [
            {
                name: 'Supply Stats',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                label: {
                    normal: {
                        textStyle: {
                            color: theme.palette.grey[50]
                        }
                    }
                },
                data: [
                    { value: 9293943, name: 'Circ. Supply (excl. PCS)' },
                    { value: 9020992, name: 'PCS' },
                    { value: 3755902, name: 'Locked' },
                    { value: 10000000, name: 'Total Staked' }
                ]
            }
        ]
    };
    return (
        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item container xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography textAlign="center" variant="h6" sx={{ mt: 10 }}>
                    Stats
                </Typography>
                <QueryStatsIcon sx={{ ml: 1, mt: 12 }} fontSize="large" color="success" />
            </Grid>
            <Grid item container xs={12} sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                <Button
                    onClick={() => {
                        handleCloseAllStats();
                        handleStakingAndSupplyStats(true);
                    }}
                    size="large"
                    color="success"
                    variant="outlined"
                >
                    <LayersIcon color="success" />
                </Button>
                <Button
                    onClick={() => {
                        handleCloseAllStats();
                        handleMarketStats(true);
                    }}
                    size="large"
                    color="success"
                    sx={{ ml: 2 }}
                    variant="outlined"
                >
                    <CandlestickChartIcon color="success" />
                </Button>
                <Button
                    onClick={() => {
                        handleCloseAllStats();
                        handleSharesStats(true);
                    }}
                    size="large"
                    color="success"
                    sx={{ ml: 2 }}
                    variant="outlined"
                >
                    <PriceChangeIcon color="success" />
                </Button>
                <Button
                    onClick={() => {
                        handleCloseAllStats();
                        handleMyStats(true);
                    }}
                    size="large"
                    color="success"
                    sx={{ ml: 2 }}
                    variant="outlined"
                >
                    <SwitchAccountIcon color="success" />
                </Button>
            </Grid>
            {stakingAndSupplyStats ? (
                <Grid item container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item container sx={{ mt: 10, mb: 3, display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h3">Staking and Supply</Typography>
                        <LayersIcon color="success" />
                    </Grid>
                    <Grid
                        item
                        container
                        lg={9.1}
                        xs={10.5}
                        sx={{
                            borderLeft: 3,
                            borderBottom: 3,
                            borderRadius: 5,
                            borderColor: theme.palette.success.main,
                            mt: 5,
                            mb: 10,
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Grid item xs={12} lg={12} sx={{ mb: 10, mt: 5 }}>
                            <EChartsReact option={option} style={{ height: 400 }} />
                        </Grid>
                    </Grid>
                    <Grid item container lg={12} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                Total staked
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.success.main }}>
                                    {' '}
                                    10,000,000
                                </Typography>
                                <XsStaxLogo />
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={12} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                Circulating Supply
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.success.main }}>
                                    {' '}
                                    {TotalSupply}
                                </Typography>
                                <XsStaxLogo />
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={12} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                Locked (rewards to sSTX holders)
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.success.main }}>
                                    {' '}
                                    10,000,000 STAX
                                </Typography>
                                <XsStaxLogo />
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={12} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                PancakeSwap Pool
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.success.main }}>
                                    {(staxPrice[0] / 1000000000000000000).toLocaleString(undefined, {
                                        maximumFractionDigits: 2
                                    })}{' '}
                                    STAX
                                </Typography>
                                <XsStaxLogo />
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={12} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                Total Supply
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.success.main }}>
                                    {TotalSupply}
                                </Typography>
                                <XsStaxLogo />
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            ) : (
                <Grid item xs={12} lg={12} />
            )}
            {marketStats ? (
                <Grid item container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item container sx={{ mt: 7, mb: 8, display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h3">Market</Typography>
                        <CandlestickChartIcon color="success" />
                    </Grid>
                    <Grid item container lg={3} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                STAX Price
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.success.main }}>
                                    {' '}
                                    {(staxPrice[1] / staxPrice[0]).toLocaleString(undefined, { maximumFractionDigits: 18 }).substring(0, 8)}
                                    {` $ `}
                                </Typography>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={3} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                SHARES Price
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.success.main }}>
                                    {' '}
                                    {sSTXPrice}
                                </Typography>
                                <XsBusdLogo />
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={3} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                Market Cap
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.success.main }}>
                                    {' '}
                                    {((staxPrice[1] / staxPrice[0]) * totalStaxSuply).toLocaleString(undefined, {
                                        maximumFractionDigits: 2
                                    })}{' '}
                                    {` $ `}
                                </Typography>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={3} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                Liquidity
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.success.main }}>
                                    {' '}
                                    {((staxPrice[0] / 1000000000000000000) * (staxPrice[1] / staxPrice[0])).toLocaleString(undefined, {
                                        maximumFractionDigits: 2
                                    })}{' '}
                                    {` $ `}
                                </Typography>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            ) : (
                <Grid item xs={12} lg={12} />
            )}
            {sharesStats ? (
                <Grid item container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item container sx={{ mt: 4, mb: 8, display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h3">STAX Shares</Typography>
                        <PriceChangeIcon color="success" />
                    </Grid>
                    <Grid item container lg={3} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                Total Shares Sold
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.success.main }}>
                                    {' '}
                                    {totalsharesSupply}
                                </Typography>
                                <XsSharesLogo />
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={3} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                Max Shares Supply
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.success.main }}>
                                    {' '}
                                    40,000
                                </Typography>
                                <XsSharesLogo />
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={3} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                Initial Price
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.success.main }}>
                                    {' '}
                                    20
                                </Typography>
                                <XsBusdLogo />
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={3} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                Current Price:
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ color: theme.palette.success.main }}>
                                    {' '}
                                    {sSTXPrice}
                                </Typography>
                                <XsBusdLogo />
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            ) : (
                <Grid item xs={12} lg={12} />
            )}
            {myStats ? (
                <Grid item container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item container sx={{ mt: 1, mb: 8, display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h3">My Stats</Typography>
                        <SwitchAccountIcon color="success" />
                    </Grid>
                    <Grid item container lg={3} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                STAX Balance
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ mt: -0.1, color: theme.palette.success.main }}>
                                    {' '}
                                    {staxBalanceFinal}
                                </Typography>
                                <XsStaxLogo />
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={3} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                sSTX Balance:
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ mt: -0.1, color: theme.palette.success.main }}>
                                    {' '}
                                    {sharesBalance}
                                </Typography>
                                <XsSharesLogo />
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={3} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                BUSD Balance:
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ mt: -0.1, color: theme.palette.success.main }}>
                                    {' '}
                                    {busdBalanceFinal}
                                </Typography>
                                <XsBusdLogo />
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={3} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                Total Staked
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ mt: -0.1, color: theme.palette.success.main }}>
                                    {' '}
                                    {stakedTotalFinal}
                                </Typography>
                                <XsStaxLogo />
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item container lg={3} xs={10} sx={{ mb: 15 }}>
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderLeft: 1,
                                borderRight: 1,
                                borderBottom: 3,
                                borderColor: theme.palette.success.light,
                                borderRadius: 5,
                                boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                            }}
                        >
                            <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                                {' '}
                                Total Dividends:
                            </Typography>
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 7 }}>
                                <Typography textAlign="center" variant="h4" sx={{ mt: -0.1, color: theme.palette.success.main }}>
                                    {' '}
                                    0
                                </Typography>
                                <XsBusdLogo />
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            ) : (
                <Grid item xs={12} lg={12} />
            )}
        </Grid>
    );
};

export default UtilitiesShadow;
