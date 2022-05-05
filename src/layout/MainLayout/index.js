import { Outlet } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material';

// project imports
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from './Header';
import Customization from '../Customization';
import navigation from 'menu-items';

// assets
import { IconChevronRight } from '@tabler/icons';
import FooterMenu from './FooterMenu';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
    ...theme.typography.mainContent
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', bgcolor: theme.palette.grey[800] }}>
            <CssBaseline />
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default
                }}
            >
                <Toolbar>
                    <Header />
                </Toolbar>
            </AppBar>
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                xs={12}
                sx={{
                    top: 'auto',
                    bottom: 0,
                    bgcolor: theme.palette.background.default
                }}
            >
                <FooterMenu />
            </AppBar>
            <Main theme={theme}>
                <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
                <Outlet />
            </Main>
            <Customization />
        </Box>
    );
};

export default MainLayout;
