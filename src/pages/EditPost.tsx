import { useParams } from 'react-router-dom';
import useAxios from '../utils/useAxios';

import Box from '@mui/material/Box';
import { Container, FilledInput, FormControl, InputLabel, Stack, Typography } from '@mui/material';
import ErrorPage from './ErrorPage';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const EditPost = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { response, loading, error, sendData } = useAxios({
        method: "GET",
        url: `/posts/${id}`,
        headers: {
            accept: '*/*'
        }
    });

    const handleChange = () => {

    }
    return (
        (error && !loading) ?
            <ErrorPage />
            :
            <Container>
                <Typography>
                    <Box sx={{ textAlign: 'center', mb: 10, textTransform: 'uppercase', fontWeight: 'bold', fontSize: 32 }}>
                        Edit post
                    </Box>
                </Typography>
                <FormControl fullWidth sx={{ m: 1, py: 2 }} >
                    <InputLabel htmlFor="filled-adornment-title">Title</InputLabel>
                    <FilledInput
                        multiline
                        minRows={2}
                        id="filled-adornment-title"
                        value={response?.data.title}
                    // onChange={handleChange('amount')}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, py: 2 }} >
                    <InputLabel htmlFor="filled-adornment-content">Content</InputLabel>
                    <FilledInput
                        multiline
                        minRows={5}
                        id="filled-adornment-content"
                        value={response?.data.content}
                    // onChange={handleChange('amount')}
                    />
                </FormControl>
                <Box display="flex" justifyContent="flex-end">
                    <Stack direction="row" spacing={2} sx={{ m: 1 }} >
                        <CustomButton onClick={() => console.log('save')}>Save</CustomButton>
                        <CustomButton color="error" onClick={() => navigate('/')}>Cancel</CustomButton>
                    </Stack>
                </Box>
            </Container>

    )
}
export default EditPost;