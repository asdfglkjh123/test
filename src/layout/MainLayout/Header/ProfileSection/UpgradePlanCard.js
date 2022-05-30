// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BigNumber from 'bignumber.js';
// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import { ggetOwnBalance, ggetStaxBalance, getStaxPrice, getsSTXPrice } from 'components/wallet/sharesABI';
import XsSharesLogo from 'views/utilities/XsSharesLogo';
import XsStaxLogo from 'views/utilities/xsStaxLogo';

// styles
const CardStyle = styled(Card)(({ theme }) => ({
    background: theme.palette.grey[800],
    marginTop: '12px',
    marginBottom: '12px',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '200px',
        height: '200px',
        border: '19px solid ',
        borderColor: theme.palette.success.dark,
        borderRadius: '50%',
        top: '65px',
        right: '-150px'
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: '200px',
        height: '200px',
        border: '3px solid ',
        borderColor: theme.palette.success.dark,
        borderRadius: '50%',
        top: '145px',
        right: '-70px'
    }
}));

// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = () => {
    const theme = useTheme();
    const [balance, setBalance] = useState(0);
    const balanceToNumber = new BigNumber(balance);
    const balanceFormat = balanceToNumber.decimalPlaces(2);
    const balanceFormatted = balanceFormat.toLocaleString(undefined);
    const [sharesBalance, setSharesBalance] = useState(0);
    const [sSTXPrice, setsSTXPrice] = useState(0);
    const [staxPrice, setStaxPrice] = useState([], [], []);
    const fetchStaxBalance = async () => {
        ggetStaxBalance()
            .then((balancee) => {
                setBalance(balancee);
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
    const fetchStaxPrice = async () => {
        getStaxPrice()
            .then((result) => {
                setStaxPrice(result);
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
    useEffect(() => {
        async function load() {
            fetchStaxBalance();
            fetchSharesBalance();
            fetchsSTXPrice();
            fetchStaxPrice();
        }
        load();
    }, []);
    return (
        <CardStyle>
            <CardContent>
                <Grid container direction="column" spacing={2.5}>
                    <Grid item>
                        <Typography variant="h4" sx={{ color: theme.palette.success.main }}>
                            STAX - Store of Value
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Typography variant="h5" color="grey.50">
                            STAX: {balanceFormatted}
                        </Typography>
                        <XsStaxLogo />
                        <Typography variant="h5" color="success.light" sx={{ ml: 1 }}>
                            ( {((staxPrice[1] / staxPrice[0]) * balanceFormatted).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                            {` $ `} )
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Typography variant="h5" color="grey.50">
                            sSTX: {sharesBalance}
                        </Typography>
                        <XsSharesLogo />
                        <Typography variant="h5" color="success.light" sx={{ ml: 1 }}>
                            ({(sharesBalance * sSTXPrice).toLocaleString(undefined, { maximumFractionDigits: 2 })} $)
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Stack direction="row">
                            <AnimateButton>
                                <Button
                                    component={Link}
                                    to="/test/stake"
                                    sx={{
                                        fontSize: 20,
                                        width: 100,
                                        color: theme.palette.grey[900],
                                        backgroundColor: theme.palette.success.main,
                                        borderRadius: 3
                                    }}
                                >
                                    <Typography variant="h4" sx={{ color: theme.palette.grey[900] }}>
                                        Stake
                                    </Typography>
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </CardStyle>
    );
};

export default UpgradePlanCard;
