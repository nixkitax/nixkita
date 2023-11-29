import React from 'react';
import AFCLogo from "@/components/icons/AFCLogo";
import { getAllPosts, getAllProjects, getPostsSlugs } from "@/lib/api";
import Card from '@/components/Card';
import Image from 'next/image';
import Link from 'next/link';
import BlackButton from '@/components/BlackButton';
import Hero from '@/components/layout/Hero';

const getPosts = () => {
  return getAllPosts(['slug', 'title', 'excerpt', 'started'])
}
const Blog = () => {
  const posts = getPosts()
  const slugs =  getAllPosts(['slug']).map((post) => ({
      slug: post.slug
  }))
  console.log(slugs)

  return (
      <div className="mt-10 flex flex-wrap justify-center custom-shape-divider-top-1700522096">
        <div className="flex max-w w-full h-40 justify-center mb-0">
          <AFCLogo />
          
        </div>
        <div>
        <Hero/>
        </div>
        <div className="flex auto-row pt-20 md: flex-row gap-14">
        <BlackButton text="Latest post"/>
        <BlackButton text="Algorithms"/>
        <BlackButton text="Latest post"/>

        </div>
      <div className="flex max-w w-full h-max row-auto m-10">
        <div className=" pr-20 max-w w-full border-green-600">
          <h1 className="font-mono text-2xl font-semibold">
            Latest post...
          </h1>
          <div className=" mt-10">
           {posts.map((post) => (
            <div>
              <Link href={`/blog/${post.slug}`}>
                <Card
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date = {post.started}
                >
                </Card>
              </Link>
            </div>
           ))}
          </div>
        
        </div>
      </div>
    </div> 
  );
};

export default Blog;


