// material-ui
import { useTheme } from '@mui/material/styles';
import { CardContent, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// assets
import TelegramLogo from './telegram';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const Socials = () => {
    const theme = useTheme();

    return (
        <>
            <MainCard
                sx={{
                    height: 'auto',
                    width: '100%',
                    border: 0,
                    borderRadius: 8,
                    backgroundColor: theme.palette.success.dark
                }}
                content={false}
            >
                <CardContent>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item lg={12} md={12} xs={12} sx={{ mt: 8 }}>
                            <Typography variant="h1" sx={{ color: theme.palette.grey[900] }} textAlign="center">
                                Join STAX
                            </Typography>
                        </Grid>
                        <Grid item lg={12} sx={{ mt: 5 }}>
                            <Typography variant="h4" sx={{ color: theme.palette.grey[900] }} textAlign="center">
                                STAX Protocol is decentralized and trustless ecosystem. No authorization is required to use the the
                                ecosystem.
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            xs={12}
                            sx={{ mt: 7, justifyContent: 'center', display: 'flex', backgroundColor: theme.palette.success.dark }}
                        >
                            <Grid item lg={4} sx={{ mx: 2 }}>
                                <Grid item sx={{ my: 6, borderLeft: 4, borderColor: theme.palette.grey[900] }}>
                                    <Typography variant="h2" sx={{ ml: 2, color: theme.palette.grey[900] }}>
                                        STAX Telegram Community
                                    </Typography>
                                    <Typography variant="h5" sx={{ ml: 2, color: theme.palette.grey[900] }}>
                                        If you need some more information, please make sure to fully read our articles, the STAX whitepaper
                                        and join our Telegram group. There you can address any questions to the community managers or STAX
                                        members.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item mt={5} lg={2} xs={12}>
                                <TelegramLogo />
                            </Grid>
                        </Grid>
                        <Grid item lg={6} height="auto" sx={{ borderRadius: 8, backgroundColor: theme.palette.success.dark, my: 7 }}>
                            <Typography sx={{ color: theme.palette.grey[900], my: 7 }} variant="h1" textAlign="center">
                                STAX - Metaverse
                            </Typography>
                            <Typography sx={{ color: theme.palette.grey[900], my: 7 }} variant="h3" textAlign="center">
                                3D Open World Blockchain based Game
                            </Typography>
                            <Typography sx={{ color: theme.palette.grey[900] }} variant="h5" textAlign="center">
                                Users may explore the space and different planets.
                            </Typography>
                            <Typography sx={{ color: theme.palette.grey[900] }} variant="h5" textAlign="center">
                                There is a collection of NFTs that represents planet owners & skins & spaceships in the game.
                            </Typography>
                            <Typography sx={{ color: theme.palette.grey[900] }} variant="h5" textAlign="center">
                                People can easily connect to each other and explore different planets together (MultiPlayer).
                            </Typography>
                            <Typography sx={{ color: theme.palette.grey[900] }} variant="h5" textAlign="center">
                                On some planets will be hosted AMAs and meetings where users may gather on that planet.
                            </Typography>
                            <Typography sx={{ color: theme.palette.grey[900] }} variant="h5" textAlign="center">
                                Educational content, strategy aproaches, gaming, events and much more to be provided.
                            </Typography>
                            <Typography sx={{ color: theme.palette.grey[900], mb: 3 }} variant="h5" textAlign="center">
                                Comming soon...
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default Socials;
