import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import { Container, FilledInput, FormControl, InputLabel, Stack, Typography } from '@mui/material';
import ErrorPage from './ErrorPage';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/helpers';
import { BASE_URL } from '../utils/constants';

const EditPost = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        content: ""
    });
    const [error, setError] = useState('');

    //Function for single post
    const getSinglePost = async (id: string | undefined) => {
        const result = await api.get(`${BASE_URL}/${id}`);
        setPost(result.data)
    }

    //Get single post with exact id when component is mounted
    useEffect(() => {
        getSinglePost(id);
    }, [id])

    //Taking values from inputs, store to post state
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement;
        setPost(prevState => ({ ...prevState, [name]: value }));
    };

    const editPost = async () => {
        try {
            await api.put(`${BASE_URL}/${id}`, post);
            navigate('/')

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
                    Edit post
                </Typography>
                <FormControl fullWidth sx={{ m: 1, py: 2 }} >
                    <InputLabel htmlFor="filled-adornment-title">Title</InputLabel>
                    <FilledInput
                        name='title'
                        multiline
                        minRows={2}
                        id="filled-adornment-title"
                        defaultValue={post?.title}
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
                        defaultValue={post?.content}
                        onChange={handleChange}
                    />
                </FormControl>
                <Box display="flex" justifyContent="flex-end">
                    <Stack direction="row" spacing={2} sx={{ m: 1 }} >
                        <CustomButton onClick={editPost}>Save</CustomButton>
                        <CustomButton color="error" onClick={() => navigate('/')}>Cancel</CustomButton>
                    </Stack>
                </Box>
            </Container>

    )
}
export default EditPost;