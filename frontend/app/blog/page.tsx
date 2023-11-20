import Card from '@/components/Card'
import { fetchAllPosts } from '@/lib/fetch';
import { PostCard } from '@/types/postCard';
import React from 'react';

const Blog = async () => {
  const posts: any = await fetchAllPosts();

  return (
    <div className="flex flex-wrap justify-center">
     <div>
      {posts.map((post: any) => (
        <Card 
          key={post.slug}
          title={post.name}
          excerpt={post.excerpt}
        />
      ))}
    </div>
    </div>
  );
};

export default Blog