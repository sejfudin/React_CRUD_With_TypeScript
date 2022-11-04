import { useState } from 'react';

import Box from '@mui/material/Box';
import { Container, FilledInput, FormControl, InputLabel, Stack, Typography } from '@mui/material';
import ErrorPage from './ErrorPage';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { PostInterface } from '../utils/interfaces';
import { BASE_URL } from '../utils/constants';
import { api } from '../utils/helpers';

const AddPost = () => {
    const navigate = useNavigate();

    const [post, setPost] = useState({
        title: "",
        content: ""
    });
    const [error, setError] = useState('');

    //Taking values from inputs, store to post state
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement;
        setPost(prevState => ({ ...prevState, [name]: value }));
    };

    //Post request used for add new post
    const addPost = async () => {
        try {
            await api.post(BASE_URL, post);
            const resultat = await api.get(BASE_URL);
            const id = Math.max(...resultat.data.map((post: PostInterface) => post.id));
            navigate(`/posts/${id}`)
        } catch (error: any) {
            setError(error.message);
        }
    }

    return (
        error ?
            <ErrorPage message={error} />
            :
            <Container>
                <Typography sx={{ textAlign: 'center', mb: 10, textTransform: 'uppercase', fontWeight: 'bold', fontSize: 32 }}>
                    Add new post
                </Typography>
                <FormControl fullWidth sx={{ m: 1, py: 2 }} >
                    <InputLabel htmlFor="filled-adornment-title">Title</InputLabel>
                    <FilledInput
                        name='title'
                        multiline
                        minRows={2}
                        id="filled-adornment-title"
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, py: 2 }} >
                    <InputLabel htmlFor="filled-adornment-content">Content</InputLabel>
                    <FilledInput
                        name='content'
                        multiline
                        minRows={5}
                        id="filled-adornment-content"
                        onChange={handleChange}
                    />
                </FormControl>
                <Box display="flex" justifyContent="flex-end">
                    <Stack direction="row" spacing={2} sx={{ m: 1 }} >
                        <CustomButton onClick={addPost}>Save</CustomButton>
                        <CustomButton color="error" onClick={() => navigate('/')}>Cancel</CustomButton>
                    </Stack>
                </Box>
            </Container>

    )
}
export default AddPost;