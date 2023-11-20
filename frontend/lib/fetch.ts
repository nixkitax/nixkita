import { client } from "./client"
import { allPostsQuery } from "./queries"

export const fetchAllPosts = async () => {
    return await client.fetch(allPostsQuery);
}