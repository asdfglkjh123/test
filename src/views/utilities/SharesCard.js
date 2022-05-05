// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Button, Card, CardContent, Tooltip, Grid, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SharesSTAXChart from './SharesSTAXChart';
import BusdLogo from './busdlogo';
import BusdSmallLogo from './busdSmallLogo';
import React, { useState, useEffect } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import {
    ggetOwnBalance,
    ggetBUSDBalance,
    getSTXPrice,
    sharesTotalSupply,
    getSTXPriceFull,
    approve,
    ggetTotalDividends,
    purchaseShares
} from 'components/wallet/sharesABI';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //
const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none'
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit'
        },
        '&:before': {
            display: 'none'
        }
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)'
        },
        '& > *': {
            transform: 'rotate(45deg)'
        }
    }
});

const StakingCard = () => {
    const [value, setValue] = React.useState(1);
    const [busdBalance, setBusdBalance] = React.useState(0);
    const [busdDividends, setBusdDividends] = React.useState(0);
    // const handleSliderChange = (event, newValue) => {
    //    setValue(newValue);
    // };
    const theme = useTheme();
    // eslint-disable-next-line global-require
    const BigNumber = require('bignumber.js');
    const [sSTXPrice, setsSTXPrice] = useState(0);
    const [sSTXPriceFull, setsSTXPriceFull] = useState(0);
    const [balance, setBalance] = useState(0);
    const [bonusAPY, setBonusAPY] = useState(0);
    const [totalsharesSupply, setTotalSharesSupply] = useState(0);
    const myAPY = 9.13 + bonusAPY * 4.5625;
    const busdBalanceToNumber = new BigNumber(busdBalance);
    const busdBalanceFormat = busdBalanceToNumber.decimalPlaces(4);
    const busdBalanceFormatted = busdBalanceFormat.toLocaleString(undefined);
    const valueN = new BigNumber(value);
    const priceN = new BigNumber(sSTXPriceFull).multipliedBy(valueN);
    const myShareRate = (balance / totalsharesSupply) * 100;
    const myShareRateFormatted = myShareRate.toLocaleString(undefined, { maximumFractionDigits: 1 });
    const fetchsSTXPrice = async () => {
        getSTXPrice()
            .then((sSTXPrice) => {
                setsSTXPrice(sSTXPrice);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const fetchsSTXPriceFull = async () => {
        getSTXPriceFull()
            .then((sSTXPriceFull) => {
                setsSTXPriceFull(sSTXPriceFull);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const fetchBalance = async () => {
        ggetOwnBalance()
            .then((balance) => {
                setBalance(balance);
                if (balance > 20) {
                    setBonusAPY(20);
                }
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
    const fetchTotalDividends = async () => {
        ggetTotalDividends()
            .then((busdDividends) => {
                setBusdDividends(busdDividends);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const fetchTotalSupply = async () => {
        sharesTotalSupply()
            .then((totalsharesSupply) => {
                setTotalSharesSupply(totalsharesSupply);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        async function load2() {
            fetchBalance();
            fetchsSTXPriceFull();
            fetchTotalSupply();
            fetchsSTXPrice();
            fetchBusdBalance();
            fetchTotalDividends();
        }
        load2();
    }, []);
    return (
        <>
            <MainCard sx={{ width: 'full%', borderRadius: 0, backgroundColor: theme.palette.grey[900], border: 0 }} content={false}>
                <CardContent>
                    <Grid container sx={{ justifyContent: 'center', display: 'flex' }}>
                        <Grid container mt={5}>
                            <Grid item lg={12} sm={12}>
                                <Typography textAlign="center" variant="h6" color={theme.palette.grey[50]}>
                                    Shares & BUSD Dividends
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg={11.3} xs={12} md={12} sm={12} sx={{ mx: 1, mt: 5 }}>
                            <Card
                                sx={{
                                    borderLeft: 1,
                                    borderRight: 1,
                                    borderBottom: 3,
                                    width: '100%',
                                    borderColor: theme.palette.success.light,
                                    borderRadius: 5,
                                    boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                                }}
                            >
                                <Grid container sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                                    <Grid container sx={{ mt: 2 }}>
                                        <Grid item lg={6} xs={6} md={6} sx={{ display: 'flex', justifyContent: 'right' }}>
                                            <Typography variant="h2" color={theme.palette.grey[50]}>
                                                SHARES
                                            </Typography>
                                        </Grid>
                                        <Grid item lg="auto">
                                            <Typography variant="h2" sx={{ ml: 1 }} color={theme.palette.success.main} textAlign="left">
                                                STAX
                                            </Typography>
                                        </Grid>
                                        <Grid item lg="auto" sx={{ pl: 0.5, mt: 0.24 }}>
                                            <Tooltip
                                                sx={{ color: theme.palette.success.main }}
                                                title={
                                                    <Typography
                                                        sx={{
                                                            color: theme.palette.success.main
                                                        }}
                                                    >
                                                        The initial (starting) price of sSTX is 20 BUSD and it increases by 1 BUSD every 100
                                                        sSTX sold. The current sSTX price can be checked below. 70% of the BUSD used for
                                                        sSTX purchases is distributed to sSTX holders at the moment of purchase.
                                                    </Typography>
                                                }
                                            >
                                                <InfoIcon />
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                    <Grid item sx={{ backgroundColor: theme.palette.grey[900], my: 0 }} lg={10} xs={9.3}>
                                        <SharesSTAXChart />
                                    </Grid>
                                    <Grid item sx={{ backgroundColor: theme.palette.grey[900], mt: 1.6 }} lg={4.7} xs={5.3}>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="left">
                                            Total sSTX Sold:
                                        </Typography>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="left">
                                            Initial sSTX Price:
                                        </Typography>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="left">
                                            Current sSTX Price:
                                        </Typography>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="left">
                                            My BUSD Balance:
                                        </Typography>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="left">
                                            My BONUS APY:
                                        </Typography>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="left">
                                            My sSTX Balance:
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={{ backgroundColor: theme.palette.grey[900], mt: 1.6, ml: 0 }} lg={4}>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="right">
                                            {totalsharesSupply}/100,000 sSTX
                                        </Typography>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="right">
                                            20 BUSD
                                        </Typography>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="right">
                                            {sSTXPrice} BUSD
                                        </Typography>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="right">
                                            {busdBalanceFormatted} BUSD
                                        </Typography>
                                        <Typography sx={{ my: 2, color: theme.palette.success.main }} variant="h5" textAlign="right">
                                            {myAPY} %
                                        </Typography>
                                        <Typography sx={{ my: 2, color: theme.palette.success.main }} variant="h5" textAlign="right">
                                            {balance} sSTX
                                        </Typography>
                                    </Grid>
                                    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Grid item lg={5} xs={7.5}>
                                            <PrettoSlider
                                                valueLabelDisplay="auto"
                                                aria-label="pretto slider"
                                                onChange={(e) => setValue(e.target.value)}
                                                min={1}
                                                max={10}
                                                defaultValue={1}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Grid item lg={12} sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                                            <Button
                                                onClick={() => {
                                                    getSTXPriceFull();
                                                    approve('0xb08ce509cafb6660e4f7b951fbb8ae63930a6aee', priceN).then((result) => {
                                                        purchaseShares(value).then((result) => {
                                                            fetchBalance();
                                                            fetchsSTXPriceFull();
                                                            fetchTotalSupply();
                                                            fetchsSTXPrice();
                                                            fetchBusdBalance();
                                                            fetchTotalDividends();
                                                        });
                                                    });
                                                }}
                                                sx={{
                                                    height: 35,
                                                    backgroundColor: theme.palette.success.main,
                                                    color: theme.palette.grey[900]
                                                }}
                                            >
                                                BUY {value} sSTX
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>

                        <Grid item lg={4} xs={12} sm={12} md={6} sx={{ mt: 11, justifyContent: 'center' }}>
                            <Grid item lg={11.3} xs={12} md={12} sm={12} sx={{ mx: 1 }}>
                                <Card
                                    sx={{
                                        borderLeft: 1,
                                        borderRight: 1,
                                        borderBottom: 3,
                                        height: '100%',
                                        width: '100%',
                                        borderColor: theme.palette.success.light,
                                        borderRadius: 5,
                                        boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                                    }}
                                >
                                    <Grid container sx={{ height: 'auto', mt: 2 }}>
                                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Grid item lg="auto" xs="auto" sm="auto">
                                                <Typography variant="h2" color={theme.palette.success.main} textAlign="right">
                                                    STAX
                                                </Typography>
                                            </Grid>
                                            <Grid item lg="auto" xs="auto" sm="auto">
                                                <Typography variant="h2" sx={{ ml: 1 }} color={theme.palette.grey[50]} textAlign="left">
                                                    Shares stats
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Grid item lg={12} xs={12}>
                                                <Typography variant="h5" sx={{ mt: 2 }} color={theme.palette.grey[50]} textAlign="center">
                                                    My sSTX Balance: {balance} sSTX
                                                </Typography>
                                            </Grid>
                                            <Grid item lg={12} xs={12}>
                                                <Typography variant="h5" sx={{ mt: 2 }} color={theme.palette.grey[50]} textAlign="center">
                                                    Circulating sSTX: {totalsharesSupply} sSTX
                                                </Typography>
                                            </Grid>
                                            <Grid item lg="auto" xs="auto" sm="auto" sx={{ my: 2 }}>
                                                <Typography variant="h5" color={theme.palette.grey[50]} textAlign="center">
                                                    My Share Rate: {myShareRateFormatted} %
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                lg={0.5}
                                                sm={0.5}
                                                sx={{ pl: 0.5, mt: 1.1, justifyContent: 'center', display: 'flex' }}
                                            >
                                                <Tooltip
                                                    sx={{ height: 20, color: theme.palette.success.main, mt: 0.8 }}
                                                    title={
                                                        <Typography
                                                            sx={{
                                                                color: theme.palette.success.main
                                                            }}
                                                        >
                                                            `Share rate shows how many tokens you own from all minted tokens at the current
                                                            moment. If user owns 1 sSTX out of 100sSTX, then that address has a share rate
                                                            of 1% and earn 1% of all BUSD rewards at that moment.`
                                                        </Typography>
                                                    }
                                                >
                                                    <InfoIcon />
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>

                            <Grid item lg={12} xs={12} md={12} sm={12} sx={{ mx: 1, mt: 1.7 }}>
                                <Card
                                    sx={{
                                        borderLeft: 1,
                                        borderRight: 1,
                                        borderBottom: 3,
                                        height: '100%',
                                        width: '100%',
                                        borderColor: theme.palette.success.light,
                                        borderRadius: 5,
                                        boxShadow: '0px 10px 20px rgb(0, 230, 117)',
                                        mb: 10
                                    }}
                                >
                                    <Grid container sx={{ my: 1.5, display: 'flex', justifyContent: 'center' }}>
                                        <Grid container sx={{ justifyContent: 'center', display: 'flex' }}>
                                            <Grid
                                                item
                                                lg={2}
                                                xs="auto"
                                                sm="auto"
                                                md="auto"
                                                sx={{ display: 'flex', justifyContent: 'right', mt: 1.3 }}
                                            >
                                                <BusdLogo />
                                            </Grid>
                                            <Grid item lg="auto" md="auto" xs="auto" sm="auto">
                                                <Typography
                                                    variant="h2"
                                                    xs="auto"
                                                    sx={{ mt: 3.3 }}
                                                    color={theme.palette.grey[50]}
                                                    textAlign="center"
                                                >
                                                    My BUSD
                                                </Typography>
                                            </Grid>
                                            <Grid item lg={3.6} xs="auto" md="auto" sm="auto" sx={{ ml: 0.5, mt: 3.3 }}>
                                                <Typography variant="h2" color={theme.palette.success.main} textAlign="left">
                                                    Dividends
                                                </Typography>
                                            </Grid>
                                            <Grid item lg={12} sx={{ mt: 1, justifyContent: 'center', display: 'flex' }}>
                                                <Grid item lg={8} xs={10} md={7}>
                                                    <Typography
                                                        variant="h5"
                                                        sx={{ mt: 2 }}
                                                        color={theme.palette.grey[50]}
                                                        textAlign="center"
                                                    >
                                                        Any pending BUSD Dividends will appear here. Claim the BUSD rewards by clicking
                                                        below buttons.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item lg={12} xs={8.3} sx={{ mt: 5, justifyContent: 'center', display: 'flex' }}>
                                                <Typography variant="h5" color={theme.palette.grey[50]} textAlign="center">
                                                    STAX Volume Dividends
                                                </Typography>
                                                <Tooltip
                                                    sx={{ height: 20, color: theme.palette.success.main }}
                                                    title={
                                                        <Typography
                                                            sx={{
                                                                color: theme.palette.success.main
                                                            }}
                                                        >
                                                            There is 1% fee on every STAX BUY / SELL transaction and those fees are
                                                            distributed as BUSD Dividends in a direct proportion to sSTX holders.
                                                        </Typography>
                                                    }
                                                >
                                                    <InfoIcon />
                                                </Tooltip>
                                            </Grid>
                                            <Grid item lg={5} xs={3.5} sx={{ mt: 1, mx: 1, justifyContent: 'right', display: 'flex' }}>
                                                <Typography variant="h2" color={theme.palette.grey[50]} textAlign="left">
                                                    102.38
                                                </Typography>
                                                <BusdSmallLogo />
                                            </Grid>
                                            <Grid item lg={4.3} xs={3} sx={{ mt: 0.7, justifyContent: 'left', display: 'flex' }}>
                                                <Button
                                                    sx={{
                                                        mb: 1,
                                                        height: 35,
                                                        backgroundColor: theme.palette.success.main,
                                                        color: theme.palette.grey[900]
                                                    }}
                                                >
                                                    Claim
                                                </Button>
                                            </Grid>
                                            <Grid item lg={12} xs={8.3} sx={{ mt: 2, justifyContent: 'center', display: 'flex' }}>
                                                <Typography variant="h5" color={theme.palette.grey[50]} textAlign="center">
                                                    STAX Pool Dividends
                                                </Typography>
                                                <Tooltip
                                                    sx={{ height: 20, color: theme.palette.success.main }}
                                                    title={
                                                        <Typography
                                                            sx={{
                                                                color: theme.palette.success.main
                                                            }}
                                                        >
                                                            There is 1% fee on every STAX BUY / SELL transaction and those fees are
                                                            distributed as BUSD Dividends in a direct proportion to sSTX holders.
                                                        </Typography>
                                                    }
                                                >
                                                    <InfoIcon />
                                                </Tooltip>
                                            </Grid>
                                            <Grid item lg={5} xs={3.5} sx={{ mt: 1, mx: 1, justifyContent: 'right', display: 'flex' }}>
                                                <Typography variant="h2" color={theme.palette.grey[50]} textAlign="left">
                                                    {busdDividends}
                                                </Typography>
                                                <BusdSmallLogo />
                                            </Grid>
                                            <Grid item lg={4.3} xs={3} sx={{ mt: 0.7, justifyContent: 'left', display: 'flex' }}>
                                                <Button
                                                    sx={{
                                                        mb: 1,
                                                        height: 35,
                                                        backgroundColor: theme.palette.success.main,
                                                        color: theme.palette.grey[900]
                                                    }}
                                                >
                                                    Claim
                                                </Button>
                                            </Grid>
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

export default StakingCard;
