import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
// material-ui
import { Box, Card, Grid, Typography, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import EChartsReact from 'echarts-for-react';
// project imports
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LayersIcon from '@mui/icons-material/Layers';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { ggetTotalSTAXSupply, getStaxPrice } from 'components/wallet/sharesABI';
import BigNumber from 'bignumber.js';

const ShadowBox = ({ shadow }) => (
    <Card sx={{ mb: 3, boxShadow: shadow }}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 4.5,
                bgcolor: 'primary.light',
                color: 'grey.800'
            }}
        >
            <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
        </Box>
    </Card>
);

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};

const UtilitiesShadow = () => {
    const theme = useTheme();
    const [totalStaxSuply, setTotalStaxSupply] = React.useState(0);
    const supplyNumber = new BigNumber(totalStaxSuply);
    const TotalSupplyFormatted = supplyNumber.decimalPlaces(2);
    const TotalSupply = TotalSupplyFormatted.toLocaleString(undefined);
    const [staxPrice, setStaxPrice] = useState([], [], []);
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
            fetchStaxTotalSupply();
            fetchStaxPrice();
        }
        load2();
    }, []);
    const option = {
        tooltip: {},
        legend: {
            orient: 'horizontal',
            left: 'center',
            data: ['Circ. Supply (excl. PCS)', 'PCS', 'Locked', 'Total Staked'],
            textStyle: {
                color: theme.palette.success.main
            }
        },
        series: [
            {
                name: 'Supply Stats',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                label: {
                    normal: {
                        textStyle: {
                            color: theme.palette.grey[50]
                        }
                    }
                },
                data: [
                    { value: 9293943, name: 'Circ. Supply (excl. PCS)' },
                    { value: 9020992, name: 'PCS' },
                    { value: 3755902, name: 'Locked' },
                    { value: 10000000, name: 'Total Staked' }
                ]
            }
        ]
    };
    return (
        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography textAlign="center" variant="h2">
                STAX Global Stats
            </Typography>
            <QueryStatsIcon sx={{ ml: 1 }} fontSize="medium" color="success" />
            <Grid container xs={12} sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                <Button size="large" color="success" variant="outlined">
                    <LayersIcon color="success" />
                </Button>
                <Button size="large" color="success" sx={{ ml: 2 }} variant="outlined">
                    <CandlestickChartIcon color="success" />
                </Button>
                <Button size="large" color="success" sx={{ ml: 2 }} variant="outlined">
                    <PriceChangeIcon color="success" />
                </Button>
                <Button size="large" color="success" sx={{ ml: 2 }} variant="outlined">
                    <SwitchAccountIcon color="success" />
                </Button>
            </Grid>
            <Grid
                item
                container
                lg={9.1}
                xs={11}
                sx={{
                    borderLeft: 3,
                    borderBottom: 3,
                    borderRadius: 5,
                    borderColor: theme.palette.success.main,
                    mt: 5,
                    mb: 10,
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Grid item xs={12} lg={12} sx={{ mb: 10, mt: 5 }}>
                    <EChartsReact option={option} style={{ height: 400 }} />
                </Grid>
            </Grid>
            <Grid item container lg={3.5} xs={12} sx={{ mb: 15 }}>
                <Card
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderLeft: 1,
                        borderRight: 1,
                        borderBottom: 3,
                        borderColor: theme.palette.success.light,
                        borderRadius: 5,
                        boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                    }}
                >
                    <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                        {' '}
                        Total staked
                    </Typography>
                    <Typography textAlign="center" variant="h4" sx={{ mb: 7, mt: 5, color: theme.palette.success.main }}>
                        {' '}
                        10,000,000 STAX
                    </Typography>
                </Card>
            </Grid>
            <Grid item container lg={3.5} xs={12} sx={{ mb: 15 }}>
                <Card
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderLeft: 1,
                        borderRight: 1,
                        borderBottom: 3,
                        borderColor: theme.palette.success.light,
                        borderRadius: 5,
                        boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                    }}
                >
                    <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                        {' '}
                        Circulating Supply (excl. PanCakeSwap)
                    </Typography>
                    <Typography textAlign="center" variant="h4" sx={{ mt: 5, mb: 7, color: theme.palette.success.main }}>
                        {TotalSupply}
                    </Typography>
                </Card>
            </Grid>
            <Grid item container lg={3.5} xs={12} sx={{ mb: 15 }}>
                <Card
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderLeft: 1,
                        borderRight: 1,
                        borderBottom: 3,
                        borderColor: theme.palette.success.light,
                        borderRadius: 5,
                        boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                    }}
                >
                    <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                        {' '}
                        Locked (rewards to sSTX Holders)
                    </Typography>
                    <Typography textAlign="center" variant="h4" sx={{ mt: 5, mb: 7, color: theme.palette.success.main }}>
                        {' '}
                        10,000,000 STAX
                    </Typography>
                </Card>
            </Grid>
            <Grid item container lg={3.5} xs={12} sx={{ mb: 15 }}>
                <Card
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderLeft: 1,
                        borderRight: 1,
                        borderBottom: 3,
                        borderColor: theme.palette.success.light,
                        borderRadius: 5,
                        boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                    }}
                >
                    <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                        {' '}
                        PancakeSwap Pool
                    </Typography>
                    <Typography textAlign="center" variant="h4" sx={{ mt: 5, mb: 7, color: theme.palette.success.main }}>
                        {(staxPrice[0] / 1000000000000000000).toLocaleString(undefined, {
                            maximumFractionDigits: 2
                        })}{' '}
                        STAX
                    </Typography>
                </Card>
            </Grid>
            <Grid item container lg={3.5} xs={12} sx={{ mb: 15 }}>
                <Card
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderLeft: 1,
                        borderRight: 1,
                        borderBottom: 3,
                        borderColor: theme.palette.success.light,
                        borderRadius: 5,
                        boxShadow: '0px 10px 20px rgb(0, 230, 117)'
                    }}
                >
                    <Typography textAlign="center" variant="h3" sx={{ mt: 7 }}>
                        {' '}
                        Total Supply
                    </Typography>
                    <Typography textAlign="center" variant="h4" sx={{ mt: 5, mb: 7, color: theme.palette.success.main }}>
                        {TotalSupply} STAX
                    </Typography>
                </Card>
            </Grid>
        </Grid>
    );
};

export default UtilitiesShadow;
