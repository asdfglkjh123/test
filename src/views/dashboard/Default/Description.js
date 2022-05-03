// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, CardContent, Grid, Typography } from '@mui/material';
import DecLogo from './declogo';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const Description = () => {
    const theme = useTheme();

    return (
        <>
            <MainCard
                sx={{ height: 'auto', width: '102.7%', borderRadius: 0, backgroundColor: theme.palette.grey[900], border: 0 }}
                content={false}
            >
                <CardContent>
                    <Grid container>
                        <Grid item lg={12} xs={12} sx={{ mb: 0 }}>
                            <Typography variant="h1" textAlign="center">
                                Flexible Ecosystem & Staking
                            </Typography>
                        </Grid>
                        <Grid container sx={{ my: 5 }} alignContent="center" justifyContent="center">
                            <Grid item lg={7} xs={12} md={6} sm={7} sx={{ mt: 10, mx: 0 }} alignContent="right" justifyContent="right">
                                <Grid item lg={9} sm={12} sx={{ borderLeft: 2, borderColor: theme.palette.success.main }}>
                                    <Typography sx={{ mx: 2 }} textAlign="left" variant="h6" color={theme.palette.success.main}>
                                        STAX
                                    </Typography>
                                    <Typography sx={{ mx: 2 }} textAlign="left" variant="h6" color={theme.palette.grey[50]}>
                                        Introduction
                                    </Typography>
                                    <Typography textAlign="left" sx={{ mx: 2, mt: 5 }} color={theme.palette.grey[50]} variant="h4">
                                        STAX is decentralized cryptocurrency on Binance Smart Chain and it is the main token of the
                                        protocol. Users may stake their tokens in order to receive rewards in the form of more STAX. The
                                        protocol provides boost token used for different features - Shares STAX (sSTX). Shares STAX holders
                                        receive passive BUSD dividends received from STAX Daily Volume & each sSTX purchase.
                                    </Typography>
                                    <Button sx={{ mx: 2, mt: 2 }} size="large" variant="outlined" color="success">
                                        Buy STAX
                                    </Button>
                                    <Button sx={{ mt: 2 }} size="large" variant="contained" color="success">
                                        STAKE
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ backgroundColor: theme.palette.grey[900], my: 5, mx: 0 }} sm={5} lg={4} md={5}>
                                <DecLogo />
                                <Typography textAlign="center">STAX & BUSD Rewards</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default Description;
