
import { Box, Card, CardActions, CardContent, Button, Typography, CardHeader, IconButton } from '@mui/material';
import { DeleteOutline, MoreVert, ModeEditOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PostCardInterface } from '../utils/interfaces';



var cardStyle = {
    display: 'block',
    transitionDuration: '0.3s',
    minHeight: '300px'
}

export default function PostCard(props: PostCardInterface) {
    const { title, content, id } = props.post;

    const navigate = useNavigate();
    return (
        <Card style={cardStyle} elevation={1}>
            <CardHeader
                action={
                    <>
                        <IconButton aria-label="settings" onClick={() => navigate(`posts/${id}`)}>
                            <ModeEditOutline />
                        </IconButton>
                        <IconButton aria-label="settings" onClick={() => console.log('delete')}>
                            <DeleteOutline />
                        </IconButton>
                    </>
                }
                title={title}
            />
            <CardContent>
                <Typography
                    variant='body2'
                    color="textSecondary" gutterBottom>
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
}
