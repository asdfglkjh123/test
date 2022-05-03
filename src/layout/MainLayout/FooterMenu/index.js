// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
// assets
import MenuList from '../Sidebar/MenuList';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const FooterMenu = () => {
    const theme = useTheme();
    const hidden = useMediaQuery((theme) => theme.breakpoints.only('xs'));

    return (
        <>
            {hidden ? (
                <Box
                    sm={12}
                    sx={{
                        mt: 1,
                        height: 58,
                        bgcolor: theme.palette.grey[900],
                        justifyContent: 'center',
                        display: 'flex',
                        [theme.breakpoints.down('md')]: {
                            width: 'auto'
                        }
                    }}
                >
                    <MenuList />
                </Box>
            ) : null}
        </>
    );
};

export default FooterMenu;
