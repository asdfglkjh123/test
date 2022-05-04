// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
// assets
import MenuList from '../Sidebar/MenuList';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const FooterMenu = () => {
    const theme = useTheme();
    const hidden = useMediaQuery((theme) => theme.breakpoints.between('xs', 'md'));

    return (
        <>
            {hidden ? (
                <Box
                    sm={12}
                    sx={{
                        mt: 1,
                        width: '100%',
                        height: 57,
                        bgcolor: theme.palette.grey[900],
                        justifyContent: 'center',
                        display: 'flex'
                    }}
                >
                    <MenuList />
                </Box>
            ) : null}
        </>
    );
};

export default FooterMenu;
