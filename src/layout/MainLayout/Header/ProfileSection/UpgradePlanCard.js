// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import BigNumber from 'bignumber.js';
// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import { ggetOwnBalance, ggetStaxBalance } from 'components/wallet/sharesABI';

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
    const fetchStaxBalance = async () => {
        ggetStaxBalance()
            .then((balance) => {
                setBalance(balance);
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
            fetchSharesBalance();
        }
        load();
    }, []);
    <CardStyle>
        <CardContent>
            <Grid container direction="column" spacing={2.5}>
                <Grid item>
                    <Typography variant="h4" color="grey.50">
                        STAX - Store of Value
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5" color="grey.50">
                        STAX Balance: {balanceFormatted}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5" color="grey.50">
                        Shares Balance: {sharesBalance}
                    </Typography>
                </Grid>
                <Grid item>
                    <Stack direction="row">
                        <AnimateButton>
                            <Button
                                sx={{
                                    fontSize: 20,
                                    width: 130,
                                    color: theme.palette.grey[900],
                                    backgroundColor: theme.palette.success.main
                                }}
                            >
                                <Typography variant="h3" color="success.dark">
                                    Stake
                                </Typography>
                            </Button>
                        </AnimateButton>
                    </Stack>
                </Grid>
            </Grid>
        </CardContent>
    </CardStyle>;
};

export default UpgradePlanCard;
