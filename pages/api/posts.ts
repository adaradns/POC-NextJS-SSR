import * as posts from "../../lib/posts";
import { NextApiRequest, NextApiResponse } from "next";

const { getAllPosts } = posts;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const result = await getAllPosts()
    res.json(result)
}
