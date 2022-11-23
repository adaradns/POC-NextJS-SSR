import * as posts from "../../../../lib/posts";
import { NextApiRequest, NextApiResponse } from "next";

const { getComentsPost } = posts;

export default async function handler(req: NextApiRequest, res: NextApiResponse){  
    const { commentsByPost } = req.query;
    const comments  = await getComentsPost(commentsByPost);
    res.json(comments);    
}