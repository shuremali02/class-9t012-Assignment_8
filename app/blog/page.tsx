import { client } from "@/sanity/lib/client";
import BlogCard from "../Component/blogCard";
import React from "react";

export interface Type {
  title: string;
  content: string ;
  category: { title: string; description: string; slug: string }[]; // Correct type
  image: { asset: { url: string }; alt: string };
  createdAt: string;
  updatedAt: string;
  _id: string;
  slug: { current: string };
  author: {
    _id: string;
    name: string;
  };
  tags: string[];
  publishDate: string;
}

export default async function Page() {
  const query = '*[_type == "blogPost"]{title,slug,"author": author->name,"category": category[]->{title, description, slug},tags, publishDate,image{asset->{url}},content}';
  const fetching: Type[] = await client.fetch(query);

  return (
    <div>
    <div className="grid grid-cols-1 p-12 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500">
      {fetching.map((post) => (
      <BlogCard key={post._id} post={post} /> 
      ))}
    </div>
    </div>
  );
}
