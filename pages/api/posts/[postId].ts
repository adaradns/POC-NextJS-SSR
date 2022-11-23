import * as posts from "../../../lib/posts";
import { NextApiRequest, NextApiResponse } from "next";

const { getPostById } = posts;

export default async function handler(req: NextApiRequest, res: NextApiResponse){  
    const { postId } = req.query;
    const result = await getPostById(postId);
    res.json(result);    
}