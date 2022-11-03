
import { Box, Card, CardActions, CardContent, Button, Typography, CardHeader, IconButton } from '@mui/material';
import { DeleteOutline, MoreVert, ModeEditOutline } from '@mui/icons-material';
import { Page } from '../pages/Pages';

interface Props {
    page: Page
}
var cardStyle = {
    display: 'block',
    transitionDuration: '0.3s',
    minHeight: '350px'
}

var buttonStyle = {
    position: "end",
}

export default function PageCard(props: Props) {
    return (
        <Card
            style={cardStyle}
            elevation={1}
        >
            <CardHeader
                action={
                    <>
                        <IconButton aria-label="settings" onClick={() => console.log('edit')}>
                            <ModeEditOutline />
                        </IconButton>
                        <IconButton aria-label="settings" onClick={() => console.log('delete')}>
                            <DeleteOutline />
                        </IconButton>
                    </>
                }
                title={props.page.title}
            />
            <CardContent>
                <Typography
                    variant='body2'
                    color="textSecondary" gutterBottom>
                    {props.page.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit page</Button>
            </CardActions>
        </Card>
    );
}
