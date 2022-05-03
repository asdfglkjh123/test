import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, ListItem, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.grey[900],
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.success.main,
        borderRadius: '50%',
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.success.main,
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const EarningCard = ({ isLoading }) => {
    const theme = useTheme();

    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper sx={{ border: 2, borderColor: theme.palette.success.main, boxShadow: '0px 0px 15px green' }} content={false}>
                    <Box display="flex" justifyContent="center" sx={{ height: 390, p: 2.25 }}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container alignItems="center">
                                    <Grid item>
                                        <Avatar
                                            sx={{
                                                cursor: 'pointer',
                                                ...theme.typography.smallAvatar,
                                                backgroundColor: theme.palette.grey[900],
                                                color: theme.palette.success.dark
                                            }}
                                        >
                                            <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                                        </Avatar>
                                        <Typography sx={{ fontSize: '1.1rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                            STAX TOKEN STATS
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ mb: 1.25 }}>
                                <ListItem alignItems="center" disableGutters sx={{ pl: 0 }}>
                                    <Typography
                                        sx={{
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            color: theme.palette.grey[50]
                                        }}
                                    >
                                        Total Supply:
                                    </Typography>
                                    <Typography
                                        justifyContent="center"
                                        sx={{
                                            pl: 10,
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            color: theme.palette.grey[50]
                                        }}
                                    >
                                        Total Supply:
                                    </Typography>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

EarningCard.propTypes = {
    isLoading: PropTypes.bool
};

export default EarningCard;
