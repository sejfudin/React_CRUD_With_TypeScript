import { Card, CardContent, Typography, CardHeader, IconButton } from '@mui/material';
import { ModeEditOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PostCardInterface } from '../utils/interfaces';

var cardStyle = {
    display: 'block',
    transitionDuration: '0.3s',
    minHeight: '300px'
}

const PostCard = (props: PostCardInterface) => {
    const { title, content, id } = props.post;

    const navigate = useNavigate();
    return (
        <Card style={cardStyle} elevation={1}>
            <CardHeader
                action={
                    <IconButton aria-label="settings" onClick={() => navigate(`posts/${id}`)}>
                        <ModeEditOutline />
                    </IconButton>
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
export default PostCard;
