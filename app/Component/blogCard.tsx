import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: {
    image: { asset: { url: string } };
    title: string;
    category?: { title: string; description: string }[];
    createdAt: string;
    updatedAt: string;
    _id: string;
    slug: { current: string };
    author: { _id: string; name: string };
    tags?: string[]; // Make tags optional
    publishDate: string;
    
    content?: string;
  };
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div
      key={post._id}
      className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl"
    >
      {/* Image with Text Overlay */}
      <div className="relative transition-transform transform hover:scale-90"
    >
        <Image
          src={post.image.asset.url}
          alt={post.slug.current}
          width={350}
          height={200}
          className="object-cover w-full h-56 "
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <h2 className="text-2xl font-bold text-white text-center">{post.title}</h2>
        </div>
      </div>
      
      <div className="px-6 p-2">
            <h2 className="text-xl font-semibold text-black text-start">{post.title}</h2>
            </div>
      {/* Categories */}

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.category?.map((categories, index) => (
            <span
              key={index}
              className="bg-gray-100 text-black text-xs px-2 py-1 rounded-md"
            >
              {categories.title}
            </span>
          )) || <span className="text-gray-500 text-xs italic">No categories</span>}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-lime-100 text-lime-600 text-xs px-2 py-1 rounded-md"
            >
              #{tag}
            </span>
          )) || <span className="text-gray-500 text-xs italic">No tags</span>}
        </div>

        {/* Read More Button */}
        <Link href={`/blog/${post.slug.current}`} passHref>
          <button className="mt-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-lime-400 transition-colors w-full">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
