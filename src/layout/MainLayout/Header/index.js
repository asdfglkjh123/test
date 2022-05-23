// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import ProfileSection from './ProfileSection';
// assets
import MenuList from '../Sidebar/MenuList';
import { useState, useEffect } from 'react';
import { getStaxPrice } from 'components/wallet/sharesABI';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
    const [staxPrice, setStaxPrice] = useState([], [], []);
    const theme = useTheme();
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
            fetchStaxPrice();
        }
        load2();
    }, []);
    return (
        <>
            <Box
                sx={{
                    height: 58,
                    bgcolor: theme.palette.grey[900],
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{ display: { md: 'block' }, bgcolor: theme.palette.grey[900], flexGrow: 1 }}>
                    <LogoSection />
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' }, ml: 10, mt: 0.4 }}>
                    <MenuList />
                </Box>
            </Box>

            {/* header search */}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1, border: 1, height: 44, width: 45, borderRadius: 5, mr: 2, borderColor: theme.palette.success.main }}>
                <Typography sx={{ mt: 1.3, color: theme.palette.success.light }} variant="h4" textAlign="center">
                    {(staxPrice[1] / staxPrice[0]).toLocaleString(undefined, { maximumFractionDigits: 3 }).substring(0, 8)}
                    {` $ `}
                </Typography>
            </Box>
            {/* notification & profile */}
            <ProfileSection />
        </>
    );
};

export default Header;
