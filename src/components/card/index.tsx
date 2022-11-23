import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "next/link";


const PostCard = ({ post, loading, showInfoPos }) => {
    let [date, setDate] = useState(new Date());   

    useEffect(() => {
        setDate(new Date());
    }, [])
    
    return (
      <Card sx={{ width: 500, height: 250 }} style={{ position: "relative" }}>
          <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Post creado: {date.toLocaleDateString()}
              </Typography>
              <Typography variant="h5" component="div">
                  {post.id} - {post.title}
              </Typography>
              <Typography variant="body2">
                  {post.body}
              </Typography>
              <CardActions>
                  <Link href={`/posts/${post.id}`}>
                      <Button variant="contained" onClick={showInfoPos} style={{ position: "absolute", bottom: "10px" }}>
                          Ver post
                      </Button>
                  </Link>
              </CardActions>
          </CardContent>

      </Card>
    )
}


export default PostCard;