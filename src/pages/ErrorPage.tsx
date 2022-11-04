import { Box, Button, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const primary = purple[500]; // #f44336
interface Props {
    message: string
}

export default function ErrorPage(props: Props) {

    const {message}= props;
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: primary,
            }}
        >
            <Typography variant="h1" style={{ color: 'white' }}>
                404
            </Typography>
            <Typography variant="h6" style={{ color: 'white' }}>
                Message: {message}
            </Typography>
            <Button
                variant="contained"
                onClick={() => navigate('/')}
            >
                Back Home
            </Button>
        </Box>
    );
}