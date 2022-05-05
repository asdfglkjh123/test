import { useState, useEffect } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Card, CardContent, Divider, Grid, TextField, Tooltip, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import StaxLogo from './staxlogo';
import InfoIcon from '@mui/icons-material/Info';
import { ggetStaxBalance, ggetOwnBalance, stakeStax, stakeHas } from 'components/wallet/sharesABI';
import BigNumber from 'bignumber.js';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const StakingCard = () => {
    const theme = useTheme();
    const [balance, setBalance] = useState(0);
    const balanceToNumber = new BigNumber(balance);
    const balanceFormat = balanceToNumber.decimalPlaces(2);
    const balanceFormatted = balanceFormat.toLocaleString(undefined);
    const [stakeAmount, setStakeAmount] = useState(0);
    const [stakeName, setStakeName] = useState(0);
    const Number18Decimals = 1000000000000000000;
    const stakeAmountFormatted = new BigNumber(stakeAmount).multipliedBy(Number18Decimals);
    const [sharesBalance, setSharesBalance] = useState(0);
    const [stakesList, setStakesList] = useState([[], []]);
    const [staked, stakedd] = stakesList;
    const myAPY = 9.125 + sharesBalance * 4.5625;
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
            <MainCard sx={{ borderRadius: 0, backgroundColor: theme.palette.grey[900], border: 0 }} content={false}>
                <CardContent>
                    <Grid container spacing={2} sx={{ justifyContent: 'center', display: 'flex' }}>
                        <Grid container mt={5} sx={{ justifyContent: 'center', display: 'flex' }}>
                            <Grid item>
                                <Typography textAlign="center" variant="h1" color={theme.palette.grey[50]}>
                                    Staking
                                </Typography>
                                <Divider />
                            </Grid>
                        </Grid>
                        <Grid item lg={4.5} xs={12} sx={{ mt: 6 }} justifyContent="center">
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
                                    <Grid
                                        item
                                        sx={{ height: 100, backgroundColor: theme.palette.grey[900], my: 1, ml: 1 }}
                                        lg={3.6}
                                        xs="auto"
                                    >
                                        <StaxLogo />
                                    </Grid>
                                    <Grid item lg="auto" xs="auto" sx={{ ml: 2, mt: 5 }}>
                                        <Typography variant="h2" color={theme.palette.grey[50]} textAlign="center">
                                            Stake
                                        </Typography>
                                    </Grid>
                                    <Grid item lg="auto" xs="auto">
                                        <Typography
                                            variant="h2"
                                            sx={{ ml: 0.7, mt: 5 }}
                                            color={theme.palette.success.main}
                                            textAlign="center"
                                        >
                                            STAX
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={1} xs="auto" sx={{ mt: 5, pl: 0.5, pt: 0.2 }}>
                                        <Tooltip
                                            sx={{ color: theme.palette.success.main }}
                                            title={
                                                <Typography
                                                    sx={{
                                                        color: theme.palette.success.main
                                                    }}
                                                >
                                                    Stakes have name, staked amount and SHARESBONUS. Users choose the name and tokens to be
                                                    staked. When creating a stake, the smart contract will get the user`s current sSTX
                                                    balance and save it as SHARESBONUS in the stake`s properties.
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
                                        <Grid item sx={{ backgroundColor: theme.palette.grey[900], my: 0 }} lg="auto">
                                            <TextField
                                                sx={{ borderBottom: 2, borderColor: theme.palette.success.main }}
                                                onChange={(e) => setStakeName(e.target.value)}
                                                inputProps={{ style: { width: 110, color: 'white' } }}
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
                                                sx={{ borderBottom: 2, borderColor: theme.palette.success.main }}
                                                onChange={(e) => setStakeAmount(e.target.value)}
                                                inputProps={{ style: { color: 'white' } }}
                                                type="number"
                                                id="standard-basic"
                                                variant="standard"
                                                color="success"
                                            />
                                            <Typography variant="h5" textAlign="center">
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
                                                        SHARESBONUS - shows your current sSTX balance. Each sSTX in your wallet, increases
                                                        your APY by 5%. An user may hold unlimited amount of sSTX but the SHARESBONUS is
                                                        limited to 20. Therefore, we can say the maximum APY is 108% (20 * 5% + 8%).
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
                                            <Typography
                                                variant="h4"
                                                sx={{ mt: 1, ml: 1 }}
                                                color={theme.palette.success.main}
                                                textAlign="center"
                                            >
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
                                                        Initial APY - That is the minimum APY that a stake can get if there are no sSTX in
                                                        the wallet of the staker at that given moment.
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
                                                        Current APY - shows your APY at the moment if you open a stake. It is calculated by
                                                        the following formula: SHARESBONUS * 5 + 8%. The APY is limited to 108% (20
                                                        SHARESBONUS).
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
                                            <Button
                                                onClick={() => {
                                                    stakeStax(stakeAmountFormatted, stakeName).then(() => {
                                                        fetchStaxBalance();
                                                        fetchSharesBalance();
                                                        fetchStakesBalance();
                                                    });
                                                }}
                                                sx={{
                                                    fontSize: 20,
                                                    width: 130,
                                                    color: theme.palette.grey[900],
                                                    backgroundColor: theme.palette.success.main
                                                }}
                                            >
                                                Stake
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item lg={4.5} xs={12} sx={{ mt: 6 }}>
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
                                            When creating a stake, the contract will save the staker`s` sSTX balance as SHARESBONUS. 1
                                            SHARESBONUS + ~4.56% APY.
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
                                        <Typography
                                            variant="h3"
                                            sx={{ my: 4, ml: 1 }}
                                            color={theme.palette.success.main}
                                            textAlign="center"
                                        >
                                            {myAPY}%
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item lg={9} xs={12} sx={{ mt: 5 }}>
                            <Card
                                sx={{
                                    width: 'auto',
                                    borderLeft: 1,
                                    borderRight: 1,
                                    borderBottom: 3,
                                    borderColor: theme.palette.success.light,
                                    borderRadius: 5,
                                    boxShadow: '0px 10px 20px rgb(0, 230, 117)',
                                    mb: 10
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
                                            Active Stakes
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
                                    <Grid item lg={1.8} md={1.9} xs="auto" sx={{ pl: 1, pt: 0.2 }}>
                                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Typography
                                                variant="h4"
                                                sx={{ mt: -0.2 }}
                                                color={theme.palette.success.main}
                                                textAlign="center"
                                            >
                                                Name
                                            </Typography>
                                            <Tooltip
                                                sx={{ color: theme.palette.success.main, mt: -0.3 }}
                                                title={
                                                    <Typography
                                                        sx={{
                                                            color: theme.palette.success.main
                                                        }}
                                                    >
                                                        Name of the stake.
                                                    </Typography>
                                                }
                                            >
                                                <InfoIcon />
                                            </Tooltip>
                                        </Grid>
                                        <Divider sx={{ backgroundColor: theme.palette.grey[50] }} />
                                        <Grid item lg="auto" xs="auto" sx={{ mt: 1 }}>
                                            <Typography variant="h4" color={theme.palette.grey[50]} textAlign="center">
                                                {stakedd.map((total, index) => (
                                                    <Typography sx={{ mb: 3 }} key={index}>
                                                        {total.stakename}
                                                    </Typography>
                                                ))}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={1.8} md={2} xs="auto" sx={{ pl: 1, pt: 0.2 }}>
                                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Typography
                                                variant="h4"
                                                sx={{ mt: -0.2 }}
                                                color={theme.palette.success.main}
                                                textAlign="center"
                                            >
                                                Sharesbonus
                                            </Typography>
                                            <Tooltip
                                                sx={{ color: theme.palette.success.main, mt: -0.3 }}
                                                title={
                                                    <Typography
                                                        sx={{
                                                            color: theme.palette.success.main
                                                        }}
                                                    >
                                                        SHARESBONUS (BONUS) shows the amount of sSTX that you held at the moment of opening
                                                        the stake. It also increases your stake APY as it follows: 5% per sSTX token. Each
                                                        sSTX increases the SHAREBONUS by the factor of 1. There is a limit of maximum 20
                                                        SHARESBONUS or 100% Bonus APY.
                                                    </Typography>
                                                }
                                            >
                                                <InfoIcon />
                                            </Tooltip>
                                        </Grid>
                                        <Grid item lg="auto" xs="auto" sx={{ mt: 1 }}>
                                            {stakedd.map((total, index) => (
                                                <Typography sx={{ mb: 3 }} textAlign="center" key={index}>
                                                    {total.sharesbonus}
                                                </Typography>
                                            ))}
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={1.8} md={1.9} sm="auto" xs="auto" sx={{ pl: 1, pt: 0.2 }}>
                                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Typography
                                                variant="h4"
                                                sx={{ mt: -0.2 }}
                                                color={theme.palette.success.main}
                                                textAlign="center"
                                            >
                                                Staked
                                            </Typography>
                                            <Tooltip
                                                sx={{ color: theme.palette.success.main, mt: -0.3 }}
                                                title={
                                                    <Typography
                                                        sx={{
                                                            color: theme.palette.success.main
                                                        }}
                                                    >
                                                        Shows the amount of staked STAX tokens.
                                                    </Typography>
                                                }
                                            >
                                                <InfoIcon />
                                            </Tooltip>
                                        </Grid>
                                        <Grid container sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                                            <Typography variant="h4" color={theme.palette.grey[50]} textAlign="center">
                                                {stakedd.map((total, index) => (
                                                    <Typography sx={{ mb: 3 }} key={index}>
                                                        {(total.amount / Number18Decimals).toLocaleString(undefined, {
                                                            maximumFractionDigits: 2
                                                        })}
                                                    </Typography>
                                                ))}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={1.8} md={1.9} xs="auto" sx={{ pl: 1, pt: 0.2 }}>
                                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Typography
                                                variant="h4"
                                                sx={{ mt: -0.2 }}
                                                color={theme.palette.success.main}
                                                textAlign="center"
                                            >
                                                Rewards
                                            </Typography>
                                            <Tooltip
                                                sx={{ color: theme.palette.success.main, mt: -0.3 }}
                                                title={
                                                    <Typography
                                                        sx={{
                                                            color: theme.palette.success.main
                                                        }}
                                                    >
                                                        Shows the rewards of the stake.
                                                    </Typography>
                                                }
                                            >
                                                <InfoIcon />
                                            </Tooltip>
                                        </Grid>
                                        <Grid container sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                                            <Typography variant="h4" color={theme.palette.grey[50]} textAlign="center">
                                                {stakedd.map((total, index) => (
                                                    <Typography
                                                        sx={{ mb: 3 }}
                                                        color={theme.palette.grey[50]}
                                                        textAlign="center"
                                                        key={index}
                                                    >
                                                        {(total.claimable / Number18Decimals).toLocaleString(undefined, {
                                                            maximumFractionDigits: 2
                                                        })}
                                                    </Typography>
                                                ))}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={1.8} md={1.9} xs="auto" sx={{ pl: 1, pt: 0.2 }}>
                                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Typography
                                                variant="h4"
                                                sx={{ mt: -0.2 }}
                                                color={theme.palette.success.main}
                                                textAlign="center"
                                            >
                                                TUM
                                            </Typography>
                                            <Tooltip
                                                sx={{ color: theme.palette.success.main, mt: -0.3 }}
                                                title={
                                                    <Typography
                                                        sx={{
                                                            color: theme.palette.success.main
                                                        }}
                                                    >
                                                        TUM stands for Time Until Mature and it shows how many days left until a user can
                                                        claim the stake rewards or close it without facing a penalty.
                                                    </Typography>
                                                }
                                            >
                                                <InfoIcon />
                                            </Tooltip>
                                        </Grid>
                                        <Grid item lg="auto" xs="auto" sx={{ mt: 1 }}>
                                            {stakedd.map((total, index) => (
                                                <Typography sx={{ mb: 3 }} color={theme.palette.grey[50]} textAlign="center" key={index}>
                                                    {total.since}
                                                </Typography>
                                            ))}
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={1.6} md={1.9} xs="auto" sx={{ pl: 1 }}>
                                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Typography
                                                variant="h4"
                                                sx={{ mt: -0.2 }}
                                                color={theme.palette.success.main}
                                                textAlign="center"
                                            >
                                                Activities
                                            </Typography>
                                            <Tooltip
                                                sx={{ color: theme.palette.success.main, mt: -0.3 }}
                                                title={
                                                    <Typography
                                                        sx={{
                                                            color: theme.palette.success.main
                                                        }}
                                                    >
                                                        Users may claim their rewards or close the stake by clicking below buttons.
                                                    </Typography>
                                                }
                                            >
                                                <InfoIcon />
                                            </Tooltip>
                                        </Grid>
                                        <Grid container sx={{ display: 'flex', justifyContent: 'center', mt: 0.7 }}>
                                            {stakedd.map((total, index) => (
                                                <>
                                                    <Button
                                                        sx={{
                                                            mb: 2.5,
                                                            fontSize: 15,
                                                            width: 30,
                                                            height: 23,
                                                            color: theme.palette.grey[900],
                                                            backgroundColor: theme.palette.success.main
                                                        }}
                                                        key={index}
                                                    >
                                                        Close
                                                    </Button>
                                                </>
                                            ))}
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

export default StakingCard;
