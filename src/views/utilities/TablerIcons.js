// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Box, Card, CardContent, TextField, Grid, Typography, Modal, IconButton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import DoneIcon from '@mui/icons-material/Done';
import Web3 from 'web3';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState, useEffect } from 'react';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import { ggetBUSDBalance, ggetStaxBalance, getStaxPrice, ggetTotalSTAXSupply, swapStaxAndBusd } from 'components/wallet/sharesABI';
import BusdSmallLogo from './busdSmallLogo';
import SmallStaxLogo from './smallStaxLogo';
import XsStaxLogo from './xsStaxLogo';
import XsBusdLogo from './XsBusdLogo';
// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

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

const DEX = () => {
    const [totalStaxSuply, setTotalStaxSupply] = React.useState(0);
    const [preBusdValue, setPreBusdValue] = useState();
    const [busdValue, setBusdValue] = useState(0);
    const busdValueF = Web3.utils.toWei(busdValue.toString(), 'ether');
    const busdValueFormatted = Web3.utils.toBN(busdValueF);
    // eslint-disable-next-line global-require
    const BigNumber = require('bignumber.js');
    const [busdBalance, setBusdBalance] = React.useState();
    const busdBalanceNumber = new BigNumber(busdBalance);
    const busdBalanceFormat = busdBalanceNumber.decimalPlaces(2);
    const busdBalanceFinal = busdBalanceFormat.toLocaleString(undefined);
    const [staxBalance, setStaxBalance] = React.useState();
    const staxBalanceNumber = new BigNumber(staxBalance);
    const staxBalanceFormat = staxBalanceNumber.decimalPlaces(2);
    const staxBalanceFinal = staxBalanceFormat.toLocaleString(undefined);
    const theme = useTheme();
    const [swappingToken, setSwappingToken] = useState('STAX');
    const [staxPrice, setStaxPrice] = useState([], [], []);
    const priceImpact1 = (busdValueF / staxPrice[0]) * 100;
    const priceImpact2 = (busdValueF / staxPrice[1]) * 100;
    const [loading, setLoading] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const handleClose4 = () => setOpen4(false);
    const handleOpen4 = () => setOpen4(true);
    const [open5, setOpen5] = React.useState(false);
    const handleClose5 = () => setOpen5(false);
    const handleOpen5 = () => setOpen5(true);
    const [staxLogoFirst, setStaxLogoFirst] = React.useState(true);
    const handleStaxLogoFirst = () => setStaxLogoFirst(true);
    const handleStaxLogoFirstN = () => setStaxLogoFirst(false);
    const handleLoadingTrue = () => setLoading(true);
    const handleLoadingFalse = () => setLoading(false);
    const [token1address, setToken1address] = useState();
    const [token2address, setToken2address] = useState();
    const pathToPurchase = [token1address, token2address];
    const [slippage, setSlippage] = useState(6);
    const [slippageF, setSlippageF] = useState();
    const handleSwap = () => {
        if (staxLogoFirst === true) {
            handleStaxLogoFirstN();
            setToken1address('0xd389253265dd6b85C47c410EC5fF0c6A383CE949');
            setToken2address('0x1155605B148DEB0f649F9b815Fc18d956af7a93d');
        } else if (staxLogoFirst === false) {
            handleStaxLogoFirst();
            setToken1address('0x1155605B148DEB0f649F9b815Fc18d956af7a93d');
            setToken2address('0xd389253265dd6b85C47c410EC5fF0c6A383CE949');
        }
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
    const fetchStaxTotalSupply = async () => {
        ggetTotalSTAXSupply()
            .then((result) => {
                setTotalStaxSupply(result);
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
    const updateBalances = async () => {
        ggetStaxBalance().then((staxBalance) => {
            setStaxBalance(staxBalance);
            if (staxLogoFirst === true) {
                setToken1address('0x1155605B148DEB0f649F9b815Fc18d956af7a93d');
                setToken2address('0xd389253265dd6b85C47c410EC5fF0c6A383CE949');
            }
        });
        ggetBUSDBalance().then((busdBalance) => {
            setBusdBalance(busdBalance);
        });
    };
    useEffect(() => {
        async function load2() {
            fetchBusdBalance();
            fetchStaxBalance();
            fetchStaxPrice();
            fetchStaxTotalSupply();
            setSlippageF(5.5);
            updateBalances();
        }
        load2();
    }, [busdBalance, busdBalanceFinal, staxBalance, staxBalanceFinal]);
    return (
        <>
            <Modal
                open={open4}
                onBackdropClick={handleClose4}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid item container sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item>
                            <Typography variant="h5" textAlign="center" sx={{ mt: 3 }} component="h2">
                                Slippage should be at least 5.5% as the STAX Token applies 5% fee on every Buy / Sell transaction.
                            </Typography>
                        </Grid>
                        <Typography variant="h5" textAlign="center" sx={{ mt: 3 }} component="h2">
                            Enter slippage:
                        </Typography>
                        <TextField
                            sx={{
                                display: 'flex',
                                mt: 2.3,
                                ml: 1,
                                border: 1,
                                borderRadius: 3,
                                borderColor: theme.palette.success.main
                            }}
                            inputProps={{
                                style: {
                                    textAlign: 'center',
                                    height: 1,
                                    width: 27,
                                    backgroundColor: theme.palette.grey[900],
                                    color: 'white'
                                }
                            }}
                            onChange={(e) => setSlippage(e.target.value)}
                            id="standard-basic"
                            variant="outlined"
                            color="success"
                        />
                        <Typography variant="h4" sx={{ mt: 3, ml: 0.3 }}>
                            %
                        </Typography>
                    </Grid>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            onClick={() => {
                                handleClose4();
                                setSlippageF(slippage);
                            }}
                            sx={{
                                mt: 3,
                                fontSize: 15,
                                width: 80,
                                height: 30,
                                color: theme.palette.grey[900],
                                backgroundColor: theme.palette.success.main
                            }}
                        >
                            Done
                        </Button>
                    </Grid>
                </Box>
            </Modal>
            <Modal
                open={open5}
                onBackdropClick={() => {
                    handleClose5();
                    handleLoadingFalse();
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid item container sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item>
                            <Typography variant="h5" textAlign="center" sx={{ mt: 3 }} component="h2">
                                You are going to swap {preBusdValue} {swappingToken}. Please confirm the transaction by clicking below
                                button.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            onClick={() => {
                                swapStaxAndBusd(busdValueFormatted, 0, pathToPurchase).then(() => {
                                    handleLoadingFalse();
                                    updateBalances();
                                    getStaxPrice();
                                    handleClose5();
                                });
                            }}
                            sx={{
                                mt: 3,
                                fontSize: 15,
                                width: 80,
                                height: 30,
                                color: theme.palette.grey[900],
                                backgroundColor: theme.palette.success.main
                            }}
                        >
                            Confirm
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
                    border: 0,
                    mb: 5
                }}
                content={false}
            >
                <CardContent>
                    <Grid item container sx={{ justifyContent: 'center', display: 'flex' }}>
                        <Grid container sx={{ justifyContent: 'center', display: 'flex' }}>
                            <Typography textAlign="center" variant="h6" color={theme.palette.grey[50]}>
                                Swap
                            </Typography>
                            <SwapVerticalCircleIcon color="success" fontSize="large" sx={{ mt: 2.5, ml: 1 }} />
                        </Grid>
                        <Grid item container xs={12} sx={{ mt: 5, display: 'flex', justifyContent: 'center' }} lg={4}>
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
                                        <Grid item xs="auto" lg="auto" md="auto" sm="auto" sx={{ mt: 1.2 }}>
                                            <Typography variant="h2" color={theme.palette.grey[50]}>
                                                SWAP
                                            </Typography>
                                        </Grid>
                                        <Grid item xs="auto" lg="auto" sm="auto" md="auto" sx={{ mt: 1.2 }}>
                                            <Typography variant="h2" color={theme.palette.success.main} textAlign="left">
                                                STAX
                                            </Typography>
                                        </Grid>
                                        <Grid item xs="auto" lg="auto" sm="auto" md="auto" sx={{ mt: 0.3 }}>
                                            <IconButton onClick={() => handleOpen4()}>
                                                <SettingsIcon fontSize="medium" color="success" />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        sx={{
                                            backgroundColor: theme.palette.grey[900],
                                            justifyContent: 'center',
                                            display: 'flex',
                                            mt: 4
                                        }}
                                        lg={12}
                                        md={7}
                                        xs={12}
                                        sm={7}
                                    >
                                        <Grid
                                            item
                                            xs={8.5}
                                            sx={{
                                                borderRadius: 2,
                                                border: 2,
                                                borderColor: theme.palette.success.main,
                                                justifyContent: 'right',
                                                display: 'flex'
                                            }}
                                        >
                                            <Grid item sx={{ display: 'flex', justifyContent: 'center', mt: 1.5, mr: 1, ml: 1 }}>
                                                {staxLogoFirst ? <SmallStaxLogo /> : <BusdSmallLogo />}
                                            </Grid>
                                            {staxLogoFirst ? (
                                                <TextField
                                                    fullWidth
                                                    sx={{
                                                        display: 'flex',
                                                        borderColor: theme.palette.success.main
                                                    }}
                                                    inputProps={{ style: { textAlign: 'left', color: 'white' } }}
                                                    onChange={(e) => {
                                                        setPreBusdValue(e.target.value);
                                                        setSwappingToken('STAX');
                                                    }}
                                                    value={preBusdValue}
                                                    id="standard-basic"
                                                    label="Enter amount:"
                                                    variant="standard"
                                                    color="success"
                                                />
                                            ) : (
                                                <TextField
                                                    fullWidth
                                                    sx={{
                                                        display: 'flex',
                                                        borderColor: theme.palette.success.main
                                                    }}
                                                    inputProps={{ style: { textAlign: 'left', color: 'white' } }}
                                                    onChange={(e) => {
                                                        setPreBusdValue(e.target.value);
                                                        setSwappingToken('BUSD');
                                                    }}
                                                    value={preBusdValue}
                                                    id="standard-basic"
                                                    label="Enter amount:"
                                                    variant="standard"
                                                    color="success"
                                                />
                                            )}
                                            {staxLogoFirst ? (
                                                <Button
                                                    variant="text"
                                                    onClick={() => setPreBusdValue(staxBalance)}
                                                    size="small"
                                                    sx={{ color: theme.palette.success.main, borderColor: theme.palette.success.main }}
                                                >
                                                    Max
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="text"
                                                    onClick={() => setPreBusdValue(busdBalance)}
                                                    size="small"
                                                    sx={{ color: theme.palette.success.main, borderColor: theme.palette.success.main }}
                                                >
                                                    Max
                                                </Button>
                                            )}
                                        </Grid>
                                        {staxLogoFirst ? (
                                            <Grid item container xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
                                                <Typography textAlign="center">Balance: {staxBalanceFinal}</Typography>
                                                <XsStaxLogo />
                                            </Grid>
                                        ) : (
                                            <Grid item container xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
                                                <Typography textAlign="center">Balance: {busdBalanceFinal}</Typography>
                                                <XsBusdLogo />
                                            </Grid>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <IconButton
                                            onClick={() => {
                                                handleSwap();
                                            }}
                                        >
                                            <SwapVerticalCircleIcon color="success" fontSize="large" />
                                        </IconButton>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        sx={{
                                            backgroundColor: theme.palette.grey[900],
                                            justifyContent: 'center',
                                            display: 'flex'
                                        }}
                                        lg={12}
                                        md={7}
                                        xs={12}
                                        sm={7}
                                    >
                                        <Grid
                                            item
                                            xs={8.5}
                                            sx={{
                                                borderRadius: 2,
                                                mt: 1,
                                                border: 2,
                                                borderColor: theme.palette.success.main,
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}
                                        >
                                            <Grid item sx={{ display: 'flex', justifyContent: 'center', mt: 1.5, mr: 1, ml: 1 }}>
                                                {staxLogoFirst ? <BusdSmallLogo /> : <SmallStaxLogo />}
                                            </Grid>
                                            <TextField
                                                fullWidth
                                                sx={{
                                                    display: 'flex',
                                                    borderColor: theme.palette.success.main
                                                }}
                                                inputProps={{ style: { textAlign: 'left', color: 'white' } }}
                                                onChange={(e) => setPreBusdValue(e.target.value)}
                                                id="standard-basic"
                                                label="Enter amount:"
                                                variant="standard"
                                                color="success"
                                            />
                                        </Grid>
                                        {staxLogoFirst ? (
                                            <Grid item container xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
                                                <Typography textAlign="center">Balance:{busdBalanceFinal}</Typography>
                                                <XsBusdLogo />
                                            </Grid>
                                        ) : (
                                            <Grid item container xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
                                                <Typography textAlign="center">Balance:{staxBalanceFinal}</Typography>
                                                <XsStaxLogo />
                                            </Grid>
                                        )}
                                        <Grid item xs={12} sx={{ mt: 1 }}>
                                            {staxLogoFirst ? (
                                                <Typography textAlign="center" sx={{ mb: 1, mt: 2, color: theme.palette.success.light }}>
                                                    Price impact: {priceImpact1.toLocaleString(undefined, { maximumFractionDigits: 2 })} %
                                                </Typography>
                                            ) : (
                                                <Typography textAlign="center" sx={{ mb: 1, mt: 2, color: theme.palette.success.light }}>
                                                    Price impact: {priceImpact2.toLocaleString(undefined, { maximumFractionDigits: 2 })} %
                                                </Typography>
                                            )}
                                            <Typography textAlign="center" sx={{ mb: 1, color: theme.palette.success.light }}>
                                                Slippage: {slippageF}%
                                            </Typography>
                                            <Grid item sx={{ mb: 3, mt: 3, display: 'flex', justifyContent: 'center' }}>
                                                <LoadingButton
                                                    loading={loading}
                                                    onClick={() => {
                                                        setBusdValue(preBusdValue);
                                                        handleLoadingTrue();
                                                        updateBalances();
                                                        handleOpen5();
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
