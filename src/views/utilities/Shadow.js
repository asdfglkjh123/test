import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
// material-ui
import { Box, Card, Grid, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import EChartsReact from 'echarts-for-react';
// project imports
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LayersIcon from '@mui/icons-material/Layers';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';

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
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'horizontal',
            left: 'center',
            data: ['Locked for sSTX holders', 'PancakeSwap Pool', 'Circulating Supply (excl. PCS)', 'Total Staked'],
            textStyle: {
                color: theme.palette.success.main
            }
        },
        series: [
            {
                name: 'Supply & Staking Stats',
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
                    { value: 37355902, name: 'Locked for sSTX holders' },
                    { value: 9020992, name: 'PancakeSwap Pool' },
                    { value: 48002553, name: 'Circulating Supply (excl. PCS)' },
                    { value: 7000000, name: 'Total Staked' }
                ]
            }
        ]
    };
    return (
        <Grid container xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                lg={7}
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
        </Grid>
    );
};

export default UtilitiesShadow;
