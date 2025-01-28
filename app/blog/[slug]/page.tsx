import React from "react";
import { Type } from "../page";
import { client } from "@/sanity/lib/client";
import Image from "next/image";


export default async function BlogId({
  params,
}: {
  params: { slug: string };
}) {
  const query = `*[_type == "blogPost"]{
    title,
    slug,
    "author": author->name,
    "category": category[]->{title, description, slug},
    tags,
    publishDate,
    image{asset->{url}},
    content
  }`;
  const fetching: Type[] = await client.fetch(query);

  // Find the blog post with the matching slug
  const matchSlug = fetching.find((blog) => blog.slug.current === params.slug);

  if (!matchSlug) {
    return <div>No Blog Available</div>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500">
    <div className="max-w-4xl mx-auto bg-white px-4 md:px-8 py-10 ">
      {/* Title and Metadata */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{matchSlug.title}</h1>
        <p className="text-gray-600">
          Published on {new Date(matchSlug.publishDate).toLocaleDateString()} by{" "}
          <span className="font-semibold text-black">{matchSlug.author.name}</span>
        </p>
      </div>

      {/* Image */}
      {matchSlug.image && (
        <div className="mb-8">
          <Image
            src={matchSlug.image.asset.url}
            alt={matchSlug.title}
            width={300}
            height={150}
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose max-w-none">
     {matchSlug.content}
      </div>

      {/* Tags */}
      {matchSlug.tags && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {matchSlug.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
      )}
      <div className="text-black ">
        {matchSlug.updatedAt}
      </div>
    </div>
    </div>
  );
}
