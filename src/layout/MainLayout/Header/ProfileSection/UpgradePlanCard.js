// material-ui
import { styled } from '@mui/material/styles';
import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

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

const UpgradePlanCard = () => (
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
                        Stake STAX in order to generate more interest <br />
                        in the form of more STAX.
                    </Typography>
                </Grid>
                <Grid item>
                    <Stack direction="row">
                        <AnimateButton>
                            <Button variant="contained" color="grey" sx={{ boxShadow: '10' }}>
                                <Typography variant="h3" color="success.dark">
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

export default UpgradePlanCard;
