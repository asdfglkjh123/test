// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Button, Box, Card, CardContent, TextField, Grid, Typography, Modal } from '@mui/material';
import Slider from '@mui/material/Slider';
import LoadingButton from '@mui/lab/LoadingButton';
import DoneIcon from '@mui/icons-material/Done';
import Web3 from 'web3';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SharesSTAXChart from './SharesSTAXChart';
import React, { useState, useEffect } from 'react';
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

const DEX = () => {
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
    const [open3, setOpen3] = React.useState(false);
    const handleClose3 = () => setOpen3(false);
    const handleOpen3 = () => setOpen3(true);
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
            <Modal open={open3} onClose={handleClose3} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                        <DoneIcon color="success" fontSize="large" />
                    </Grid>
                    <Typography variant="h5" textAlign="center" sx={{ mt: 3 }} component="h2">
                        Transaction completed.
                    </Typography>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            onClick={handleClose3}
                            sx={{
                                mt: 3,
                                fontSize: 15,
                                width: 80,
                                height: 30,
                                color: theme.palette.grey[900],
                                backgroundColor: theme.palette.success.main
                            }}
                        >
                            Close
                        </Button>
                    </Grid>
                </Box>
            </Modal>
            <MainCard
                sx={{
                    width: '100%',
                    height: '108%',
                    borderRadius: 0,
                    backgroundColor: theme.palette.grey[900],
                    border: 0
                }}
                content={false}
            >
                <CardContent>
                    <Grid item container sx={{ justifyContent: 'center', display: 'flex' }}>
                        <Grid container sx={{ justifyContent: 'center', display: 'flex' }} mt={5}>
                            <Typography textAlign="center" variant="h6" color={theme.palette.grey[50]}>
                                DEX - Swap & Liquidity
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
                                <Grid container lg={12} sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                                    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                        <Grid item xs="auto" lg="auto" md="auto" sm="auto">
                                            <Typography variant="h2" color={theme.palette.grey[50]}>
                                                BUY/SELL
                                            </Typography>
                                        </Grid>
                                        <Grid item xs="auto" lg="auto" sm="auto" md="auto">
                                            <Typography variant="h2" color={theme.palette.success.main} textAlign="left">
                                                STAX
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item sx={{ backgroundColor: theme.palette.grey[900], my: 0 }} lg={11} xs={9.3}>
                                        <SharesSTAXChart />
                                    </Grid>
                                    <Grid item lg={12} xs={12}>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="center">
                                            STAX PRICE CHART
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        sx={{
                                            backgroundColor: theme.palette.grey[900],
                                            justifyContent: 'center',
                                            display: 'flex',
                                            mt: 1.6
                                        }}
                                        lg={4.7}
                                        md={7}
                                        xs={12}
                                        sm={7}
                                    >
                                        <Grid item xs={12}>
                                            <Typography sx={{ my: 2 }} variant="h3" textAlign="center">
                                                BUY STAX
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={4}
                                            sx={{
                                                borderRadius: 2,
                                                border: 3,
                                                borderColor: theme.palette.success.main,
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}
                                        >
                                            <TextField
                                                sx={{
                                                    borderBottom: 2,
                                                    display: 'flex',
                                                    borderColor: theme.palette.success.main
                                                }}
                                                inputProps={{ style: { textAlign: 'center', color: 'white' } }}
                                                id="standard-basic"
                                                label="Enter BUSD amount:"
                                                variant="standard"
                                                color="success"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography sx={{ my: 2 }} variant="h5" textAlign="center">
                                                Price: 0.00020 BUSD per STX
                                            </Typography>
                                            <Typography sx={{ my: 2 }} variant="h5" textAlign="center">
                                                You will receive:
                                            </Typography>
                                            <Grid item sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                                                <LoadingButton
                                                    loading={loading}
                                                    onClick={() => {
                                                        getSTXPriceFull();
                                                        handleLoadingTrue();
                                                        approve('0xb08ce509cafb6660e4f7b951fbb8ae63930a6aee', valueFormatted).then(
                                                            (result) => {
                                                                purchaseSharess(value).then(() => {
                                                                    handleLoadingFalse();
                                                                    handleOpen3();
                                                                    fetchBalance();
                                                                    fetchTotalSupply();
                                                                    fetchsSTXPrice();
                                                                    fetchBusdBalance();
                                                                    fetchTotalDividends();
                                                                });
                                                            }
                                                        );
                                                    }}
                                                    sx={{
                                                        fontSize: 18,
                                                        minHeight: 45,
                                                        minWidth: 110,
                                                        bgcolor: theme.palette.success.main,
                                                        backgroundColor: theme.palette.success.main,
                                                        color: theme.palette.grey[900]
                                                    }}
                                                >
                                                    SWAP
                                                </LoadingButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        sx={{
                                            backgroundColor: theme.palette.grey[900],
                                            justifyContent: 'center',
                                            display: 'flex',
                                            mt: 1.6
                                        }}
                                        lg={4.7}
                                        md={7}
                                        xs={12}
                                        sm={7}
                                    >
                                        <Grid item xs={12}>
                                            <Typography sx={{ my: 2 }} variant="h3" textAlign="center">
                                                SELL STAX
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={4}
                                            sx={{
                                                borderRadius: 2,
                                                border: 3,
                                                borderColor: theme.palette.success.main,
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}
                                        >
                                            <TextField
                                                sx={{
                                                    borderBottom: 2,
                                                    display: 'flex',
                                                    borderColor: theme.palette.success.main
                                                }}
                                                inputProps={{ style: { textAlign: 'center', color: 'white' } }}
                                                id="standard-basic"
                                                label="Enter STAX amount:"
                                                variant="standard"
                                                color="success"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography sx={{ my: 2 }} variant="h5" textAlign="center">
                                                Price: 5000.00 STAX per BUSD
                                            </Typography>
                                            <Typography sx={{ my: 2 }} variant="h5" textAlign="center">
                                                You will receive:
                                            </Typography>
                                            <Grid item sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                                                <LoadingButton
                                                    loading={loading}
                                                    onClick={() => {
                                                        getSTXPriceFull();
                                                        handleLoadingTrue();
                                                        approve('0xb08ce509cafb6660e4f7b951fbb8ae63930a6aee', valueFormatted).then(
                                                            (result) => {
                                                                purchaseSharess(value).then(() => {
                                                                    handleLoadingFalse();
                                                                    handleOpen3();
                                                                    fetchBalance();
                                                                    fetchTotalSupply();
                                                                    fetchsSTXPrice();
                                                                    fetchBusdBalance();
                                                                    fetchTotalDividends();
                                                                });
                                                            }
                                                        );
                                                    }}
                                                    sx={{
                                                        fontSize: 18,
                                                        minHeight: 45,
                                                        minWidth: 110,
                                                        bgcolor: theme.palette.success.main,
                                                        backgroundColor: theme.palette.success.main,
                                                        color: theme.palette.grey[900]
                                                    }}
                                                >
                                                    SWAP
                                                </LoadingButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default DEX;
