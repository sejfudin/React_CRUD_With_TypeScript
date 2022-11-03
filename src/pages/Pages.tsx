import { Container, Grid } from "@mui/material"
import PageCard from "../components/PageCard"
import useAxios from "../utils/useAxios";
export interface Page {
    id: number
    title: string;
    content: string;
}
const Pages = () => { 
    const { response, loading, error } = useAxios({
        method: "GET",
        url: `/posts`,
        headers: {
            accept: '*/*'
        }
    });
    return(
        <Container>
        <Grid container spacing={3}>
            {response?.data.map((page: Page, i: number) => (
                <Grid item key={i} xs={12} md={6} lg={4}>
                    <PageCard page={page} /></Grid>
            ))}
        </Grid>
    </Container >
    )
     
}
export default Pages;