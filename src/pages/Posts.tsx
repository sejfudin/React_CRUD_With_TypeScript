import { useEffect, useState } from 'react';
import { Box, Container, Grid, Stack } from "@mui/material"
import PostCard from "../components/PostCard";
import { PostInterface } from "../utils/interfaces";
import { api } from '../utils/helpers';
import ErrorPage from './ErrorPage';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    //Get all posts
    const getPosts = async () => {
        try {
            const result = await api.get('/');
            setPosts(result.data)
        } catch (error: any) {
            setError(error.message);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        error ?
            <ErrorPage message={error} />
            :
            <Container>
                <Box display="flex" justifyContent="flex-end">
                    <Stack direction="row" spacing={2} sx={{ m: 1 }} >
                        <CustomButton onClick={() => navigate('/new-post')}>New Post</CustomButton>
                    </Stack>
                </Box>
                <Grid container spacing={3}>
                    {posts && posts.map((post: PostInterface, i: number) => (
                        <Grid item key={i} xs={12} md={6} lg={4}>
                            <PostCard post={post} />
                        </Grid>
                    ))}
                </Grid>
            </Container >
    )
}
export default Posts;