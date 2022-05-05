import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import BannerComp from './banner';
import TopTitle from './TopTitle';
import SmallDashboard from './smallDashboard';
import FooterFirst from './Footer1';
import Description from './Description';
import StakingInfo from './StakingInfo';
import SharesInfo from './SharesInfo';
import Socials from './Socials';
import Partners from './partners';
import FAQ from './FAQ';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <Grid container justifyContent="center" alignContent="center">
                <Grid item sx={{ my: 4 }} lg={6} md={6} sm={12} xs={12}>
                    <TopTitle isLoading={isLoading} />
                </Grid>
                <Grid item lg={3.7} md={4.5} sm={7} xs={10} sx={{ mt: 3 }}>
                    <BannerComp />
                </Grid>
            </Grid>

            <Grid item sx={{ my: 8, mx: 0 }} lg={12} md={12} sm={12} xs={12}>
                <SmallDashboard isLoading={isLoading} />
            </Grid>
            <Grid container>
                <Grid item lg={12} xs={12} sx={{ my: 10, ml: 0 }}>
                    <FooterFirst />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} sx={{ ml: -2.4 }}>
                    <Description />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} sx={{ ml: -2.4 }}>
                    <StakingInfo />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} sx={{ ml: -2.4 }}>
                    <SharesInfo />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} sx={{ my: 10, ml: -2.4 }}>
                    <Socials />
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item lg={12} md={12} xs={12}>
                    <Partners />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12} sx={{ my: 0, ml: -2.4 }}>
                    <FAQ />
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
