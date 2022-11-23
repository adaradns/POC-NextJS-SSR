import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import PostCard from '~/components/card';
import Container from '@mui/material/Container';
import { GetServerSideProps } from 'next';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};


const Posts = ({ posts }) => {
  let [loading, setLoading] = useState(false);

  const showInfoPos = () => {
    setLoading(true)
  }
  return <Container maxWidth="lg" >
    {loading ?
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
        <CircularProgress />
        <Typography variant="h5" component="h2" align='center'>
          Loading...
        </Typography>
      </Grid>
      :
      <Box m={2} pb={5}>
        <Typography variant="h2" component="h2" align='center' gutterBottom={true}>
          Listado de Posts
          <Divider />
        </Typography>
        <Grid sx={{ flexGrow: 1 }} container spacing={5}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={5}>
              {posts.slice(0, 12).map((post: Post) => {
                return <Grid item key={post.id} >
                  <PostCard {...{ post, loading, showInfoPos }} />
                </Grid>
              })
              }
            </Grid>
          </Grid>
        </Grid>
      </Box>
    }
  </Container>
}

//SERVER SIDE RENDERING
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/posts`)
  const posts = await res.json()
  return {
    props: {
      posts
    }
  }
}
export default Posts;

