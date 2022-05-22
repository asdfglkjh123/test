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
        title: {
            text: 'Staking',
            subtext: 'Stats',
            x: 'center',
            textStyle: {
                color: theme.palette.success.main
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Total Staked', 'PancakeSwap Pool', 'Circulating Supply (excl. PCS)', 'Locked for sSTX holders'],
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
                data: [
                    { value: 37355902, name: 'Total Staked' },
                    { value: 9020992, name: 'PancakeSwap Pool' },
                    { value: 48002553, name: 'Circulating Supply (excl. PCS)' },
                    { value: 7000000, name: 'Locked for sSTX holders' }
                ]
            }
        ]
    };
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography textAlign="center" variant="h2">
                STAX Global Stats
            </Typography>
            <QueryStatsIcon sx={{ ml: 1 }} fontSize="medium" color="success" />
            <Grid container sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                <Button size="small" color="success" variant="outlined">
                    <LayersIcon color="success" />
                    Staking
                </Button>
                <Button size="small" color="success" sx={{ ml: 1 }} variant="outlined">
                    <CandlestickChartIcon color="success" />
                    Market
                </Button>
                <Button size="small" color="success" sx={{ ml: 1 }} variant="outlined">
                    <PriceChangeIcon color="success" />
                    Shares
                </Button>
                <Button size="small" color="success" sx={{ ml: 1 }} variant="outlined">
                    <SwitchAccountIcon color="success" />
                    My Stats
                </Button>
            </Grid>
            <Grid item container sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                <Grid item xs={12} lg={6}>
                    <EChartsReact option={option} style={{ height: 400 }} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default UtilitiesShadow;
