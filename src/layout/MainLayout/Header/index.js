// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import ProfileSection from './ProfileSection';
// assets
import MenuList from '../Sidebar/MenuList';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
    const theme = useTheme();
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
            <Box sx={{ flexGrow: 1 }} />
            {/* notification & profile */}
            <ProfileSection />
        </>
    );
};

export default Header;
