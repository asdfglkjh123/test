// project imports
import Telegram from '../../../assets/telegramlogo.png';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TelegramLogo = () => {
    useTheme();
    return (
        <>
            <Grid sx={{ justifyContent: 'center', display: 'flex' }}>
                <img height={200} src={Telegram} alt="shares banner" />
            </Grid>
        </>
    );
};

export default TelegramLogo;
