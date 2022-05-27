// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Button, Box, Card, CardContent, Tooltip, Grid, Typography, Modal } from '@mui/material';
import Slider from '@mui/material/Slider';
import LoadingButton from '@mui/lab/LoadingButton';
import DoneIcon from '@mui/icons-material/Done';
import Web3 from 'web3';
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
    purchaseSharess
} from 'components/wallet/sharesABI';
import XsBusdLogo from './XsBusdLogo';
import XsSharesLogo from './XsSharesLogo';
import BigSharesLogo from './BigSharesLogo';
// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const marks = [
    {
        value: 1,
        label: '1'
    },
    {
        value: 2,
        label: '2'
    },
    {
        value: 3,
        label: '3'
    },
    {
        value: 4,
        label: '4'
    },
    {
        value: 5,
        label: '5'
    },
    {
        value: 6,
        label: '6'
    },
    {
        value: 7,
        label: '7'
    },
    {
        value: 8,
        label: '8'
    },
    {
        value: 9,
        label: '9'
    },
    {
        value: 10,
        label: '10'
    }
];
function valuetext(value) {
    return `${value}C`;
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 7,
    borderColor: 'black',
    p: 3
};
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

const SharesCard = () => {
    const [value, setValue] = React.useState(1);
    const [busdBalance, setBusdBalance] = React.useState(0);
    const [busdDividends, setBusdDividends] = React.useState(0);
    const theme = useTheme();
    // eslint-disable-next-line global-require
    const BigNumber = require('bignumber.js');
    const [sSTXPrice, setsSTXPrice] = useState(0);
    const [sSTXPriceFull, setsSTXPriceFull] = useState(0);
    const [balance, setBalance] = useState(0);
    const [bonusAPY, setBonusAPY] = useState(0);
    const [totalsharesSupply, setTotalSharesSupply] = useState(0);
    const myAPYFormatted = bonusAPY * 4.5625;
    const test1 = value * sSTXPrice;
    const test1String = test1.toString();
    const valueFormatted = Web3.utils.toWei(test1String, 'ether');
    const busdBalanceToNumber = new BigNumber(busdBalance);
    const busdBalanceFormat = busdBalanceToNumber.decimalPlaces(2);
    const busdBalanceFormatted = busdBalanceFormat.toLocaleString(undefined);
    const myShareRate = (balance / totalsharesSupply) * 100;
    const updateValue = (event, newValue) => {
        setValue(newValue);
    };
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleLoadingTrue = () => setLoading(true);
    const handleLoadingFalse = () => setLoading(false);
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
                console.log(sSTXPriceFull);
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
                } else {
                    setBonusAPY(balance);
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
            <MainCard
                sx={{ width: 'full%', height: '108%', borderRadius: 0, backgroundColor: theme.palette.grey[900], border: 0 }}
                content={false}
            >
                <CardContent>
                    <Grid container sx={{ justifyContent: 'center', display: 'flex' }}>
                        <Grid item container sx={{ justifyContent: 'center', display: 'flex', mt: 5 }}>
                            <BigSharesLogo />
                            <Typography textAlign="center" variant="h6" color={theme.palette.grey[50]}>
                                Shares
                            </Typography>
                        </Grid>
                        <Grid item container xs={12} sx={{ mt: 5, display: 'flex', justifyContent: 'center' }} lg={4.5}>
                            <Card
                                sx={{
                                    borderLeft: 1,
                                    borderRight: 1,
                                    borderBottom: 3,
                                    borderColor: theme.palette.success.light,
                                    borderRadius: 5,
                                    boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                                }}
                            >
                                <Grid container sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                                    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                        <Grid item xs="auto" lg="auto" md="auto" sm="auto">
                                            <Typography variant="h2" color={theme.palette.success.main} textAlign="left">
                                                STAX
                                            </Typography>
                                        </Grid>
                                        <Grid item xs="auto" lg="auto" sm="auto" md="auto">
                                            <Typography variant="h2" color={theme.palette.grey[50]}>
                                                SHARES
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
                                                        The initial (starting) price of sSTX is 20 BUSD and it increases by 0.01 BUSD every
                                                        sSTX sold. The current sSTX price can be checked below. 70% of the BUSD amount used
                                                        for sSTX purchases is distributed to sSTX holders every 24 hours.
                                                    </Typography>
                                                }
                                            >
                                                <InfoIcon />
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        sx={{ backgroundColor: theme.palette.grey[900], my: 0, justifyContent: 'center', display: 'flex' }}
                                        lg={10}
                                        sm={12}
                                        md={12}
                                        xs={9.3}
                                    >
                                        <Grid item md={7.5} sm={8} lg={10.5}>
                                            <SharesSTAXChart />
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        sx={{
                                            backgroundColor: theme.palette.grey[900],
                                            mt: 1.6,
                                            display: 'flex',
                                            justifyContent: 'left'
                                        }}
                                        lg={3}
                                        md={1.5}
                                        sm={2.11}
                                        xs={5}
                                    >
                                        <Grid item container sx={{ mt: 1, justifyContent: 'left' }}>
                                            <Typography xs={12} variant="h5" textAlign="left">
                                                Total Sold:
                                            </Typography>
                                        </Grid>
                                        <Grid item container sx={{ mt: 2, justifyContent: 'left' }}>
                                            <Typography variant="h5" textAlign="left">
                                                Initial Price:
                                            </Typography>
                                        </Grid>
                                        <Grid item container sx={{ mt: 2, justifyContent: 'left' }}>
                                            <Typography variant="h5" textAlign="left">
                                                Current Price:
                                            </Typography>
                                        </Grid>
                                        <Grid item container sx={{ mt: 2, justifyContent: 'left' }}>
                                            <Typography variant="h5" textAlign="left">
                                                BUSD Balance:
                                            </Typography>
                                        </Grid>
                                        <Grid item container sx={{ mt: 2, justifyContent: 'left' }}>
                                            <Typography variant="h5" textAlign="left">
                                                BONUS APY:
                                            </Typography>
                                        </Grid>
                                        <Grid item container sx={{ mt: 2, mb: 1, justifyContent: 'left' }}>
                                            <Typography variant="h5" textAlign="left">
                                                sSTX Balance:
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        sx={{
                                            backgroundColor: theme.palette.grey[900],
                                            mt: 1.6,
                                            display: 'flex',
                                            justifyContent: 'right'
                                        }}
                                        lg={6}
                                        sm={6}
                                        md={6}
                                        xs={5}
                                    >
                                        <Grid item container sx={{ mt: 1 }}>
                                            <Typography variant="h5" textAlign="right">
                                                {totalsharesSupply}/40,000
                                            </Typography>
                                            <XsSharesLogo />
                                        </Grid>
                                        <Grid item container sx={{ mt: 1 }}>
                                            <Typography variant="h5" textAlign="right">
                                                20
                                            </Typography>
                                            <XsBusdLogo />
                                        </Grid>
                                        <Grid item container sx={{ mt: 1 }}>
                                            <Typography variant="h5" textAlign="right">
                                                {sSTXPrice}
                                            </Typography>
                                            <XsBusdLogo />
                                        </Grid>
                                        <Grid item container sx={{ mt: 1 }}>
                                            <Typography variant="h5" textAlign="right">
                                                {busdBalanceFormatted}
                                            </Typography>
                                            <XsBusdLogo />
                                        </Grid>
                                        <Typography sx={{ mt: 1, color: theme.palette.success.main }} variant="h5" textAlign="right">
                                            {myAPYFormatted} %
                                        </Typography>
                                        <Grid item container sx={{ mt: 1 }}>
                                            <Typography sx={{ color: theme.palette.success.main }} variant="h5" textAlign="right">
                                                {balance}
                                            </Typography>
                                            <XsSharesLogo />
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Grid item lg={5} xs={7.5}>
                                            <PrettoSlider
                                                valueLabelDisplay="auto"
                                                aria-label="pretto slider"
                                                onChange={updateValue}
                                                defaultValue={1}
                                                min={1}
                                                max={10}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                                        <LoadingButton
                                            loading={loading}
                                            onClick={() => {
                                                getSTXPriceFull();
                                                handleLoadingTrue();
                                                approve('0xb08ce509cafb6660e4f7b951fbb8ae63930a6aee', valueFormatted).then(() => {
                                                    purchaseSharess(value).then(() => {
                                                        handleLoadingFalse();
                                                        fetchBalance();
                                                        fetchTotalSupply();
                                                        fetchsSTXPrice();
                                                        fetchBusdBalance();
                                                        fetchTotalDividends();
                                                    });
                                                });
                                            }}
                                            sx={{
                                                fontSize: 18,
                                                minHeight: 45,
                                                minWidth: 140,
                                                bgcolor: theme.palette.success.main,
                                                backgroundColor: theme.palette.success.main,
                                                color: theme.palette.grey[900]
                                            }}
                                        >
                                            BUY {value} sSTX
                                        </LoadingButton>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} lg={4.5}>
                            <Grid item lg={11.5} xs={12} md={12} sm={12} mt={2}>
                                <Card
                                    sx={{
                                        borderLeft: 1,
                                        borderRight: 1,
                                        borderBottom: 3,
                                        height: 'auto',
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
                                            <Grid item container lg={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                                <Typography variant="h5" color={theme.palette.grey[50]} textAlign="center">
                                                    My sSTX Balance: {balance}
                                                </Typography>
                                                <XsSharesLogo />
                                            </Grid>
                                            <Grid item container lg={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                                <Typography variant="h5" color={theme.palette.grey[50]} textAlign="center">
                                                    Circulating sSTX: {totalsharesSupply}
                                                </Typography>
                                                <XsSharesLogo />
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
                            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} lg={11.5}>
                                <Grid item lg={12} xs={12} md={12} sm={12}>
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
                                        <Grid container sx={{ my: 3.3, display: 'flex', justifyContent: 'center' }}>
                                            <Grid item lg="auto" xs="auto" sm="auto" md="auto" sx={{ mt: 1.3 }}>
                                                <BusdLogo />
                                            </Grid>
                                            <Grid item lg="auto" xs="auto" md="auto" sm="auto" sx={{ ml: 0.5, mt: 3.3 }}>
                                                <Typography variant="h2" color={theme.palette.success.main}>
                                                    Dividends
                                                </Typography>
                                            </Grid>
                                            <Grid item lg={12} md={12} sx={{ mt: 1, justifyContent: 'center', display: 'flex' }}>
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
                                            <Grid item lg={12} md={12} xs={10} sx={{ mt: 5, justifyContent: 'center', display: 'flex' }}>
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
                                            <Grid
                                                item
                                                lg="auto"
                                                md="auto"
                                                xs="auto"
                                                sx={{ mt: 1, mx: 1, justifyContent: 'center', display: 'flex' }}
                                            >
                                                <Typography variant="h2" sx={{ mr: 1 }} color={theme.palette.grey[50]} textAlign="right">
                                                    0
                                                </Typography>
                                                <BusdSmallLogo />
                                                <Button
                                                    sx={{
                                                        ml: 1,
                                                        fontSize: 18,
                                                        height: 30,
                                                        minWidth: 80,
                                                        bgcolor: theme.palette.success.main,
                                                        backgroundColor: theme.palette.success.main,
                                                        color: theme.palette.grey[900]
                                                    }}
                                                >
                                                    Claim
                                                </Button>
                                            </Grid>
                                            <Grid item lg={12} md={12} xs={10} sx={{ mt: 2, justifyContent: 'center', display: 'flex' }}>
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
                                            <Grid
                                                item
                                                lg="auto"
                                                md="auto"
                                                xs="auto"
                                                sx={{ mt: 1, justifyContent: 'center', display: 'flex' }}
                                            >
                                                <Typography variant="h2" sx={{ mr: 1 }} color={theme.palette.grey[50]} textAlign="right">
                                                    {busdDividends}
                                                </Typography>
                                                <BusdSmallLogo />
                                                <Button
                                                    sx={{
                                                        ml: 1,
                                                        fontSize: 18,
                                                        height: 30,
                                                        minWidth: 80,
                                                        bgcolor: theme.palette.success.main,
                                                        backgroundColor: theme.palette.success.main,
                                                        color: theme.palette.grey[900]
                                                    }}
                                                >
                                                    Claim
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default SharesCard;
