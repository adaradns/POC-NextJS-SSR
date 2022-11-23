import React from 'react'
import PostInfoComponent from '~/components/post-info';
import { GetStaticPaths, GetStaticProps } from 'next'

const PostInfo = ({ postInfo, comments }) => {
 
  return (
    <PostInfoComponent 
      postInfo = {postInfo} 
      comments = {comments}
    />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  //Pre renderiza solo las rutas que estan en path, fallBack: false, singifica
  //Que las rutas que no esten pre-renderizadas devolveran 404
  return { paths, fallback: false  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const resPost = await fetch(`http://localhost:3000/api/posts/${params.id}`)
  const postInfo = await resPost.json()
  const resComments = await fetch(`http://localhost:3000/api/posts/comments/${params.id}`)
  const comments = await resComments.json()

  return { props: { postInfo, comments } }
}

export default PostInfo