import { Container, Grid } from "@mui/material"
import PostCard from "../components/PostCard"
import useAxios from "../utils/useAxios";
import { PostInterface } from "../utils/interfaces";

const Posts = () => {
    const { response, loading, error } = useAxios({
        method: "GET",
        url: `/posts`,
        headers: {
            accept: '*/*'
        }
    });
    return (
        <Container>
            <Grid container spacing={3}>
                {response?.data.map((post: PostInterface, i: number) => (
                    <Grid item key={i} xs={12} md={6} lg={4}>
                        <PostCard post={post} />
                    </Grid>
                ))}
            </Grid>
        </Container >
    )

}
export default Posts;