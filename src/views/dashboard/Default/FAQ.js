// material-ui
import { useTheme } from '@mui/material/styles';
import { CardContent, Grid, Typography } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// assets
// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const FAQ = () => {
    const theme = useTheme();

    return (
        <>
            <MainCard
                sx={{
                    height: 'auto',
                    width: '100%',
                    border: 0,
                    borderRadius: 0,
                    backgroundColor: theme.palette.grey[900]
                }}
                content={false}
            >
                <CardContent>
                    <Grid container alligncontent="center" justifyContent="center">
                        <Grid item lg={12} sx={{ my: 8 }}>
                            <Typography variant="h1" sx={{ color: theme.palette.grey[50], mt: 5 }} textAlign="center">
                                Frequently Asked Questions (FAQ)
                            </Typography>
                        </Grid>
                        <Grid item lg={7} height="auto" sx={{ borderRadius: 8, backgroundColor: theme.palette.grey[900], my: 7 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.success.main }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: theme.palette.success.main }} variant="h2" textAlign="left">
                                        What is STAX Protocol?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        STAX is high-rewarding staking protocol and provides BUSD dividends. It is decentralized and
                                        trustless cryptocurrency operating on the Binance Smart Chain. You may think of STAX as Store of
                                        Value. The protocol provides two cryptocurrencies: STAX (native) and sSTX (boost token). There is a
                                        1% transaction fee on every STAX transaction except staking functions. The protocol is accessible
                                        with MetaMask (cryptocurrency wallet provider which allows connection between your decentralized
                                        applications).
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item lg={7} height="auto" sx={{ borderRadius: 8, backgroundColor: theme.palette.grey[900], my: 7 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.success.main }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: theme.palette.success.main }} variant="h2" textAlign="left">
                                        How to download and install MetaMask?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        PC/Laptop users may go to https://metamask.io and download the metamask extension (recommended
                                        browser: Google Chrome / Mozilla Firefox). Metamask application is available for Android/iOs devices
                                        on the market. Download and install the app. Then, carefully follow the instructions and finish the
                                        set up.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item lg={7} height="auto" sx={{ borderRadius: 8, backgroundColor: theme.palette.grey[900], my: 7 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.success.main }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: theme.palette.success.main }} variant="h2" textAlign="left">
                                        How to connect MetaMask?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        MetaMask allow you to connect to the blockchain. STAX operates on the Binance Smart Chain (BSC).
                                        Therefore, connection to BSC is required. Instructions on how to connect to BSC are available here:
                                    </Typography>
                                    <Typography>Binance Academy - MetaMask Tutorial</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item lg={7} height="auto" sx={{ borderRadius: 8, backgroundColor: theme.palette.grey[900], my: 7 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.success.main }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: theme.palette.success.main }} variant="h2" textAlign="left">
                                        What is Staking and how to perform it?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Users may lock their STAX tokens and receive rewards in the form of more STAX. This is what staking
                                        looks like in our protocol. The reward rate is increased when holding STAX Shares (sSTX). The
                                        biggest reward rate for a stake is achieved when a user has 9 sSTX. To open a stake, simply go to
                                        `Staking` and choose amount of tokens to stake and name of the stake. When creating the stake the
                                        protocol checks your sSTX balance and saves it into the stake as SHARESBONUS. More SHARESBONUS earn
                                        more staking rewards. Please make sure to fully read and understand the whitepaper before investing
                                        in STAX.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item lg={7} height="auto" sx={{ borderRadius: 8, backgroundColor: theme.palette.grey[900], my: 7 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.success.main }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: theme.palette.success.main }} variant="h2" textAlign="left">
                                        What are STAX Shares?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        STAX Shares (sSTX) is a boost token allowing staking flexibility. sSTX generate passive BUSD
                                        dividends dividends and increase the reward rate of a stake. The initial share price is 20 BUSD and
                                        increases by 1 BUSD every 100sSTX sold. There is a total supply of 100,000 sSTX. After each
                                        purchase, 70% of the BUSD is distributed to the sSTX holders in a direct propotion, 10% Liquidity,
                                        16% S-TREASURY, 4% Team Fund. STAX (native) token applies a fee of 1% on BUY/SELL/TRANSFER
                                        transaction and the amount is distributed to sSTX holders as BUSD dividends. More details to be
                                        found in the whitepaer
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item lg={7} height="auto" sx={{ borderRadius: 8, backgroundColor: theme.palette.grey[900], my: 7 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.success.main }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: theme.palette.success.main }} variant="h2" textAlign="left">
                                        How to get sSTX and receive BUSD Dividends?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        sSTX purchases are available only through the official website: htttps://stax.finance. Once
                                        connected, you can find all kind of stats about sSTX under Shares tab. sSTX can be purchased only
                                        with BUSD by choosing an amount of sSTX to buy and then clicking the `BUY` button under `Shares`
                                        tab. After each purchase, the smart contract collects the BUSD and distributes it in the following
                                        way:.
                                    </Typography>
                                    <Typography>70% of the BUSD is distributed as dividends to sSTX holders.</Typography>
                                    <Typography>10% of the BUSD is used for providing liquidity.</Typography>
                                    <Typography>
                                        16% of the BUSD is collected and locked in the S-Treasury until all sSTX are sold.
                                    </Typography>
                                    <Typography>4% of the BUSD is allocated to the team wallet and used for marketing.</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item lg={7} height="auto" sx={{ borderRadius: 8, backgroundColor: theme.palette.grey[900], my: 7 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.success.main }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: theme.palette.success.main }} variant="h2" textAlign="left">
                                        How to increase the initial APY (reward rate)?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Each STAX stake takes three variables when it is opened. The protocol requires you to put a name of
                                        the stake, amount of STAX tokens to be staked and also checks your sSTX balance at the moment of
                                        creating the stake (your sSTX balance is saved into the stake as SHARESBONUS). The initial APY is 8%
                                        and is increased based on the SHARESBONUS.
                                    </Typography>
                                    <Typography sx={{ my: 0.3 }}>1 sSTX = 1 SHARESBONUS</Typography>
                                    <Typography sx={{ my: 0.3 }}>1 SHARESBONUS = +10% APY</Typography>
                                    <Typography sx={{ my: 0.3 }}>2 SHARESBONUS = + 15% APY</Typography>
                                    <Typography sx={{ my: 0.3 }}>3 SHARESBONUS = + 20% APY</Typography>
                                    <Typography sx={{ my: 0.3 }}>4 SHARESBONUS = + 25% APY</Typography>
                                    <Typography sx={{ my: 0.3 }}>5 SHARESBONUS = + 30% APY</Typography>
                                    <Typography sx={{ my: 0.3 }}>6 SHARESBONUS = + 35% APY</Typography>
                                    <Typography sx={{ my: 0.3 }}>7 SHARESBONUS = + 40% APY</Typography>
                                    <Typography sx={{ my: 0.3 }}>8 SHARESBONUS = + 45% APY</Typography>
                                    <Typography sx={{ my: 0.3 }}> 9 or more SHARESBONUS = + 50% APY</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item lg={7} height="auto" sx={{ borderRadius: 8, backgroundColor: theme.palette.grey[900], my: 7 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.success.main }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: theme.palette.success.main }} variant="h2" textAlign="left">
                                        Fees & Penalties
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        STAX Protocol is designed to store value & distribute BUSD dividends. Therefore, sophisticated
                                        tokenomics have been applied to STAX in order to achieve these goals. There is 1% fee on every STAX
                                        transaction except staking functions. Those fees are collected in BUSD and distributed as dividends
                                        to sSTX holders.
                                    </Typography>
                                    <Typography>
                                        In order to deal with staking compounding and exponentional inflation, huge fees are applied when
                                        user ends a stake or withdraw rewards earlier than the 50th day of the stake.
                                    </Typography>
                                    <Typography>
                                        Ending a stake earlier than 40 days after you created the stake, will reduce your Staked STAX by
                                        50%. (tokens burnt)
                                    </Typography>
                                    <Typography>
                                        Ending a stake earlier than 20 days after you created the stake, will reduce your Staked STAX by
                                        90%. (tokens burnt)
                                    </Typography>
                                    Each withdraw will reduce your stake`s SHARESBONUS by the factor of 1. Example:
                                    <Typography>Stake properties:</Typography>
                                    <Typography>10, 000 STAX staked, 4 SHARESBONUS, 33% APY.</Typography>
                                    <Typography>User performs 1st Withdraw: 10, 000 STAX staked, 3 SHARESBONUS, 28% APY.</Typography>
                                    <Typography>User performs 2nd Withdraw: 10, 000 STAX staked, 2 SHARESBONUS, 23% APY.</Typography>
                                    <Typography>User performs 3rd Withdraw: 10, 000 STAX staked, 1 SHARESBONUS, 18% APY.</Typography>
                                    <Typography>User performs 4th Withdraw: 10, 000 STAX staked, 0 SHARESBONUS, 8% APY.</Typography>
                                    <Typography>
                                        Then, the staker will be allowed without any fees or penalties, only if the stake has passed its
                                        40th day. Otherwise, no withdraws are allowed.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item lg={7} height="auto" sx={{ borderRadius: 8, backgroundColor: theme.palette.grey[900], my: 7 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.success.main }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: theme.palette.success.main }} variant="h2" textAlign="left">
                                        STAX Audit
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        STAX have passed several audits and reports are publicly available (check below links). No issues or
                                        potential threats are found during the audit cycles. STAX IS SAFE.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item lg={7} height="auto" sx={{ borderRadius: 8, backgroundColor: theme.palette.grey[900], my: 7 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.success.main }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: theme.palette.success.main }} variant="h2" textAlign="left">
                                        Attention
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        STAX Protocol is a decentralized & trustless cryptocurrency without any admin keys or permission and
                                        everyone can take part in it. However, always do your own research and be aware that STAX is a
                                        decentralized financial ecosystem. Therefore, we are not responsible for any losess but responsible
                                        for providing efficient and secure staking protocol. It is essential to read the STAX whitepaper and
                                        fully understand the protocol.
                                    </Typography>
                                    <Typography>Never share your personal information with people on the internet.</Typography>
                                    <Typography>Keep your MetaMask recovery phrase safe and never share it.</Typography>
                                    <Typography>STAX admins will NEVER DM you first.</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item lg={7} height="auto" sx={{ borderRadius: 8, backgroundColor: theme.palette.grey[900], my: 7 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.success.main }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: theme.palette.success.main }} variant="h2" textAlign="left">
                                        Additional Assistance
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        If you still need assistance or any further information, please feel free to address your questions
                                        to STAX admins in our telegram group.
                                    </Typography>
                                    <Typography>Never share your personal information with people on the internet.</Typography>
                                    <Typography>Keep your MetaMask recovery phrase safe and never share it.</Typography>
                                    <Typography>STAX admins will NEVER DM you first.</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default FAQ;
