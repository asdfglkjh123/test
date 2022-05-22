// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Box, Card, CardContent, TextField, Grid, Typography, Modal } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import DoneIcon from '@mui/icons-material/Done';
import Web3 from 'web3';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SharesSTAXChart from './SharesSTAXChart';
import React, { useState, useEffect } from 'react';
import {
    ggetBUSDBalance,
    sellStax,
    buyStax,
    ggetStaxBalance,
    getStaxPrice,
    ggetTotalSTAXSupply,
    approveBusd,
    approveStax
} from 'components/wallet/sharesABI';
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
    const [value, setValue] = React.useState(0);
    const [totalStaxSuply, setTotalStaxSupply] = React.useState(0);
    const valueF = Web3.utils.toWei(value.toString(), 'ether');
    const valueFormatted = Web3.utils.toBN(valueF);
    const [busdValue, setBusdValue] = React.useState(0);
    const busdValueF = Web3.utils.toWei(busdValue.toString(), 'ether');
    const busdValueFormatted = Web3.utils.toBN(busdValueF);
    // eslint-disable-next-line global-require
    const BigNumber = require('bignumber.js');
    const [busdBalance, setBusdBalance] = React.useState(0);
    const busdBalanceNumber = new BigNumber(busdBalance);
    const busdBalanceFormat = busdBalanceNumber.decimalPlaces(2);
    const busdBalanceFinal = busdBalanceFormat.toLocaleString(undefined);
    const [staxBalance, setStaxBalance] = React.useState(0);
    const staxBalanceNumber = new BigNumber(staxBalance);
    const staxBalanceFormat = staxBalanceNumber.decimalPlaces(2);
    const staxBalanceFinal = staxBalanceFormat.toLocaleString(undefined);
    const theme = useTheme();
    const [staxPrice, setStaxPrice] = useState([], [], []);
    const [loading, setLoading] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const handleClose3 = () => setOpen3(false);
    const handleOpen3 = () => setOpen3(true);
    const handleLoadingTrue = () => setLoading(true);
    const handleLoadingFalse = () => setLoading(false);
    const timestamp = Math.floor(Date.now() / 1000);
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
    useEffect(() => {
        async function load2() {
            fetchBusdBalance();
            fetchStaxBalance();
            fetchStaxPrice();
            fetchStaxTotalSupply();
            console.log(timestamp);
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
                                <Grid container sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
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
                                            Market Cap:{' '}
                                            {((staxPrice[1] / staxPrice[0]) * totalStaxSuply).toLocaleString(undefined, {
                                                maximumFractionDigits: 2
                                            })}{' '}
                                            {` $ `}
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={12} xs={12}>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="center">
                                            Liquidity:{' '}
                                            {((staxPrice[1] * 2) / 1000000000000000000).toLocaleString(undefined, {
                                                maximumFractionDigits: 2
                                            })}{' '}
                                            {` $ `}
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={12} xs={12}>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="center">
                                            Starting Price: 0.0002$
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={12} xs={12}>
                                        <Typography sx={{ my: 2 }} variant="h5" textAlign="center">
                                            Price:{' '}
                                            {(staxPrice[1] / staxPrice[0])
                                                .toLocaleString(undefined, { maximumFractionDigits: 18 })
                                                .substring(0, 8)}
                                            {` $ `}
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
                                            xs={7}
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
                                                onChange={(e) => setBusdValue(e.target.value)}
                                                id="standard-basic"
                                                label="Enter BUSD amount:"
                                                variant="standard"
                                                color="success"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography textAlign="center">Balance: {busdBalanceFinal} BUSD</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid item sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                                                <LoadingButton
                                                    loading={loading}
                                                    onClick={() => {
                                                        handleLoadingTrue();
                                                        buyStax(busdValueFormatted).then(() => {
                                                            handleLoadingFalse();
                                                            handleOpen3();
                                                            fetchBusdBalance();
                                                            fetchStaxBalance();
                                                            fetchStaxPrice();
                                                        });
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
                                            xs={7}
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
                                                onChange={(e) => setValue(e.target.value)}
                                                id="standard-basic"
                                                label="Enter STAX amount:"
                                                variant="standard"
                                                color="success"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography textAlign="center">Balance: {staxBalanceFinal} STAX</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid item sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                                                <LoadingButton
                                                    loading={loading}
                                                    onClick={() => {
                                                        handleLoadingTrue();
                                                        getStaxPrice();
                                                        sellStax(valueFormatted).then(() => {
                                                            handleLoadingFalse();
                                                            handleOpen3();
                                                            fetchBusdBalance();
                                                            fetchStaxBalance();
                                                            fetchStaxPrice();
                                                        });
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
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                                        <Button
                                            onClick={() => {
                                                approveBusd().then(() => {
                                                    approveStax();
                                                });
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
                                            Approve
                                        </Button>
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
