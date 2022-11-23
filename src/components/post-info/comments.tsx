import React, { Fragment } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


const Comments = ({ comments }) => {

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <Typography variant="h6">
                Comments
            </Typography>
            {comments.map((comment) => {
                return <Fragment key={comment.id}>
                    <ListItem alignItems="flex-start" >
                        <ListItemText
                            primary={comment.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {comment.email}:
                                    </Typography>
                                    {comment.body}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Fragment>
            })}
        </List>

    )
}


export default Comments;