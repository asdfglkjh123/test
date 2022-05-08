import React, { useState, useEffect } from 'react';

// material-ui
import SimpleDateTime from 'react-simple-timestamp-to-date';
import { useTheme } from '@mui/material/styles';
import {
    Button,
    Box,
    Card,
    Divider,
    Grid,
    Table,
    Paper,
    TableContainer,
    TextField,
    Tooltip,
    TableHead,
    Typography,
    TableBody,
    TableRow,
    TableCell,
    Modal
} from '@mui/material';
// project imports
import StaxLogo from './staxlogo';
import DoneIcon from '@mui/icons-material/Done';
import InfoIcon from '@mui/icons-material/Info';
import { ggetStaxBalance, withdrawAmount, ggetOwnBalance, stakeStax, stakeHas } from 'components/wallet/sharesABI';
import BigNumber from 'bignumber.js';
import Web3 from 'web3';
import { LoadingButton } from '@mui/lab';
// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000000',
    boxShadow: 24,
    borderRadius: 7,
    borderColor: 'black',
    p: 3
};
const StakingCard = () => {
    const theme = useTheme();
    const [balance, setBalance] = useState(0);
    const balanceToNumber = new BigNumber(balance);
    const balanceFormat = balanceToNumber.decimalPlaces(2);
    const balanceFormatted = balanceFormat.toLocaleString(undefined);
    const [stakeAmount, setStakeAmount] = useState(0);
    const [stakeName, setStakeName] = useState(0);
    const Number18Decimals = 1000000000000000000;
    const stakeAmountFormatted = Web3.utils.toWei(stakeAmount.toString(), 'ether');
    const stakeAFormatted = Web3.utils.toBN(stakeAmountFormatted);
    const [sharesBalance, setSharesBalance] = useState(0);
    const [stakesList, setStakesList] = useState([[], []]);
    const [currentClaimable, setCurrentClaimable] = useState(0);
    const [currentStaked, setCurrentStaked] = useState(0);
    const [withdrawSum, setWithdrawSum] = useState(0);
    const withdrawSumFormatted = Web3.utils.toWei(withdrawSum.toString(), 'ether');
    const withdrawAFormatted = Web3.utils.toBN(withdrawSumFormatted);
    const [staked, stakedd] = stakesList;
    // POP - UPS
    const [loading, setLoading] = React.useState(false);
    const [loading2, setLoading2] = React.useState(false);
    const [loading3, setLoading3] = React.useState(false);
    const [loading4, setLoading4] = React.useState(false);
    const [loading5, setLoading5] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const handleClose2 = () => setOpen3(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose3 = () => setOpen3(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose4 = () => setOpen4(false);
    const handleOpen4 = () => setOpen4(true);
    const handleLoadingFalse = () => setLoading(false);
    const handleLoadingTrue = () => setLoading(true);
    const handleLoadingFalse2 = () => setLoading2(false);
    const handleLoadingTrue2 = () => setLoading2(true);
    const handleLoadingFalse3 = () => setLoading3(false);
    const handleLoadingTrue3 = () => setLoading3(true);
    const handleLoadingFalse4 = () => setLoading4(false);
    const handleLoadingTrue4 = () => setLoading4(true);
    const handleLoadingFalse5 = () => setLoading5(false);
    const handleLoadingTrue5 = () => setLoading5(true);
    const handleSubmitTrue = () => setSubmitted(true);
    const handleSubmitFalse = () => setSubmitted(false);
    //  WITHDRAWING INDEX
    const [currentIndex, setCurrentIndex] = useState(0);
    const myAPY = 9.125 + sharesBalance * 4.5625;
    //  FETCHING BLOCKCHAIN DATA
    const fetchStaxBalance = async () => {
        ggetStaxBalance()
            .then((balance) => {
                setBalance(balance);
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
    const fetchSharesBalance = async () => {
        ggetOwnBalance()
            .then((balance) => {
                if (balance > 20) {
                    setSharesBalance(20);
                } else {
                    setSharesBalance(balance);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        async function load() {
            fetchStaxBalance();
            stakeHas();
            fetchSharesBalance();
            fetchStakesBalance();
        }
        load();
    }, []);
    return (
        <>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography variant="h5" textAlign="center" component="h2">
                        Important: 90% penalty is applied to the `withdraw amount` to all pre-mature stakes.
                    </Typography>
                    <Grid item container sx={{ mt: 2, mb: 1, display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h5" textAlign="center" component="h2">
                            Rewards:{' '}
                            {(currentClaimable / Number18Decimals).toLocaleString(undefined, {
                                maximumFractionDigits: 2
                            })}
                        </Typography>
                        <Typography variant="h5" textAlign="center" sx={{ ml: 2 }} component="h2">
                            Staked:{' '}
                            {(currentStaked / Number18Decimals).toLocaleString(undefined, {
                                maximumFractionDigits: 2
                            })}
                        </Typography>
                    </Grid>
                    <Grid item sx={{ justifyContent: 'center', display: 'flex' }}>
                        <TextField
                            required
                            sx={{ borderBottom: 2, borderColor: theme.palette.success.main }}
                            onChange={(e) => setWithdrawSum(e.target.value)}
                            inputProps={{ style: { width: 120, textAlign: 'center', color: 'white' } }}
                            id="standard-basic"
                            label="Withdraw amount"
                            variant="standard"
                            color="success"
                        />
                    </Grid>
                    <Grid item sx={{ justifyContent: 'center', display: 'flex' }}>
                        <LoadingButton
                            loading={loading5}
                            onClick={() => {
                                handleLoadingTrue5();
                                withdrawAmount(withdrawAFormatted, currentIndex).then(() => {
                                    handleLoadingFalse5();
                                    setOpen(false);
                                    setOpen3(true);
                                    handleLoadingFalse3();
                                    fetchStakesBalance();
                                });
                            }}
                            sx={{
                                mt: 2.5,
                                fontSize: 15,
                                width: 80,
                                height: 30,
                                color: theme.palette.grey[900],
                                bgcolor: theme.palette.success.main,
                                backgroundColor: theme.palette.success.main
                            }}
                        >
                            Withdraw
                        </LoadingButton>
                    </Grid>
                </Box>
            </Modal>
            <Modal open={open4} onClose={handleClose4} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography variant="h5" textAlign="center" component="h2">
                        Important: Your stake will be in `pre-mature` phase for the first 45 days and will face heavy penatlies in case of
                        any withdraws / claims (90% fee on the staked, 5% on the rewards and minus 1 SHARESBONUS per Transaction).
                    </Typography>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                        <LoadingButton
                            loading={loading2}
                            onClick={() => {
                                handleLoadingTrue2();
                                stakeStax(stakeAFormatted, stakeName).then(() => {
                                    handleClose4();
                                    handleOpen3();
                                    handleLoadingFalse2();
                                    handleLoadingFalse();
                                    fetchStakesBalance();
                                    fetchStaxBalance();
                                });
                            }}
                            sx={{
                                fontSize: 18,
                                minHeight: 45,
                                minWidth: 140,
                                mt: 3,
                                bgcolor: theme.palette.success.main,
                                backgroundColor: theme.palette.success.main,
                                color: theme.palette.grey[900]
                            }}
                        >
                            Stake
                        </LoadingButton>
                    </Grid>
                </Box>
            </Modal>
            <Modal
                open={open2}
                onClose={handleClose2}
                onBackdropClick={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h5" textAlign="center" component="h2">
                        Important: Each claim reduces the SHARESBONUS by 1. Therefore, the stake APR will be reduced by ~4,56% on each
                        claim/withdraw.
                    </Typography>
                    <Grid item sx={{ display: 'flex', my: 2, justifyContent: 'center' }}>
                        <Typography variant="h5" textAlign="center" component="h2" key={currentIndex}>
                            Amount to be claimed:{' '}
                            {(currentClaimable / Number18Decimals).toLocaleString(undefined, {
                                maximumFractionDigits: 2
                            })}
                        </Typography>
                    </Grid>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                        <LoadingButton
                            loading={loading5}
                            onClick={() => {
                                handleLoadingTrue5();
                                withdrawAmount(0, currentIndex).then(() => {
                                    handleLoadingFalse5();
                                    setOpen2(false);
                                    setOpen3(true);
                                    handleLoadingFalse4();
                                    fetchStakesBalance();
                                });
                            }}
                            sx={{
                                mt: 1,
                                fontSize: 18,
                                minHeight: 35,
                                minWidth: 110,
                                bgcolor: theme.palette.success.main,
                                backgroundColor: theme.palette.success.main,
                                color: theme.palette.grey[900]
                            }}
                        >
                            Claim
                        </LoadingButton>
                    </Grid>
                </Box>
            </Modal>
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
                                mt: 2,
                                fontSize: 18,
                                minHeight: 45,
                                minWidth: 140,
                                bgcolor: theme.palette.success.main,
                                backgroundColor: theme.palette.success.main,
                                color: theme.palette.grey[900]
                            }}
                        >
                            Close
                        </Button>
                    </Grid>
                </Box>
            </Modal>
            <Grid item container spacing={2} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item lg={12} xs={12} md={12} sm={12}>
                    <Typography textAlign="center" variant="h1" color={theme.palette.grey[50]}>
                        Staking
                    </Typography>
                    <Divider />
                </Grid>
                <Grid item container lg={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                    <Card
                        sx={{
                            maxWidth: 1900,
                            borderLeft: 1,
                            borderRight: 1,
                            borderBottom: 3,
                            borderColor: theme.palette.success.light,
                            borderRadius: 5,
                            boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                        }}
                    >
                        <Grid container sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                            <Grid item sx={{ backgroundColor: theme.palette.grey[900], mt: 2 }} lg={3.6} xs="auto">
                                <StaxLogo />
                            </Grid>
                            <Grid item lg="auto" xs="auto" sx={{ ml: 0.8, mt: 5 }}>
                                <Typography variant="h2" color={theme.palette.grey[50]} textAlign="center">
                                    Stake
                                </Typography>
                            </Grid>
                            <Grid item lg="auto" xs="auto">
                                <Typography variant="h2" sx={{ ml: 0.7, mt: 5 }} color={theme.palette.success.main} textAlign="center">
                                    STAX
                                </Typography>
                            </Grid>
                            <Grid item lg={1} xs="auto" sx={{ mt: 5, pt: 0.2 }}>
                                <Tooltip
                                    sx={{ color: theme.palette.success.main }}
                                    title={
                                        <Typography
                                            sx={{
                                                color: theme.palette.success.main
                                            }}
                                        >
                                            Stakes have name, staked amount and SHARESBONUS. Users choose the name and tokens to be staked.
                                            When creating a stake, the smart contract will get the user`s current sSTX balance and save it
                                            as SHARESBONUS in the stake`s properties.
                                        </Typography>
                                    }
                                >
                                    <InfoIcon />
                                </Tooltip>
                            </Grid>
                            <Grid container sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                                <Grid
                                    item
                                    sx={{ justifyContent: 'center', backgroundColor: theme.palette.grey[900], my: 1 }}
                                    lg="auto"
                                    md="auto"
                                    xs="auto"
                                >
                                    <Typography variant="h4" textAlign="center">
                                        NAME:
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ backgroundColor: theme.palette.grey[900] }} lg="auto">
                                    <TextField
                                        required
                                        sx={{ borderBottom: 2, borderColor: theme.palette.success.main }}
                                        onChange={(e) => setStakeName(e.target.value)}
                                        inputProps={{ style: { width: 110, textAlign: 'center', color: 'white' } }}
                                        id="standard-basic"
                                        variant="standard"
                                        color="success"
                                    />
                                    <Typography variant="h5" textAlign="left">
                                        Enter stake name
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                                <Grid
                                    item
                                    sx={{ justifyContent: 'center', backgroundColor: theme.palette.grey[900], my: 1 }}
                                    lg="auto"
                                    md="auto"
                                    xs="auto"
                                >
                                    <Typography variant="h4" textAlign="center">
                                        AMOUNT:
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ backgroundColor: theme.palette.grey[900] }} lg="auto">
                                    <TextField
                                        required
                                        sx={{ borderBottom: 2, borderColor: theme.palette.success.main }}
                                        onChange={(e) => setStakeAmount(e.target.value)}
                                        inputProps={{ style: { width: 110, textAlign: 'center', color: 'white' } }}
                                        type="number"
                                        id="standard-basic"
                                        variant="standard"
                                        color="success"
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Typography variant="h5" textAlign="left">
                                        Balance: {balanceFormatted} STAX
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                                <Grid item xs="auto">
                                    <Typography variant="h4" color={theme.palette.grey[50]} textAlign="center">
                                        SHARESBONUS:
                                    </Typography>
                                </Grid>
                                <Grid item xs="auto">
                                    <Typography variant="h4" sx={{ ml: 1 }} color={theme.palette.success.main} textAlign="center">
                                        {sharesBalance}
                                    </Typography>
                                </Grid>
                                <Grid item xs="auto" sx={{ ml: 0.7, mt: -0.3 }}>
                                    <Tooltip
                                        sx={{ color: theme.palette.success.main }}
                                        title={
                                            <Typography
                                                sx={{
                                                    color: theme.palette.success.main
                                                }}
                                            >
                                                SHARESBONUS - shows your current sSTX balance. Each sSTX in your wallet, increases your APY
                                                by 5%. An user may hold unlimited amount of sSTX but the SHARESBONUS is limited to 20.
                                                Therefore, we can say the maximum APY is 108% (20 * 5% + 8%).
                                            </Typography>
                                        }
                                    >
                                        <InfoIcon />
                                    </Tooltip>
                                </Grid>
                            </Grid>
                            <Grid container sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                                <Grid item xs="auto">
                                    <Typography variant="h4" sx={{ mt: 1 }} color={theme.palette.grey[50]} textAlign="center">
                                        INITIAL APY:
                                    </Typography>
                                </Grid>
                                <Grid item xs="auto">
                                    <Typography variant="h4" sx={{ mt: 1, ml: 1 }} color={theme.palette.success.main} textAlign="center">
                                        9.13%
                                    </Typography>
                                </Grid>
                                <Grid item xs="auto" sx={{ ml: 0.7, my: 0.9 }}>
                                    <Tooltip
                                        sx={{ color: theme.palette.success.main }}
                                        title={
                                            <Typography
                                                sx={{
                                                    color: theme.palette.success.main
                                                }}
                                            >
                                                Initial APY - That is the minimum APY that a stake can get if there are no sSTX in the
                                                wallet of the staker at that given moment.
                                            </Typography>
                                        }
                                    >
                                        <InfoIcon />
                                    </Tooltip>
                                </Grid>
                            </Grid>
                            <Grid container sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                                <Grid item xs="auto">
                                    <Typography variant="h4" color={theme.palette.grey[50]} textAlign="center">
                                        CURRENT APY:
                                    </Typography>
                                </Grid>
                                <Grid item xs="auto">
                                    <Typography variant="h4" sx={{ ml: 1 }} color={theme.palette.success.main} textAlign="center">
                                        {myAPY}%
                                    </Typography>
                                </Grid>
                                <Grid item xs="auto" sx={{ ml: 0.7, mt: -0.3 }}>
                                    <Tooltip
                                        sx={{ color: theme.palette.success.main }}
                                        title={
                                            <Typography
                                                sx={{
                                                    color: theme.palette.success.main
                                                }}
                                            >
                                                Current APY - shows your APY at the moment if you open a stake. It is calculated by the
                                                following formula: SHARESBONUS * 5 + 8%. The APY is limited to 108% (20 SHARESBONUS).
                                            </Typography>
                                        }
                                    >
                                        <InfoIcon />
                                    </Tooltip>
                                </Grid>
                            </Grid>
                            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Grid
                                    item
                                    sx={{
                                        backgroundColor: theme.palette.grey[900],
                                        mt: 2,
                                        mb: 3
                                    }}
                                    lg="auto"
                                >
                                    <LoadingButton
                                        loading={loading}
                                        onClick={() => {
                                            handleLoadingTrue();
                                            handleOpen4();
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
                                        Stake
                                    </LoadingButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item container lg={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                    <Card
                        sx={{
                            borderLeft: 1,
                            borderRight: 1,
                            borderBottom: 3,
                            borderColor: theme.palette.success.light,
                            borderRadius: 5,
                            boxShadow: '0px 10px 20px rgb(0, 230, 117)',
                            mb: 1
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                backgroundColor: theme.palette.grey[900],
                                mt: 3,
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Grid item xs="auto">
                                <Typography variant="h2" sx={{ ml: 1 }} color={theme.palette.grey[50]} textAlign="center">
                                    APY /
                                </Typography>
                            </Grid>
                            <Grid item xs="auto">
                                <Typography variant="h2" sx={{ ml: 1 }} color={theme.palette.success.main} textAlign="center">
                                    REWARDS RATE
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid item xs={10}>
                                <Typography variant="h5" sx={{ my: 4 }} color={theme.palette.grey[50]} textAlign="center">
                                    When creating a stake, the contract will save the staker`s` sSTX balance as SHARESBONUS. 1 SHARESBONUS +
                                    ~4.56% APY.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid item xs="auto">
                                <Typography variant="h3" color={theme.palette.grey[50]} textAlign="center">
                                    Initial APY:
                                </Typography>
                            </Grid>
                            <Grid item xs="auto">
                                <Typography variant="h3" sx={{ ml: 1 }} color={theme.palette.success.main} textAlign="center">
                                    9.125%
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid item xs="auto">
                                <Typography variant="h3" sx={{ my: 4 }} color={theme.palette.grey[50]} textAlign="center">
                                    Current APY:
                                </Typography>
                            </Grid>
                            <Grid item xs="auto">
                                <Typography variant="h3" sx={{ my: 4, ml: 1 }} color={theme.palette.success.main} textAlign="center">
                                    {myAPY}%
                                </Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
            <TableContainer component={Paper} sx={{ borderRadius: 5, width: 400 }}>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography color={theme.palette.success.main} textAlign="center">
                                    NAME
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color={theme.palette.success.main} textAlign="center">
                                    SHARESBONUS
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color={theme.palette.success.main} textAlign="center">
                                    STAKED
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color={theme.palette.success.main} textAlign="center">
                                    REWARDS
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Grid container>
                                    <Grid item xs={6} sx={{ mt: 0.9 }}>
                                        <Typography color={theme.palette.success.main} textAlign="center">
                                            TUM
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Tooltip
                                            sx={{ mt: 0.6, color: theme.palette.success.main }}
                                            title={
                                                <Typography
                                                    sx={{
                                                        color: theme.palette.success.main
                                                    }}
                                                >
                                                    TUM stands for Time Until Mature. Each stake will face heavy penalty (90% on the staked
                                                    balane) if the stake is ended before the 45th day.
                                                </Typography>
                                            }
                                        >
                                            <InfoIcon />
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Typography color={theme.palette.success.main} textAlign="center">
                                    ACTIVITIES
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stakedd.map((total, index) => (
                            <TableRow key={total.stakename} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>
                                    <Typography key={index} textAlign="center">
                                        {total.stakename}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography key={index} textAlign="center">
                                        {total.sharesbonus} / {total.sharesbonus * 4.56 + 9.12}%
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography key={index} textAlign="center">
                                        {(total.amount / Number18Decimals).toLocaleString(undefined, {
                                            maximumFractionDigits: 2
                                        })}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography key={index} textAlign="center">
                                        {(total.claimable / Number18Decimals).toLocaleString(undefined, {
                                            maximumFractionDigits: 2
                                        })}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography key={index} textAlign="center">
                                        <SimpleDateTime dateSeparator="/" format="MYD" showTime="0">
                                            {total.since}
                                        </SimpleDateTime>
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Grid item container xs={12} sx={{ width: 170 }}>
                                        <LoadingButton
                                            loading={loading3}
                                            onClick={() => {
                                                setCurrentClaimable(total.claimable);
                                                setCurrentStaked(total.amount);
                                                handleLoadingTrue3();
                                                handleOpen();
                                                setCurrentIndex(index);
                                            }}
                                            sx={{
                                                fontSize: 15,
                                                width: 80,
                                                height: 23,
                                                color: theme.palette.grey[900],
                                                bgcolor: theme.palette.success.main,
                                                backgroundColor: theme.palette.success.main
                                            }}
                                            key={index}
                                        >
                                            Withdraw
                                        </LoadingButton>
                                        <LoadingButton
                                            loading={loading4}
                                            onClick={() => {
                                                setCurrentClaimable(total.claimable);
                                                handleLoadingTrue4();
                                                handleOpen2();
                                                setCurrentIndex(index);
                                            }}
                                            sx={{
                                                ml: 1,
                                                fontSize: 15,
                                                width: 80,
                                                height: 23,
                                                color: theme.palette.grey[900],
                                                bgcolor: theme.palette.success.main,
                                                backgroundColor: theme.palette.success.main
                                            }}
                                            key={index}
                                        >
                                            Claim
                                        </LoadingButton>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default StakingCard;
