import React from 'react'
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Comments from './comments';

const PostInfoComponent = ({ postInfo, comments }) => {
    return (
        <Container fixed style={{ width: 800, justifyContent: 'center' }}>
            <Card style={{ padding: 50 }}>
                <CardContent>
                    <Typography variant="h3" component="div">
                        Post Numero: {postInfo.id}
                    </Typography>
                    <Typography variant="h4" component="div">
                        {postInfo.title}
                    </Typography>
                    <Typography variant="body2">
                        {postInfo.body}
                    </Typography>

                    <Comments
                        comments={comments}
                    />
                </CardContent>
            </Card>
        </Container>
    )
}

export default PostInfoComponent;